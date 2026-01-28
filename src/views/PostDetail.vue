<template>
  <div v-if="post">
    <div class="detail-header">
      <h1 class="detail-title">{{ post.title }}</h1>
      <div class="detail-meta">
        By {{ post.author }} • {{ post.date }}
      </div>
    </div>
    <div class="detail-content">
      <p v-for="(paragraph, index) in paragraphs" :key="index">
        {{ paragraph }}
      </p>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import blogService from '@/services/blogService'

export default {
  name: 'PostDetail',
  async setup() {
    const route = useRoute()
    const post = ref(null)

    // Fetch post by ID (async setup for Suspense)
    try {
      post.value = await blogService.fetchPostById(route.params.id)
    } catch (error) {
      throw new Error(`Post with ID ${route.params.id} not found`)
    }

    const paragraphs = computed(() => {
      return post.value ? post.value.content.split('\n\n') : []
    })

    return { post, paragraphs }
  }
}
</script>

<style scoped>
.detail-header {
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid #e2e8f0;
}

.detail-title {
  font-size: 2.5rem;
  color: #ffffff;
  margin-bottom: 0.75rem;
}

.detail-meta {
  color: #718096;
  font-size: 0.95rem;
}

.detail-content {
  color: #ffffff;
  line-height: 1.8;
  font-size: 1.05rem;
}

.detail-content p {
  margin-bottom: 1.5rem;
}

@media (max-width: 768px) {
  .detail-title {
    font-size: 2rem;
  }
}
</style>