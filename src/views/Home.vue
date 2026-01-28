<template>
    <div class="container">
        <div class="home-header">
            <h1 class="home-title">Welcome to My Blog</h1>
            <p class="home-subtitle">Explore articles about Vue.js, web development, and more</p>
        </div>
        <div class="posts-grid">
            <router-link v-for="post in posts" :key="post.id" :to="`/post/${post.id}`" class="post-link">
                <div class="post-card">
                    <h2 class="post-title">{{ post.title }}</h2>
                    <p class="post-excerpt">{{ post.excerpt }}</p>
                    <span class="read-more">Read more →</span>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import blogService from '@/services/blogService'

export default {
    name: 'Home',
    async setup() {
        const posts = ref([])

        posts.value = await blogService.fetchPosts()

        return { posts }
    }
}
</script>

<style scoped>
/* .container{
    background-color: green;
} */
.home-header {
    text-align: center;
    margin-bottom: 2rem;
}

.home-title {
    font-size: 2.5rem;
    /* color: orange; */
    color: white;
    margin-bottom: 0.5rem;
}

.home-subtitle {
    color: #718096;
    font-size: 1.1rem;
}

.posts-grid {
    /* background: #00063A; */
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
}

.post-link {
    text-decoration: none;
}

.post-card {
    background: #00063A;
    border: 2px solid #31353F;
    border-radius: 8px;
    padding: 1.5rem;
    transition: all 0.3s ease;
    cursor: pointer;
    height: 100%;
}

.post-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    border-color: #667eea;
}

.post-title {
    font-size: 1.3rem;
    color: white;
    margin-bottom: 0.75rem;
}

.post-excerpt {
    color: #718096;
    line-height: 1.6;
    margin-bottom: 1rem;
}

.read-more {
    color: rgb(75, 75, 227);
    text-decoration: underline;
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
}

@media (max-width: 768px) {
    .posts-grid {
        grid-template-columns: 1fr;
    }

    .home-title {
        font-size: 2rem;
    }
}
</style>