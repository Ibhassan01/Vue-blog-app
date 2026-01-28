<template>
  <div id="app">
    <nav>
      <div class="nav-brand">📝 My Blog</div>
      <div class="nav-links">
        <router-link to="/" class="nav-link">Home</router-link>
        <button v-if="$route.path !== '/'" @click="goBack" class="back-button">
          ← Back
        </button>
      </div>
    </nav>

    <main>
      <router-view v-slot="{ Component }">
        <ErrorBoundary>
          <Suspense>
            <template #default>
              <component :is="Component" />
            </template>
            <template #fallback>
              <LoadingSpinner />
            </template>
          </Suspense>
        </ErrorBoundary>
      </router-view>
    </main>
  </div>
</template>

<script>
import ErrorBoundary from './components/ErrorBoundary.vue'
import LoadingSpinner from './components/LoadingSpinner.vue'

export default {
  name: 'App',
  components: {
    ErrorBoundary,
    LoadingSpinner
  },
  methods: {
    goBack() {
      if (window.history.length > 1) {
        this.$router.back()
      } else {
        this.$router.push('/')
      }
    }
  }
}
</script>

<style scoped>
nav {
  background: #08031C;
  padding: 1.5rem 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
}

.nav-links {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.nav-link {
  text-decoration: none;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  font-weight: 500;
}

.nav-link:hover {
  background: #f7fafc;
  color: #667eea;
}

.nav-link.router-link-active {
  background: #00063A;
  color: white;
}

.back-button {
  background: #00063A;
  color: white;
  outline: #4a5568;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.back-button:hover {
  background: #f7fafc;
  color: #667eea;
  /* background: #cbd5e0; */
}

main {
  background: #00063A;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  min-height: 400px;
}

@media (max-width: 768px) {
  nav {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>