<template>
    <div class="not-found">
        <div class="not-found-icon">🔍</div>
        <h1 class="not-found-title">404 - Page Not Found</h1>
        <p class="not-found-text">
            The page you're looking for doesn't exist or has been moved.
        </p>
        <router-link to="/" class="home-button">
            Go to Home Page
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'NotFound'
}
</script>

<style scoped>
.not-found {
    text-align: center;
    padding: 4rem 2rem;
}

.not-found-icon {
    font-size: 5rem;
    margin-bottom: 1rem;
}

.not-found-title {
    font-size: 2.5rem;
    color: white;
    margin-bottom: 1rem;
}

.not-found-text {
    color: #718096;
    font-size: 1.1rem;
    margin-bottom: 2rem;
}

.home-button {
    background: #08031C;
    color: white;
    text-decoration: none;
    padding: 0.75rem 2rem;
    border-radius: 6px;
    display: inline-block;
    font-weight: 500;
    transition: all 0.3s ease;
}

.home-button:hover {
    background: #00063A;
    transform: translateY(-2px);
}
</style>