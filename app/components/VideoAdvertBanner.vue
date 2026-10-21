<template>
  <section v-if="advertSettings.videoAdvertEnabled" class="video-advert-section" id="product-video-display">

      <!-- Pure Cinema Video Stage — no controls, silent autoplay loop -->
      <div class="video-display-card">
        <div class="video-display-wrapper">

          <!-- Direct Video Upload (HTML5 Video) -->
          <video
            v-if="videoSource && !isEmbedUrl"
            ref="videoRef"
            class="advert-video-player"
            :src="videoSource"
            :poster="advertSettings.videoAdvertPoster || ''"
            loop
            muted
            playsinline
            autoplay
          ></video>

          <!-- Embedded Video (YouTube / Vimeo) — controls hidden -->
          <iframe
            v-else-if="isEmbedUrl"
            class="advert-iframe-player"
            :src="embedIframeSrc"
            title="Product Video Advert"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>

          <!-- Fallback / Empty state when admin hasn't uploaded video yet -->
          <div v-else class="video-empty-state">
            <div class="empty-state-content">
              <div class="play-icon-glow">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </div>
              <span class="empty-state-title">PRODUCT VIDEO DISPLAY</span>
              <NuxtLink v-if="isAdmin" to="/admin/settings#video-advert" class="btn-admin-upload">
                Admin: Upload Video in Settings
              </NuxtLink>
            </div>
          </div>

        </div>
      </div>

  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const { storeSettings } = useStoreSettings()
const adminToken = useCookie('adminToken')
const isAdmin = computed(() => !!adminToken.value)

const advertSettings = computed(() => storeSettings.value || {})

const videoRef = ref(null)

const videoSource = computed(() => {
  return advertSettings.value.videoAdvertUrl || ''
})

// Check if URL is YouTube or Vimeo embed
const isEmbedUrl = computed(() => {
  const url = (advertSettings.value.videoAdvertUrl || '').toLowerCase()
  return url.includes('youtube.com') || url.includes('youtu.be') || url.includes('vimeo.com')
})

// Build embed src — controls=0, autoplay, muted, loop
const embedIframeSrc = computed(() => {
  const url = advertSettings.value.videoAdvertUrl || ''
  if (url.includes('youtube.com/watch?v=')) {
    const id = url.split('watch?v=')[1]?.split('&')[0]
    return `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&disablekb=1&modestbranding=1&rel=0`
  }
  if (url.includes('youtu.be/')) {
    const id = url.split('youtu.be/')[1]?.split('?')[0]
    return `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&disablekb=1&modestbranding=1&rel=0`
  }
  if (url.includes('vimeo.com/')) {
    const id = url.split('vimeo.com/')[1]?.split('?')[0]
    return `https://player.vimeo.com/video/${id}?autoplay=1&muted=1&loop=1&controls=0`
  }
  return url
})

onMounted(() => {
  if (videoRef.value) {
    videoRef.value.muted = true
    videoRef.value.play().catch(() => {})
  }
})
</script>

<style scoped>
.video-advert-section {
  position: relative;
  width: 100vw;
  height: 85vh;
  margin: 0;
  padding: 0;
  background-color: #000000;
  overflow: hidden;
  display: flex;
}

.video-display-card {
  position: relative;
  width: 100%;
  height: 100%;
  background: #000000;
  overflow: hidden;
}

.video-display-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  background: #050505;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 1024px) {
  .video-advert-section {
    height: 50vh;
  }
}

@media (max-width: 768px) {
  .video-advert-section {
    height: 40svh;
  }
}

.advert-video-player {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  pointer-events: none; /* Prevent right-click / native controls */
}

.advert-iframe-player {
  width: 100%;
  height: 100%;
  border: none;
}

/* Empty State */
.video-empty-state {
  width: 100%;
  height: 100%;
  min-height: 380px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle, #151515 0%, #080808 100%);
}

.empty-state-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  text-align: center;
  padding: 2rem;
}

.play-icon-glow {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: rgba(212, 175, 55, 0.12);
  border: 1px solid rgba(212, 175, 55, 0.4);
  color: #d4af37;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 25px rgba(212, 175, 55, 0.25);
}

.empty-state-title {
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
}

.btn-admin-upload {
  background: #d4af37;
  color: #0b0b0b;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  padding: 0.65rem 1.4rem;
  border-radius: 2px;
  text-transform: uppercase;
  transition: all 0.25s ease;
}

.btn-admin-upload:hover {
  background: #ffffff;
  transform: translateY(-2px);
}
</style>
