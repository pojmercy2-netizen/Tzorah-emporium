import { createError, readMultipartFormData, readBody } from 'h3'
import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'
import { requireAdmin } from '../../utils/auth'

export default defineEventHandler(async (event) => {
  await requireAdmin(event)

  const mediaDir = path.join(process.cwd(), 'public', 'uploads', 'media')
  const productsDir = path.join(process.cwd(), 'public', 'uploads', 'products')

  if (!fs.existsSync(mediaDir)) {
    fs.mkdirSync(mediaDir, { recursive: true })
  }
  if (!fs.existsSync(productsDir)) {
    fs.mkdirSync(productsDir, { recursive: true })
  }

  let fileBuffer: Buffer | null = null
  let fileExt = 'png'
  let isVideo = false

  const multiPart = await readMultipartFormData(event).catch(() => null)
  if (multiPart && multiPart.length > 0) {
    const filePart = multiPart.find(p => p.name === 'file' || p.name === 'video' || p.name === 'image') || multiPart[0]
    if (filePart && filePart.data) {
      fileBuffer = filePart.data
      const type = (filePart.type || '').toLowerCase()
      const origFilename = (filePart.filename || '').toLowerCase()

      // Detect video types
      if (type.includes('mp4') || origFilename.endsWith('.mp4')) {
        fileExt = 'mp4'
        isVideo = true
      } else if (type.includes('webm') || origFilename.endsWith('.webm')) {
        fileExt = 'webm'
        isVideo = true
      } else if (type.includes('ogg') || origFilename.endsWith('.ogv') || origFilename.endsWith('.ogg')) {
        fileExt = 'ogg'
        isVideo = true
      } else if (type.includes('quicktime') || origFilename.endsWith('.mov')) {
        fileExt = 'mov'
        isVideo = true
      }
      // Detect image types
      else if (type.includes('jpeg') || type.includes('jpg') || origFilename.endsWith('.jpg') || origFilename.endsWith('.jpeg')) {
        fileExt = 'jpg'
      } else if (type.includes('webp') || origFilename.endsWith('.webp')) {
        fileExt = 'webp'
      } else if (type.includes('png') || origFilename.endsWith('.png')) {
        fileExt = 'png'
      } else if (type.includes('gif') || origFilename.endsWith('.gif')) {
        fileExt = 'gif'
      }
    }
  }

  if (!fileBuffer) {
    const body = await readBody(event).catch(() => null)
    if (body?.video || body?.image || body?.file || body?.base64) {
      const dataStr = body.video || body.image || body.file || body.base64
      const matches = dataStr.match(/^data:([A-Za-z0-9\-\+\/]+);base64,(.+)$/)
      if (matches) {
        const mime = matches[1].toLowerCase()
        if (mime.includes('mp4')) { fileExt = 'mp4'; isVideo = true }
        else if (mime.includes('webm')) { fileExt = 'webm'; isVideo = true }
        else if (mime.includes('ogg')) { fileExt = 'ogg'; isVideo = true }
        else if (mime.includes('quicktime')) { fileExt = 'mov'; isVideo = true }
        else if (mime.includes('jpeg') || mime.includes('jpg')) fileExt = 'jpg'
        else if (mime.includes('webp')) fileExt = 'webp'
        else if (mime.includes('png')) fileExt = 'png'
        else if (mime.includes('gif')) fileExt = 'gif'
        fileBuffer = Buffer.from(matches[2], 'base64')
      } else {
        fileBuffer = Buffer.from(dataStr, 'base64')
      }
    }
  }

  if (!fileBuffer || fileBuffer.length === 0) {
    throw createError({ statusCode: 400, message: 'No media file received' })
  }

  const prefix = isVideo ? 'video-ad' : 'media'
  const fileName = `${prefix}-${crypto.randomBytes(6).toString('hex')}-${Date.now()}.${fileExt}`
  const targetDir = isVideo ? mediaDir : productsDir
  const filePath = path.join(targetDir, fileName)
  fs.writeFileSync(filePath, fileBuffer)

  const publicUrl = isVideo ? `/uploads/media/${fileName}` : `/uploads/products/${fileName}`
  return {
    success: true,
    url: publicUrl,
    fileName,
    type: isVideo ? 'video' : 'image'
  }
})
