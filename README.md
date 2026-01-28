# Vue Blog Application

A blog application built with Vue 3, Vue Router, and Vite. Features lazy loading, error boundaries, suspense, and API integration.

## Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

## Project Structure

```
src/
├── components/          # Reusable components
├── views/              # Page components (lazy loaded)
├── router/             # Router configuration
├── services/           # API service
└── assets/             # Global styles
```

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## Features

- Home page with blog post list
- Individual post detail pages
- 404 error handling
- Lazy loaded routes
- Loading states with Suspense
- Error boundaries with retry
- Responsive design

## API Integration

The app uses mock data by default. To connect to a real API:

1. Edit `src/services/blogService.js`
2. Update the API endpoint URL
3. Adjust data transformation if needed

Example for `https://api.oluwasetemi.dev/`:

```javascript
const API_BASE_URL = 'https://api.oluwasetemi.dev'

async fetchPosts() {
  const response = await fetch(`${API_BASE_URL}/posts`)
  return await response.json()
}
```

## Tech Stack

- Vue 3 with Composition API
- Vue Router 4
- Vite
- Native CSS

## License

MIT