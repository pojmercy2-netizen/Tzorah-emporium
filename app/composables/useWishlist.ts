export interface WishlistProduct {
  id: string | number
  name: string
  price: number
  priceFormatted?: string
  image: string
  category?: string
  subcategory?: string
  size?: string
  description?: string
  colors?: string[]
}

export const useWishlist = () => {
  const wishlistItems = useState<WishlistProduct[]>('tzorah_wishlist_items', () => [])
  const isLoaded = useState<boolean>('tzorah_wishlist_loaded', () => false)
  const toasts = useState<{ id: number; message: string }[]>('toasts', () => [])

  const showToast = (message: string) => {
    toasts.value.push({ id: Date.now(), message })
  }

  const loadWishlist = () => {
    if (process.client && !isLoaded.value) {
      try {
        const stored = localStorage.getItem('tzorah_wishlist') || localStorage.getItem('elk_wishlist')
        if (stored) {
          const parsed = JSON.parse(stored)
          if (Array.isArray(parsed)) {
            wishlistItems.value = parsed
          }
        }
      } catch (err) {
        console.error('Failed to parse wishlist from localStorage:', err)
      } finally {
        isLoaded.value = true
      }
    }
  }

  const saveWishlist = () => {
    if (process.client) {
      try {
        const json = JSON.stringify(wishlistItems.value)
        localStorage.setItem('tzorah_wishlist', json)
        localStorage.setItem('elk_wishlist', json) // Keep backward compatibility
      } catch (err) {
        console.error('Failed to save wishlist to localStorage:', err)
      }
    }
  }

  const isWishlisted = (id: string | number) => {
    const targetId = String(id)
    return wishlistItems.value.some(item => String(item.id) === targetId)
  }

  const toggleWishlist = (product: any) => {
    loadWishlist()
    if (!product || product.id === undefined || product.id === null) return

    const targetId = String(product.id)
    const index = wishlistItems.value.findIndex(item => String(item.id) === targetId)

    if (index >= 0) {
      const removed = wishlistItems.value.splice(index, 1)[0]
      saveWishlist()
      showToast(`Removed "${removed?.name || 'Item'}" from wishlist.`)
    } else {
      const cleanPrice = parseFloat(product.price) || 0
      const newItem: WishlistProduct = {
        id: product.id,
        name: product.name || 'Product',
        price: cleanPrice,
        priceFormatted: product.priceFormatted || `₦${cleanPrice.toLocaleString('en-US', { minimumFractionDigits: 2 })}`,
        image: product.image || '/images/products/perf_usa_1.png',
        category: product.category || product.cat_name || 'PERFUMES',
        subcategory: product.subcategory || '',
        size: product.size || '',
        description: product.description || '',
        colors: Array.isArray(product.color) ? product.color : (Array.isArray(product.colors) ? product.colors : ['black'])
      }
      wishlistItems.value.unshift(newItem)
      saveWishlist()
      showToast(`Added "${newItem.name}" to wishlist. ❤️`)
    }
  }

  const removeFromWishlist = (id: string | number) => {
    loadWishlist()
    const targetId = String(id)
    const index = wishlistItems.value.findIndex(item => String(item.id) === targetId)
    if (index >= 0) {
      const removed = wishlistItems.value.splice(index, 1)[0]
      saveWishlist()
      showToast(`Removed "${removed?.name || 'Item'}" from wishlist.`)
    }
  }

  const wishlistIds = computed(() => wishlistItems.value.map(i => String(i.id)))
  const wishlistCount = computed(() => wishlistItems.value.length)

  return {
    wishlistItems,
    wishlistIds,
    wishlistCount,
    isWishlisted,
    toggleWishlist,
    removeFromWishlist,
    loadWishlist
  }
}
