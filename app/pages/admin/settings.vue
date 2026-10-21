<template>
  <div class="admin-settings">
    <!-- Header -->
    <div class="settings-header animate-fade-in">
      <div>
        <h1 class="page-title">Console Settings</h1>
        <p class="page-subtitle">Configure site metadata, shipping policies, banner announcements and gates.</p>
      </div>
    </div>

    <!-- Form Area -->
    <form @submit.prevent="saveSettings" class="settings-grid animate-fade-in">
      
      <!-- General Brand settings -->
      <div class="admin-card span-6">
        <h2 class="admin-card-title">GENERAL STORE PROFILE</h2>
        <div class="card-form">
          <div class="form-group">
            <label class="form-label">STORE BRAND NAME</label>
            <input v-model="settings.storeName" type="text" class="form-input" required />
          </div>

          <div class="form-group">
            <label class="form-label">TAGLINE / HEADER SUBTITLE</label>
            <input v-model="settings.tagline" type="text" class="form-input" required />
          </div>
        </div>
      </div>

      <!-- Contact Information -->
      <div class="admin-card span-6">
        <h2 class="admin-card-title">CONTACT INFORMATION</h2>
        <p class="admin-card-subtitle">These details appear on your homepage contact section and footer.</p>
        <div class="card-form">
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">SUPPORT EMAIL</label>
              <input v-model="settings.supportEmail" type="email" class="form-input" />
            </div>
            <div class="form-group">
              <label class="form-label">STORE TELEPHONE</label>
              <input v-model="settings.telephone" type="text" class="form-input" />
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">BUSINESS HOURS</label>
            <input v-model="settings.businessHours" type="text" class="form-input" placeholder="e.g. Mon – Fri, 9am – 6pm" />
          </div>

          <div class="form-group">
            <label class="form-label">STORE / CONTACT ADDRESS</label>
            <input v-model="settings.contactAddress" type="text" class="form-input" placeholder="e.g. Port Harcourt, Rivers State, Nigeria" />
          </div>

          <div class="form-group">
            <label class="form-label">RESPONSE TIME MESSAGE</label>
            <input v-model="settings.responseTime" type="text" class="form-input" placeholder="e.g. Response within 24 hours" />
          </div>

          <div class="form-group">
            <label class="form-label">
              WHATSAPP NUMBER
              <span class="wa-badge">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                Floating chat button
              </span>
            </label>
            <input v-model="settings.whatsappNumber" type="text" class="form-input" placeholder="e.g. 2348012345678 (with country code, no +)" />
            <p class="form-hint">Include country code without the + sign. Leave blank to hide the button.</p>
          </div>
        </div>
      </div>

      <!-- Shipping & Fulfilment settings -->
      <div class="admin-card span-6">
        <h2 class="admin-card-title">DELIVERY & CHECKOUT RULES</h2>
        <div class="card-form">
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">FREE SHIPPING THRESHOLD (₦)</label>
              <input v-model.number="settings.freeShippingThreshold" type="number" min="0" class="form-input" required />
            </div>
            <div class="form-group">
              <label class="form-label">STANDARD SHIPPING FEE (₦)</label>
              <input v-model.number="settings.standardShippingFee" type="number" min="0" class="form-input" required />
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">EXPRESS SHIPPING FEE (₦)</label>
            <input v-model.number="settings.expressShippingFee" type="number" min="0" class="form-input" required />
            <p class="form-hint">Charged when a customer selects Express Shipping (2–3 Business Days) at checkout.</p>
          </div>

          <div class="form-group">
            <label class="form-label">DEFAULT CURRENCY</label>
            <select v-model="settings.currency" class="form-input">
              <option value="NGN">NGN (₦) - Nigerian Naira</option>
              <option value="USD">USD ($) - United States Dollar</option>
              <option value="EUR">EUR (€) - Eurozone Euro</option>
              <option value="GBP">GBP (£) - British Pound</option>
            </select>
          </div>

          <div class="form-group">
            <label class="form-label">FULFILMENT AUTO-APPROVE</label>
            <div class="toggle-wrapper">
              <input v-model="settings.autoApproveOrders" type="checkbox" id="auto-approve-toggle" class="toggle-checkbox" />
              <label for="auto-approve-toggle" class="toggle-label"></label>
              <span class="toggle-text">Auto-transition incoming orders to "Processing" state</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Announcement Banner -->
      <div class="admin-card span-6">
        <h2 class="admin-card-title">ANNOUNCEMENT TOP BAR</h2>
        <div class="card-form">
          <div class="form-group">
            <label class="form-label">BANNER STATE</label>
            <div class="toggle-wrapper">
              <input v-model="settings.announcementEnabled" type="checkbox" id="announcement-toggle" class="toggle-checkbox" />
              <label for="announcement-toggle" class="toggle-label"></label>
              <span class="toggle-text">Enable and show top announcement bar on storefront pages</span>
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">ANNOUNCEMENT TEXT MESSAGE</label>
            <input v-model="settings.announcementText" type="text" class="form-input" :disabled="!settings.announcementEnabled" />
          </div>

          <div class="form-group">
            <label class="form-label">THEME / BACKGROUND BACKGROUND COLOR</label>
            <div class="color-picker-wrapper">
              <input v-model="settings.announcementBg" type="color" class="color-picker" :disabled="!settings.announcementEnabled" />
              <span class="color-hex-val font-mono">{{ settings.announcementBg }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Bank Transfer Accounts Section -->
      <div class="admin-card span-12">
        <div class="card-header-flex">
          <div>
            <h2 class="admin-card-title">BANK TRANSFER PAYMENT ACCOUNTS</h2>
            <p class="admin-card-subtitle">Manage bank account details provided to customers during checkout.</p>
          </div>
          <button type="button" class="btn-add-bank" @click="addBankAccount">
            + ADD BANK ACCOUNT
          </button>
        </div>

        <div class="bank-accounts-list">
          <div
            v-for="(acc, idx) in settings.bankAccounts"
            :key="acc.id || idx"
            class="bank-account-card"
          >
            <div class="bank-account-card-header">
              <span class="account-badge">BANK ACCOUNT #{{ idx + 1 }}</span>
              <button
                type="button"
                class="btn-remove-bank"
                @click="removeBankAccount(idx)"
                title="Remove account"
              >
                ✕ REMOVE
              </button>
            </div>

            <div class="card-form">
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">BANK NAME</label>
                  <input
                    v-model="acc.bankName"
                    type="text"
                    class="form-input"
                    placeholder="e.g. Guaranty Trust Bank (GTBank)"
                    required
                  />
                </div>

                <div class="form-group">
                  <label class="form-label">ACCOUNT NUMBER</label>
                  <input
                    v-model="acc.accountNumber"
                    type="text"
                    class="form-input font-mono"
                    placeholder="e.g. 0123456789"
                    required
                  />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">ACCOUNT NAME / BENEFICIARY</label>
                  <input
                    v-model="acc.accountName"
                    type="text"
                    class="form-input"
                    placeholder="e.g. TZORAH EMPORIUM ENTERPRISES"
                    required
                  />
                </div>

                <div class="form-group">
                  <label class="form-label">TRANSFER INSTRUCTIONS / MEMO NOTE</label>
                  <input
                    v-model="acc.instructions"
                    type="text"
                    class="form-input"
                    placeholder="e.g. Use your Order ID as payment description."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Homepage Video Display Section -->
      <div class="admin-card span-12" id="video-advert">
        <div class="card-header-flex">
          <div>
            <h2 class="admin-card-title">HOMEPAGE PRODUCT VIDEO DISPLAY</h2>
            <p class="admin-card-subtitle">
              Upload a commercial/product showcase video to display on the homepage before the Essentials collection.
            </p>
          </div>
          <div class="toggle-wrapper">
            <input v-model="settings.videoAdvertEnabled" type="checkbox" id="video-advert-toggle" class="toggle-checkbox" />
            <label for="video-advert-toggle" class="toggle-label"></label>
            <span class="toggle-text">{{ settings.videoAdvertEnabled ? 'Active on Home Page' : 'Hidden from Storefront' }}</span>
          </div>
        </div>

        <div class="video-advert-editor-grid">
          <!-- Left Column: Upload Controls -->
          <div class="card-form">
            <!-- Video File Upload & URL -->
            <div class="form-group">
              <label class="form-label">UPLOAD VIDEO FILE (MP4, WEBM, MOV)</label>
              <div class="media-upload-box" @click="triggerVideoPicker" :class="{ 'is-uploading': uploadingVideo }">
                <input
                  ref="videoFileInput"
                  type="file"
                  accept="video/mp4,video/webm,video/ogg,video/quicktime,.mp4,.webm,.mov"
                  class="hidden-file-input"
                  @change="handleVideoUpload"
                />
                <div v-if="uploadingVideo" class="upload-state">
                  <span class="spinner"></span>
                  <span>Uploading video to server...</span>
                </div>
                <div v-else-if="settings.videoAdvertUrl" class="upload-has-file">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d4af37" stroke-width="2"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
                  <div class="upload-file-meta">
                    <span class="upload-file-name font-mono">{{ settings.videoAdvertUrl }}</span>
                    <span class="upload-change-tip">Click here to upload a different video file</span>
                  </div>
                </div>
                <div v-else class="upload-empty">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                  <span>Click to choose & upload product video file (.mp4, .webm, .mov)</span>
                  <span class="upload-sub">Recommended: 16:9 or 21:9 ratio commercial video</span>
                </div>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">OR DIRECT VIDEO / EMBED URL</label>
              <input
                v-model="settings.videoAdvertUrl"
                type="text"
                class="form-input font-mono"
                placeholder="e.g. /uploads/media/video.mp4 or YouTube / Vimeo URL"
              />
              <p class="form-hint">Direct URL to an MP4 video or YouTube / Vimeo link.</p>
            </div>

            <!-- Optional Poster Image Upload & URL -->
            <div class="form-group">
              <label class="form-label">POSTER / THUMBNAIL IMAGE (OPTIONAL)</label>
              <div class="poster-input-row">
                <input
                  v-model="settings.videoAdvertPoster"
                  type="text"
                  class="form-input"
                  placeholder="e.g. /hero_fragrances.jpg"
                />
                <input
                  ref="posterFileInput"
                  type="file"
                  accept="image/*"
                  class="hidden-file-input"
                  @change="handlePosterUpload"
                />
                <button type="button" class="btn-upload-poster" @click="triggerPosterPicker" :disabled="uploadingPoster">
                  <span v-if="uploadingPoster" class="spinner"></span>
                  <span v-else>UPLOAD IMAGE</span>
                </button>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">PLAYBACK OPTIONS</label>
              <div class="toggle-wrapper">
                <input v-model="settings.videoAdvertLoop" type="checkbox" id="video-loop-toggle" class="toggle-checkbox" />
                <label for="video-loop-toggle" class="toggle-label"></label>
                <span class="toggle-text">Loop video seamlessly continuously</span>
              </div>
            </div>
          </div>

          <!-- Right Column: Live Video Player Preview -->
          <div class="advert-preview-column">
            <span class="preview-title-bar">
              <span>✦ LIVE VIDEO PREVIEW</span>
              <NuxtLink to="/#product-video-display" target="_blank" class="preview-ext-link">
                View on Home Page ↗
              </NuxtLink>
            </span>

            <div class="preview-mini-banner">
              <div class="preview-video-container">
                <video
                  v-if="settings.videoAdvertUrl && !isYouTubeOrVimeo(settings.videoAdvertUrl)"
                  :src="settings.videoAdvertUrl"
                  :poster="settings.videoAdvertPoster || ''"
                  class="preview-video"
                  autoplay
                  muted
                  loop
                  playsinline
                  controls
                ></video>
                <div v-else-if="isYouTubeOrVimeo(settings.videoAdvertUrl)" class="preview-embedded-state">
                  <span>Embedded Link Configured (YouTube / Vimeo)</span>
                </div>
                <div v-else class="preview-empty-state">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                  <span>No video uploaded yet</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Access Gate Settings -->
      <div class="admin-card span-6">
        <h2 class="admin-card-title">ADMIN GATE ACCESS CREDENTIAL</h2>
        <div class="card-form">
          <div class="form-group">
            <label class="form-label">PASSCODE FOR THE AUTH GATE</label>
            <div class="passcode-input-wrapper">
              <input
                v-model="passcodeForm"
                :type="showPasscode ? 'text' : 'password'"
                class="form-input font-mono"
                required
                placeholder="••••••••••••"
              />
              <button type="button" class="btn-toggle-pass" @click="showPasscode = !showPasscode">
                <svg v-if="showPasscode" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              </button>
            </div>
            <p class="input-tip">Note: Changing this will update the gate authentication passcode instantly.</p>
          </div>
        </div>
      </div>

      <!-- Action Footer -->
      <div class="settings-footer span-12">
        <button type="submit" class="btn-save" :disabled="saving">
          <span v-if="saving" class="spinner"></span>
          <span v-else>COMMIT ALL CHANGES</span>
        </button>
      </div>

    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

definePageMeta({
  layout: 'admin',
  middleware: 'admin-auth'
})

useHead({
  title: 'Configuration Settings | TZORAH EMPORIUM Admin',
  meta: [{ name: 'description', content: 'TZORAH EMPORIUM configuration and portal administration settings.' }]
})

const adminToken = useCookie('adminToken')
const toasts = useState('toasts', () => [])

const settings = ref({
  storeName: 'TZORAH EMPORIUM',
  tagline: 'Luxury Perfumes, Botanical Oils & Lifestyle Emporium',
  supportEmail: 'concierge@tzorahemporium.com',
  telephone: '+234 (0) 800 TZORAH',
  whatsappNumber: '+2348000000000',
  businessHours: 'Mon – Fri, 9am – 6pm',
  contactAddress: 'Port Harcourt, Rivers State, Nigeria',
  responseTime: 'Response within 24 hours',
  freeShippingThreshold: 50000,
  standardShippingFee: 3500,
  expressShippingFee: 7500,
  currency: 'NGN',
  autoApproveOrders: false,
  announcementEnabled: true,
  announcementText: 'FREE LUXURY SHIPPING ON ALL ORDERS OVER ₦50,000',
  announcementBg: '#111111',
  bankAccounts: [
    {
      id: '1',
      bankName: 'Guaranty Trust Bank (GTBank)',
      accountNumber: '0123456789',
      accountName: 'TZORAH EMPORIUM ENTERPRISES',
      instructions: 'Please use your Order ID as the transfer description/reference.'
    }
  ],
  videoAdvertEnabled: true,
  videoAdvertBadge: 'LIMITED CAMPAIGN • CINEMATIC ADVERT',
  videoAdvertTitle: 'THE ALCHEMY OF PURE ESSENCE',
  videoAdvertSubtitle: 'Experience Grade-A USA perfume oils and Middle Eastern attars with zero alcohol dilution. Verified batch purity, opulent sillage, and all-day longevity.',
  videoAdvertUrl: '',
  videoAdvertPoster: '/hero_fragrances.jpg',
  videoAdvertButtonText: 'DISCOVER THE OILS BAR',
  videoAdvertButtonLink: '/shop?cat=OILS',
  videoAdvertOfferText: 'Complimentary Discovery Sample with Every Bottle',
  videoAdvertLoop: true,
  videoAdvertAutoplay: true
})

const passcodeForm = ref('tzorah2026')
const showPasscode = ref(false)
const saving = ref(false)

// Video & Media Upload Refs
const uploadingVideo = ref(false)
const uploadingPoster = ref(false)
const videoFileInput = ref(null)
const posterFileInput = ref(null)

const triggerVideoPicker = () => {
  if (videoFileInput.value) videoFileInput.value.click()
}

const triggerPosterPicker = () => {
  if (posterFileInput.value) posterFileInput.value.click()
}

const isYouTubeOrVimeo = (url) => {
  if (!url) return false
  const lower = url.toLowerCase()
  return lower.includes('youtube.com') || lower.includes('youtu.be') || lower.includes('vimeo.com')
}

const handleVideoUpload = async (event) => {
  const file = event.target.files?.[0]
  if (!file) return

  uploadingVideo.value = true
  try {
    const formData = new FormData()
    formData.append('video', file)

    const res = await $fetch('/api/v1/upload', {
      method: 'POST',
      headers: { Authorization: `Bearer ${adminToken.value}` },
      body: formData
    })

    if (res?.url) {
      settings.value.videoAdvertUrl = res.url
      showToast('Video uploaded successfully! Click Commit All Changes to publish.')
    }
  } catch (err) {
    console.error('Video upload failed:', err)
    alert(err?.data?.message || err?.message || 'Failed to upload video file')
  } finally {
    uploadingVideo.value = false
    if (event.target) event.target.value = ''
  }
}

const handlePosterUpload = async (event) => {
  const file = event.target.files?.[0]
  if (!file) return

  uploadingPoster.value = true
  try {
    const formData = new FormData()
    formData.append('image', file)

    const res = await $fetch('/api/v1/upload', {
      method: 'POST',
      headers: { Authorization: `Bearer ${adminToken.value}` },
      body: formData
    })

    if (res?.url) {
      settings.value.videoAdvertPoster = res.url
      showToast('Poster thumbnail image uploaded successfully!')
    }
  } catch (err) {
    console.error('Poster upload failed:', err)
    alert(err?.data?.message || err?.message || 'Failed to upload poster image')
  } finally {
    uploadingPoster.value = false
    if (event.target) event.target.value = ''
  }
}

const addBankAccount = () => {
  if (!Array.isArray(settings.value.bankAccounts)) {
    settings.value.bankAccounts = []
  }
  settings.value.bankAccounts.push({
    id: Date.now().toString(),
    bankName: '',
    accountNumber: '',
    accountName: '',
    instructions: 'Please use your Order ID as the transfer description/reference.'
  })
}

const removeBankAccount = (index) => {
  if (Array.isArray(settings.value.bankAccounts) && settings.value.bankAccounts.length > 1) {
    settings.value.bankAccounts.splice(index, 1)
  } else {
    showToast('At least one bank account is required.')
  }
}

const showToast = (message) => {
  toasts.value.push({
    id: Date.now(),
    message
  })
}

const fetchSettings = async () => {
  try {
    const data = await $fetch('/api/v1/settings')
    if (data) {
      if (data.passcode) passcodeForm.value = data.passcode
      const { passcode, ...rest } = data
      settings.value = { ...settings.value, ...rest }
    }
  } catch (err) {
    console.error('Failed to load store settings:', err)
  }
}

onMounted(fetchSettings)

const saveSettings = async () => {
  if (saving.value) return
  saving.value = true

  const payload = {
    ...settings.value,
    passcode: passcodeForm.value
  }

  try {
    await $fetch('/api/v1/settings', {
      method: 'POST',
      headers: { Authorization: `Bearer ${adminToken.value}` },
      body: payload
    })
    showToast('Storefront configurations saved successfully.')
  } catch (err) {
    console.error('Failed to save settings:', err)
    alert(err?.data?.message || err?.message || 'Error saving settings. Make sure you are logged in as admin.')
  } finally {
    saving.value = false
  }
}
</script>

<style scoped>
.admin-settings {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.settings-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.page-title {
  font-size: 1.5rem;
  font-weight: 500;
  color: #ffffff;
  letter-spacing: 0.05em;
  margin-bottom: 0.25rem;
  text-transform: uppercase;
}

.page-subtitle {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.4);
}

/* Grids */
.settings-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1.5rem;
}

