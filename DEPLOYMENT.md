# NovelNest - Portfolio Website

A modern, interactive marketing portfolio website for the NovelNest mobile application - a digital storytelling platform for readers and authors.

## 🚀 Deployment to Netlify

### Method 1: Deploy via Netlify Dashboard (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git add -A
   git commit -m "Ready for Netlify deployment"
   git push origin master
   ```

2. **Connect to Netlify:**
   - Go to [Netlify](https://app.netlify.com/)
   - Click "Add new site" → "Import an existing project"
   - Choose "Deploy with GitHub"
   - Select your repository: `sunera321/website`
   - Configure build settings:
     - **Build command:** `npm run build`
     - **Publish directory:** `.next`
     - **Base directory:** (leave empty)
   - Click "Deploy site"

3. **Install Netlify Next.js Plugin:**
   - After deployment, go to "Site settings" → "Plugins"
   - Search for "Next.js Runtime"
   - Install "@netlify/plugin-nextjs"

### Method 2: Deploy via Netlify CLI

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify:**
   ```bash
   netlify login
   ```

3. **Initialize and Deploy:**
   ```bash
   netlify init
   netlify deploy --prod
   ```

## 🛠️ Build Configuration

The `netlify.toml` file is already configured with:
- Build command: `npm run build`
- Publish directory: `.next`
- Next.js plugin integration
- Node version: 18

## 📦 Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Technology Stack

- **Framework:** Next.js 14.2.5
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React, React Icons

## 📧 Contact

**Developer:** Shehani Kavishka
**Email:** shehanikavishkarg@gmail.com
**Phone:** +94 71 217 0538

## 📄 License

© 2025 NovelNest. All rights reserved.
