# 🚀 Quick Start Guide - AI-Vidya

## Development

```bash
# Start development server
npm run dev
# → http://localhost:5173 (or next available port)

# Build for production
npm run build
# → Creates 'dist' folder

# Preview production build
npm run preview
# → http://localhost:4173
```

## 📄 All Pages & Routes

| Page | URL | Description |
|------|-----|-------------|
| Home | `/` | Landing page |
| Courses | `/courses` | Course catalog |
| Course Detail | `/courses/1` | Single course |
| About | `/about` | About us |
| Blog | `/blog` | Blog listing |
| Blog Post | `/blog/post-slug` | Single post |
| Contact | `/contact` | Contact form |
| Pricing | `/pricing` | Pricing plans |
| Instructors | `/instructors` | Instructor list |
| FAQs | `/faqs` | FAQ page |
| Categories | `/categories` | Course categories |
| Testimonials | `/testimonials` | Reviews |
| 404 | `/any-invalid-url` | Error page |

## 🎨 Component Usage

```jsx
// Button
import Button from './components/Button';
<Button variant="primary" size="lg">Click Me</Button>

// Badge
import Badge from './components/Badge';
<Badge variant="primary">New</Badge>

// Card
import Card from './components/Card';
<Card hover={true}>Content</Card>
```

## 📊 Data Files

```js
// Import course data
import { courses } from './data/courses';

// Import blog data
import { blogPosts } from './data/blog';
```

## 🎯 Quick Deploy

### Netlify
```bash
npm run build
# Drag 'dist' to netlify.com/drop
```

### Vercel
```bash
vercel --prod
```

## ✅ Testing Checklist

- [ ] All pages load
- [ ] Navigation works
- [ ] Search functions
- [ ] Filters work
- [ ] Forms validate
- [ ] Mobile responsive
- [ ] No console errors

## 🔧 Common Tasks

### Add New Course
Edit `src/data/courses.js`

### Add New Blog Post
Edit `src/data/blog.js`

### Change Colors
Edit `tailwind.config.js`

### Add New Page
1. Create in `src/pages/`
2. Add route in `src/App.jsx`
3. Add link in `src/components/Layout.jsx`

## 📞 Support

- 📖 Full docs: `README.md`
- 🚀 Deploy: `DEPLOYMENT.md`
- ✅ Features: `CHECKLIST.md`
- 📝 Summary: `PROJECT_SUMMARY.md`

---

**Status:** ✅ Production Ready
**Version:** 1.0.0
