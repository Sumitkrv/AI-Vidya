# 🗺️ AI-Vidya Platform - Complete Site Map

## Navigation Structure

```
🏠 AI-Vidya Platform
│
├── 🏠 Home (/)
│   ├── Hero Section
│   ├── Stats Bar
│   ├── Categories Showcase
│   ├── How It Works
│   ├── Featured Courses
│   ├── Why Choose Us
│   ├── Testimonials
│   └── CTA Sections
│
├── 📚 Courses (/courses)
│   ├── Search Bar
│   ├── Category Filter
│   ├── Level Filter
│   ├── Course Grid (6 courses)
│   └── → Course Detail (/courses/:id)
│       ├── Course Info
│       ├── Instructor Profile
│       ├── What You'll Learn
│       ├── Curriculum
│       ├── Description
│       └── Enrollment Card
│
├── 📂 Categories (/categories)
│   ├── 12 Category Cards
│   │   ├── UI/UX Design
│   │   ├── Web Development
│   │   ├── Mobile Development
│   │   ├── Digital Marketing
│   │   ├── AI & Data Science
│   │   ├── Video Editing
│   │   ├── Photography
│   │   ├── Database & Backend
│   │   ├── Cybersecurity
│   │   ├── Content Creation
│   │   ├── Graphic Design
│   │   └── Music Production
│   ├── Stats Section
│   └── Popular Categories
│
├── 👨‍🏫 Instructors (/instructors)
│   ├── 9 Instructor Profiles
│   ├── Stats Display
│   ├── Become Instructor CTA
│   └── Why Teach With Us
│
├── 💰 Pricing (/pricing)
│   ├── Billing Toggle (Monthly/Annual)
│   ├── 3 Pricing Tiers
│   │   ├── Free Plan
│   │   ├── Pro Plan (Popular)
│   │   └── Enterprise Plan
│   ├── Comparison Table
│   └── FAQs Section
│
├── 📝 Blog (/blog)
│   ├── Featured Post
│   ├── Category Filter
│   ├── Blog Grid (6 posts)
│   └── → Single Post (/blog/:slug)
│       ├── Article Content
│       ├── Author Info
│       └── Related Posts
│
├── ⭐ Testimonials (/testimonials)
│   ├── Stats Display
│   ├── 9 Testimonial Cards
│   ├── Video Testimonials
│   └── Success Story CTA
│
├── ❓ FAQs (/faqs)
│   ├── Search Bar
│   ├── 5 FAQ Categories
│   │   ├── Getting Started
│   │   ├── Billing & Payments
│   │   ├── Courses & Learning
│   │   ├── Technical Support
│   │   └── Account & Settings
│   ├── 25+ Questions
│   └── Contact CTA
│
├── ℹ️ About (/about)
│   ├── Company Story
│   ├── Stats Display
│   ├── Our Values (6 cards)
│   ├── Leadership Team (4 members)
│   └── Join CTA
│
├── 📧 Contact (/contact)
│   ├── 3 Contact Info Cards
│   ├── Contact Form
│   ├── Office Hours
│   ├── Support CTA
│   ├── Map Integration
│   └── FAQ Link
│
└── 🚫 404 Page (/*)
    ├── Error Message
    ├── Back to Home Button
    ├── Browse Courses Link
    └── Quick Links
```

## User Flows

### 🎯 Primary User Journey
```
Home → Courses → Course Detail → Pricing → Sign Up
```

### 📚 Learning Flow
```
Categories → Courses (Filtered) → Course Detail → Enroll
```

### 🔍 Discovery Flow
```
Home → Categories → Courses → Course Detail
Home → Instructors → View Courses → Course Detail
```

### 💡 Information Flow
```
Home → About → Testimonials → Pricing → Contact
```

### 📰 Content Flow
```
Home → Blog → Single Post → Related Posts
```

## Cross-Links & CTAs

### Every Page Has:
- ✅ Header Navigation (All pages)
- ✅ Footer Links (All pages)
- ✅ Mobile Menu (All pages)
- ✅ CTA Buttons (Strategic placement)

### Internal Linking Strategy:
```
Home ←→ All Pages
Courses ←→ Course Detail
Courses ←→ Categories
Instructors ←→ Courses
Blog ←→ Single Post
Pricing ←→ Contact
FAQs ←→ Contact
All Pages → 404 (Invalid URLs)
```

## Footer Navigation Map

```
Footer
├── Column 1: Brand & Description
├── Column 2: Platform Links
│   ├── Home
│   ├── About
│   ├── Courses
│   ├── Instructors
│   └── Pricing
├── Column 3: Resources
│   ├── Blog
│   ├── FAQs
│   ├── Testimonials
│   ├── Categories
│   └── Contact
└── Column 4: Legal & Social
    ├── Privacy Policy
    ├── Terms of Service
    └── Cookies Policy
```

## Mobile Menu Structure

```
Mobile Menu (Hamburger)
├── Home
├── About
├── Courses
├── Categories
├── Instructors
├── Pricing
├── Blog
├── Testimonials
├── FAQs
├── Contact
├── [Divider]
├── Sign In (Button)
└── Start Free Trial (Button)
```

## Page Dependencies

### Routes Requiring Data:
- `/courses` → `data/courses.js`
- `/courses/:id` → `data/courses.js` (by ID)
- `/blog` → `data/blog.js`
- `/blog/:slug` → `data/blog.js` (by slug)

### Static Pages:
- Home, About, Contact, Pricing, Instructors, Categories, Testimonials, FAQs, 404

## Search & Filter Locations

| Page | Search | Filters |
|------|--------|---------|
| Courses | ✅ Text Search | ✅ Category, Level |
| Blog | ❌ | ✅ Category |
| FAQs | ✅ Text Search | ✅ Category View |
| Categories | ❌ | ❌ |

## Conversion Funnels

### Primary Conversion Path:
```
Landing (Home)
    ↓
Browse (Courses/Categories)
    ↓
Evaluate (Course Detail)
    ↓
Decide (Pricing)
    ↓
Sign Up (CTA)
```

### Alternative Paths:
```
Blog → Courses → Pricing
Testimonials → Pricing → Sign Up
Instructors → Courses → Pricing
About → Pricing → Sign Up
```

## Page Relationships

```
         ┌─────────────┐
         │    HOME     │
         └─────┬───────┘
               │
       ┌───────┼───────┐
       │       │       │
   ┌───▼──┐ ┌─▼──┐ ┌──▼───┐
   │Courses│ │About│ │ Blog │
   └───┬──┘ └────┘ └──┬───┘
       │              │
   ┌───▼──────┐   ┌──▼───┐
   │  Detail  │   │ Post │
   └──────────┘   └──────┘
```

---

**Total Pages:** 13
**Total Routes:** 15+ (including dynamic)
**Internal Links:** 100+
**CTA Buttons:** 50+

All pages are interconnected and provide multiple pathways for users to navigate and convert! 🚀
