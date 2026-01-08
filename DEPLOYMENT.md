# 🚀 Deployment Guide - AI-Vidya Platform

## Quick Deploy Options

### Option 1: Netlify (Recommended)

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Deploy**
   ```bash
   npm run build
   netlify deploy --prod
   ```

4. **Or use Netlify Drop**
   - Build: `npm run build`
   - Drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

### Option 2: Vercel

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

3. **Or use Vercel Dashboard**
   - Connect your Git repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"

### Option 3: GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     },
     "homepage": "https://yourusername.github.io/ai-vidya"
   }
   ```

3. **Update vite.config.js**
   ```js
   export default defineConfig({
     base: '/ai-vidya/',
     // ... rest of config
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

### Option 4: Custom Server (VPS/Shared Hosting)

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload the `dist` folder** to your server

3. **Configure server** to serve `index.html` for all routes

   **Nginx Example:**
   ```nginx
   server {
     listen 80;
     server_name yourdomain.com;
     root /path/to/dist;
     index index.html;

     location / {
       try_files $uri $uri/ /index.html;
     }
   }
   ```

   **Apache (.htaccess):**
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

## Environment Variables

If you need environment variables:

1. Create `.env` file:
   ```
   VITE_API_URL=https://api.yourdomain.com
   VITE_ANALYTICS_ID=your-analytics-id
   ```

2. Access in code:
   ```js
   const apiUrl = import.meta.env.VITE_API_URL
   ```

## Pre-Deployment Checklist

- [ ] Run `npm run build` successfully
- [ ] Test the production build locally: `npm run preview`
- [ ] Update meta tags in `index.html` with your domain
- [ ] Add Google Analytics (if needed)
- [ ] Set up custom domain
- [ ] Configure SSL certificate
- [ ] Test all routes work correctly
- [ ] Check mobile responsiveness
- [ ] Optimize images (if needed)
- [ ] Test form submissions
- [ ] Verify all links work
- [ ] Check console for errors

## Performance Optimization

1. **Image Optimization**
   - Use WebP format
   - Implement lazy loading
   - Use CDN for images

2. **Code Splitting**
   - Already implemented with React Router

3. **Caching**
   - Configure cache headers on your server
   - Use CDN for static assets

## Custom Domain Setup

### Netlify
1. Go to Domain settings
2. Add custom domain
3. Configure DNS records

### Vercel
1. Go to Project Settings > Domains
2. Add your domain
3. Configure DNS records

## SSL Certificate

Both Netlify and Vercel provide free SSL certificates automatically.

## Monitoring

Recommended tools:
- Google Analytics
- Hotjar
- Sentry (for error tracking)
- Google Search Console

## Post-Deployment

1. Submit sitemap to Google Search Console
2. Set up monitoring and analytics
3. Configure backups
4. Set up CI/CD pipeline (optional)

## Support

For deployment issues:
- Netlify: https://docs.netlify.com
- Vercel: https://vercel.com/docs
- GitHub Pages: https://pages.github.com

---

🎉 Your AI-Vidya platform is ready for the world!