.span-6 {
  grid-column: span 6;
}

.span-12 {
  grid-column: span 12;
}

.card-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-label {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.4);
}

.form-input {
  background-color: #161616;
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #ffffff;
  padding: 0.75rem 1rem;
  font-size: 0.82rem;
  outline: none;
  border-radius: 2px;
  transition: all 0.25s ease;
}

.form-input:focus {
  border-color: rgba(184, 152, 116, 0.4);
  background-color: #1c1c1c;
}

.form-input:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

/* Toggle Switches */
.toggle-wrapper {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.25rem 0;
}

.toggle-checkbox {
  display: none;
}

.toggle-label {
  position: relative;
  width: 36px;
  height: 18px;
  background-color: #27272a;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.25s ease;
  flex-shrink: 0;
}

.toggle-label::after {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: #ffffff;
  transition: transform 0.25s cubic-bezier(0.25, 1, 0.5, 1);
}

.toggle-checkbox:checked + .toggle-label {
  background-color: #b89874;
}

.toggle-checkbox:checked + .toggle-label::after {
  transform: translateX(18px);
}

.toggle-text {
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.65);
}

/* Color picker specific */
.color-picker-wrapper {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.color-picker {
  background: none;
  border: none;
  width: 32px;
  height: 32px;
  cursor: pointer;
  padding: 0;
  outline: none;
}

.color-picker:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.color-hex-val {
  font-size: 0.8rem;
  color: #ffffff;
}

/* Secure gate elements */
.passcode-input-wrapper {
  position: relative;
  display: flex;
}

.passcode-input-wrapper .form-input {
  width: 100%;
  padding-right: 2.5rem;
}

.btn-toggle-pass {
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-toggle-pass:hover {
  color: #ffffff;
}

.input-tip {
  font-size: 0.65rem;
  color: rgba(255, 255, 255, 0.3);
  margin-top: 0.15rem;
}

/* Footer & Commits */
.settings-footer {
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding-top: 1.5rem;
}

.btn-save {
  background-color: #b89874;
  color: #000000;
  border: none;
  padding: 0.85rem 2rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.25s ease;
}

.btn-save:hover:not(:disabled) {
  background-color: #ffffff;
}

.btn-save:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.spinner {
  width: 14px;
  height: 14px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-top-color: #000000;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

@media (max-width: 900px) {
  .span-6 {
    grid-column: span 12;
  }
}

@media (max-width: 480px) {
  .settings-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }
  .form-row {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
  .btn-save {
    width: 100%;
  }
}
/* WhatsApp badge & field hint */
.wa-badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: rgba(37, 211, 102, 0.12);
  color: #25d366;
  font-size: 0.6rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  padding: 2px 7px;
  border-radius: 20px;
  margin-left: 0.5rem;
  vertical-align: middle;
  text-transform: uppercase;
}

.form-hint {
  font-size: 0.72rem;
  color: rgba(255, 255, 255, 0.28);
  margin-top: 0.4rem;
  line-height: 1.4;
}

/* Bank Account Settings */
.card-header-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.btn-add-bank {
  background: rgba(201, 169, 110, 0.15);
  border: 1px solid var(--color-accent, #c9a96e);
  color: var(--color-accent, #c9a96e);
  font-family: var(--font-sans);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  padding: 0.5rem 1rem;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.2s ease;
}
.btn-add-bank:hover {
  background: var(--color-accent, #c9a96e);
  color: #111;
}

.bank-accounts-list {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.bank-account-card {
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 4px;
  padding: 1.25rem;
}

.bank-account-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 0.65rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.account-badge {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: var(--color-accent, #c9a96e);
  background: rgba(201, 169, 110, 0.1);
  padding: 0.2rem 0.6rem;
  border-radius: 2px;
}

.btn-remove-bank {
  background: rgba(226, 92, 92, 0.12);
  border: 1px solid rgba(226, 92, 92, 0.3);
  color: #e25c5c;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  padding: 0.3rem 0.75rem;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.2s ease;
}
.btn-remove-bank:hover {
  background: #e25c5c;
  color: #fff;
}

/* Video Advert Editor Styles */
.video-advert-editor-grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 2rem;
  align-items: start;
}

@media (max-width: 992px) {
  .video-advert-editor-grid {
    grid-template-columns: 1fr;
  }
}

.hidden-file-input {
  display: none;
}

.media-upload-box {
  background: #141414;
  border: 1px dashed rgba(212, 175, 55, 0.4);
  border-radius: 4px;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.25s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.media-upload-box:hover {
  border-color: #d4af37;
  background: rgba(212, 175, 55, 0.04);
}

.media-upload-box.is-uploading {
  opacity: 0.7;
  pointer-events: none;
}

.upload-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.82rem;
}

.upload-sub {
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.35);
}

.upload-has-file {
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  text-align: left;
}

.upload-file-meta {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  overflow: hidden;
}

.upload-file-name {
  font-size: 0.78rem;
  color: #d4af37;
  word-break: break-all;
}

.upload-change-tip {
  font-size: 0.68rem;
  color: rgba(255, 255, 255, 0.4);
}

.upload-state {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #d4af37;
  font-size: 0.82rem;
}

.poster-input-row {
  display: flex;
  gap: 0.5rem;
}

.poster-input-row .form-input {
  flex: 1;
}

.btn-upload-poster {
  background: rgba(212, 175, 55, 0.15);
  border: 1px solid rgba(212, 175, 55, 0.4);
  color: #e2c275;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  padding: 0 1rem;
  border-radius: 2px;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s ease;
}

.btn-upload-poster:hover {
  background: #d4af37;
  color: #000;
}

/* Advert Preview Column */
.advert-preview-column {
  background: #111111;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 4px;
  padding: 1.25rem;
}

.preview-title-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: #d4af37;
}

.preview-ext-link {
  color: rgba(255, 255, 255, 0.5);
  text-decoration: underline;
  font-size: 0.65rem;
  font-weight: 400;
}

.preview-ext-link:hover {
  color: #ffffff;
}

.preview-mini-banner {
  background: #080808;
  border: 1px solid rgba(212, 175, 55, 0.25);
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
}

.preview-video-container {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background: #000;
  overflow: hidden;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.preview-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.preview-empty-state, .preview-embedded-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.65rem;
  color: rgba(255, 255, 255, 0.45);
  font-size: 0.75rem;
  padding: 2rem;
  text-align: center;
}

.preview-empty-state svg {
  color: #d4af37;
  opacity: 0.8;
}
</style>

