const API_BASE_URL = 'https://api.oluwasetemi.dev'

class BlogService {
  /**
   * Fetch all blog posts with pagination
   * API: GET /posts
   */
  async fetchPosts(page = 1, limit = 20) {
    try {
      const response = await fetch(`${API_BASE_URL}/posts?page=${page}&limit=${limit}`)
      
      if (!response.ok) {
        throw new Error('Failed to fetch posts')
      }
      
      const data = await response.json()

      const posts = Array.isArray(data) ? data : data.data || data.posts || []
      
      return posts.map(post => ({
        id: post.id,
        title: post.title,
        excerpt: this.createExcerpt(post.content || post.body || ''),
        content: post.content || post.body || '',
        date: this.formatDate(post.createdAt || post.created_at || post.date),
        author: post.author || post.authorName || 'Anonymous',
        slug: post.slug || ''
      }))
    } catch (error) {
      console.error('Error fetching posts:', error)
      throw error
    }
  }

  /**
   * Fetch a single post by ID
   * API: GET /posts/:id
   */
  async fetchPostById(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/posts/${id}`)
      
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Post not found')
        }
        throw new Error('Failed to fetch post')
      }
      
      const post = await response.json()
      
      return {
        id: post.id,
        title: post.title,
        excerpt: this.createExcerpt(post.content || post.body || ''),
        content: post.content || post.body || '',
        date: this.formatDate(post.createdAt || post.created_at || post.date),
        author: post.author || post.authorName || 'Anonymous',
        slug: post.slug || ''
      }
    } catch (error) {
      console.error('Error fetching post:', error)
      throw error
    }
  }

  /**
   * Fetch a post by slug
   * API: GET /posts/slug/:slug
   */
  async fetchPostBySlug(slug) {
    try {
      const response = await fetch(`${API_BASE_URL}/posts/slug/${slug}`)
      
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Post not found')
        }
        throw new Error('Failed to fetch post')
      }
      
      const post = await response.json()
      
      return {
        id: post.id,
        title: post.title,
        excerpt: this.createExcerpt(post.content || post.body || ''),
        content: post.content || post.body || '',
        date: this.formatDate(post.createdAt || post.created_at || post.date),
        author: post.author || post.authorName || 'Anonymous',
        slug: post.slug || ''
      }
    } catch (error) {
      console.error('Error fetching post by slug:', error)
      throw error
    }
  }

  /**
   * Helper: Create excerpt from content
   */
  createExcerpt(content, length = 150) {
    if (!content) return 'No content available'
    
    const plainText = content.replace(/<[^>]*>/g, '')
    if (plainText.length <= length) return plainText
    
    return plainText.substring(0, length).trim() + '...'
  }

  /**
   * Helper: Format date to readable string
   */
  formatDate(dateString) {
    if (!dateString) return 'Date unavailable'
    
    try {
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    } catch (error) {
      return dateString
    }
  }
}

export default new BlogService()