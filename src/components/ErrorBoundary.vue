<template>
  <div v-if="error" class="error-container">
    <div class="error-icon">⚠️</div>
    <h2 class="error-title">Oops! Something went wrong</h2>
    <p class="error-message">{{ error.message || 'An unexpected error occurred' }}</p>
    <button @click="resetError" class="retry-button">Try Again</button>
  </div>
  <slot v-else />
</template>

<script>
import { ref, onErrorCaptured } from 'vue'

export default {
  name: 'ErrorBoundary',
  setup() {
    const error = ref(null)

    onErrorCaptured((err, instance, info) => {
      error.value = err
      console.error('Error caught by boundary:', err, info)
      return false
    })

    const resetError = () => {
      error.value = null
    }

    return {
      error,
      resetError
    }
  }
}
</script>

<style scoped>
.error-container {
  background: #fff5f5;
  border: 2px solid #fc8181;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
}

.error-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.error-title {
  color: #c53030;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.error-message {
  color: #742a2a;
  margin-bottom: 1.5rem;
}

.retry-button {
  background: #667eea;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.retry-button:hover {
  background: #5a67d8;
}
</style>