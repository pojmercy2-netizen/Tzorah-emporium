import { ref, computed } from 'vue'

export const useAuth = () => {
  const currentUser = useState('currentUser', () => null)
  const authModalOpen = useState('authModalOpen', () => false)
  const authModalMode = useState('authModalMode', () => 'login') // 'login' or 'signup'
  const userToken = useCookie('userToken', { maxAge: 60 * 60 * 24 * 7 }) // 7 days
  const toasts = useState('toasts', () => [])

  const isLoggedIn = computed(() => !!currentUser.value)

  const showToast = (message: string) => {
    toasts.value.push({
      id: Date.now(),
      message
    })
  }

  // Get the base API URL (FastAPI backend)
  const getApiUrl = () => {
    const config = useRuntimeConfig()
    return config.public.apiBase || '/api/v1'
  }

  // Fetch the currently logged-in user profile from the backend
  const fetchUserProfile = async () => {
    if (!userToken.value) {
      currentUser.value = null
      return
    }

    try {
      const data = await $fetch(`${getApiUrl()}/auth/me`, {
        headers: {
          Authorization: `Bearer ${userToken.value}`
        }
      })
      if (data) {
        // Map backend User schema (name, email) to frontend profile
        const nameParts = data.name.split(' ')
        currentUser.value = {
          id: data.id,
          firstName: nameParts[0] || data.name,
          lastName: nameParts.slice(1).join(' ') || '',
          email: data.email,
          isAdmin: data.is_admin,
          memberSince: new Date(data.created_at).toLocaleDateString('en-US', {
            month: 'long',
            year: 'numeric'
          })
        }
      }
    } catch (err) {
      console.error('Failed to fetch user profile:', err)
      // If token is invalid or backend is down, clear session
      currentUser.value = null
      userToken.value = null
    }
  }

  // Register a new account
  const register = async (name: string, email: string, password: string) => {
    try {
      const registerRes = await $fetch(`${getApiUrl()}/auth/register`, {
        method: 'POST',
        body: { name, email, password }
      })

      showToast('Registration successful! Logging you in...')
      
      // Auto login after registration
      await login(email, password)
      return { success: true }
    } catch (err: any) {
      const errorMsg = err.data?.message || err.data?.data?.detail || err.data?.detail || err.message || 'Registration failed. Please try again.'
      showToast(errorMsg)
      return { success: false, error: errorMsg }
    }
  }

  // Login
  const login = async (email: string, password: string) => {
    try {
      const data = await $fetch(`${getApiUrl()}/auth/login`, {
        method: 'POST',
        body: { email, password }
      })

      if (data && data.access_token) {
        userToken.value = data.access_token
        await fetchUserProfile()
        showToast('Successfully signed in!')
        authModalOpen.value = false
        return { success: true }
      }
      return { success: false, error: 'Invalid response from server' }
    } catch (err: any) {
      const errorMsg = err.data?.message || err.data?.data?.detail || err.data?.detail || err.message || 'Authentication failed. Please verify credentials.'
      showToast(errorMsg)
      return { success: false, error: errorMsg }
    }
  }

  // Logout
  const logout = async () => {
    try {
      // Best effort backend notification
      if (userToken.value) {
        await $fetch(`${getApiUrl()}/auth/logout`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${userToken.value}`
          }
        }).catch(() => {})
      }
    } finally {
      currentUser.value = null
      userToken.value = null
      showToast('Successfully logged out.')
      navigateTo('/')
    }
  }

  // Intercept nav clicks to profile
  const handleProfileClick = (e?: Event) => {
    if (e) e.preventDefault()
    
    if (isLoggedIn.value) {
      navigateTo('/profile')
    } else {
      authModalMode.value = 'login'
      authModalOpen.value = true
    }
  }

  // Intercept nav clicks to wishlist tab in profile
  const handleWishlistClick = (e?: Event) => {
    if (e) e.preventDefault()
    
    if (isLoggedIn.value) {
      navigateTo('/profile?tab=wishlist')
    } else {
      authModalMode.value = 'login'
      authModalOpen.value = true
    }
  }

  return {
    currentUser,
    authModalOpen,
    authModalMode,
    isLoggedIn,
    login,
    register,
    logout,
    fetchUserProfile,
    handleProfileClick,
    handleWishlistClick,
    showToast
  }
}
