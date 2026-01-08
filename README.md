# 🎓 AI-Vidya - Premium Online Learning Platform

A modern, fully-functional educational platform built with React, Tailwind CSS, and Framer Motion.

![AI-Vidya Platform](https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=400&fit=crop)

## ✨ Features

### 🎯 Complete Pages
- **Home Page** - Hero, categories, featured courses, testimonials, and CTAs
- **Courses** - Filterable course catalog with search functionality
- **Course Detail** - Comprehensive course information with curriculum
- **About** - Company story, mission, values, and team
- **Blog** - Article grid with category filtering
- **Single Post** - Full article layout with related posts
- **Contact** - Contact form with office information
- **Pricing** - Three-tier pricing with comparison table
- **Instructors** - Instructor profiles and "Become an Instructor" CTA
- **FAQs** - Searchable accordion-style Q&A
- **Categories** - 12 course categories with stats
- **Testimonials** - Student success stories and reviews
- **404 Page** - Custom error page with navigation

### 🚀 Technical Features
- ⚡️ Built with **Vite** for lightning-fast development
- ⚛️ **React 18** with hooks and modern patterns
- 🎨 **Tailwind CSS** for responsive, utility-first styling
- 🎭 **Framer Motion** for smooth animations
- 🧭 **React Router** for seamless navigation
- 📱 Fully **responsive** design (mobile, tablet, desktop)
- ♿️ **Accessible** components and navigation
- 🎯 **SEO optimized** with meta tags
- 🔄 Smooth scroll behavior and scroll-to-top
- 🎨 Custom scrollbar with gradient styling

### 💎 UI Components
- Reusable Button component with variants
- Card component with hover effects
- Badge component for tags and categories
- Responsive navigation with mobile menu
- Professional footer with links
- Form components with validation
- Modal and dropdown functionality

### 📊 Data Structure
- 6 complete course listings with:
  - Instructor information
  - Pricing and discounts
  - Ratings and student counts
  - Full curriculum breakdown
  - Course highlights
- 6 blog posts with metadata
- 9 instructor profiles
- 50+ FAQs across 5 categories
- 12 course categories

## 🛠️ Tech Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Routing:** React Router v6
- **Icons:** Lucide React
- **Utilities:** clsx

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd ai-vidya-react

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Development

The development server will start at `http://localhost:5173` (or next available port).

```bash
npm run dev
```

## 📝 Project Structure

```
ai-vidya-react/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Layout.jsx       # Main layout with nav & footer
│   │   ├── Button.jsx       # Button component
│   │   ├── Badge.jsx        # Badge component
│   │   └── Card.jsx         # Card component
│   ├── pages/               # Page components
│   │   ├── Home.jsx         # Landing page
│   │   ├── Courses.jsx      # Course catalog
│   │   ├── CourseDetail.jsx # Single course
│   │   ├── About.jsx        # About page
│   │   ├── Blog.jsx         # Blog listing
│   │   ├── Post.jsx         # Single blog post
│   │   ├── Contact.jsx      # Contact form
│   │   ├── Pricing.jsx      # Pricing plans
│   │   ├── Instructors.jsx  # Instructor profiles
│   │   ├── Faqs.jsx         # FAQ page
│   │   ├── Categories.jsx   # Category listing
│   │   ├── Testimonials.jsx # Testimonials
│   │   └── NotFound.jsx     # 404 page
│   ├── data/                # Static data
│   │   ├── courses.js       # Course data
│   │   └── blog.js          # Blog post data
│   ├── App.jsx              # Root component with routes
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
├── index.html               # HTML template
├── tailwind.config.js       # Tailwind configuration
├── vite.config.js           # Vite configuration
└── package.json             # Dependencies

```

## 🎨 Customization

### Colors
The platform uses a custom color scheme defined in `tailwind.config.js`:

- **Royal Purple:** `#7B3FE4`
- **Electric Violet:** `#A855F7`
- **Soft Blue:** `#6EE7F9`
- **Neon Green:** `#9DFF00`
- **Warm Pink:** `#FF6EC7`

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route in `src/App.jsx`
3. Add navigation link in `src/components/Layout.jsx`

### Modifying Course Data

Edit `src/data/courses.js` to add, remove, or modify courses.

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Deploy to Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

## 📱 Responsive Design

The platform is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## ♿️ Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus states for all interactive elements
- Alt text for images

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support, email support@ai-vidya.com or create an issue in the repository.

## 🎉 Acknowledgments

- Images from [Unsplash](https://unsplash.com)
- Icons from [Lucide](https://lucide.dev)
- Inspiration from modern e-learning platforms

---

Built with ❤️ by the AI-Vidya Team
