# 🚀 Quick Netlify Deployment Guide

## Step-by-Step Deployment Instructions

### 1️⃣ **Go to Netlify**
Visit: [https://app.netlify.com/](https://app.netlify.com/)

### 2️⃣ **Sign In**
- Click "Sign up" or "Log in"
- Choose "Sign up with GitHub" (recommended)

### 3️⃣ **Import Your Project**
1. Click **"Add new site"** button
2. Select **"Import an existing project"**
3. Choose **"Deploy with GitHub"**
4. Authorize Netlify to access your GitHub account (if first time)

### 4️⃣ **Select Repository**
- Find and click on: `sunera321/website` (or `sunera321/NovelNest-site`)

### 5️⃣ **Configure Build Settings**
Netlify will auto-detect Next.js, but verify:

```
Build command: npm run build
Publish directory: .next
Branch to deploy: master
```

### 6️⃣ **Deploy Site**
- Click **"Deploy [your-site-name]"**
- Wait 2-3 minutes for the build to complete
- Your site will be live at: `https://[random-name].netlify.app`

### 7️⃣ **Custom Domain (Optional)**
1. Go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Enter your domain name (e.g., `novelnest.com`)
4. Follow DNS configuration instructions

---

## 🔄 Automatic Deployments

Once connected, Netlify will automatically:
- ✅ Deploy every time you push to `master` branch
- ✅ Show deploy previews for pull requests
- ✅ Send you email notifications on build status

---

## ⚙️ Build Settings (Already Configured)

The `netlify.toml` file includes:
- Next.js plugin for optimal performance
- Node.js version 18
- Automatic redirects for SPA routing

---

## 🎉 That's It!

Your NovelNest portfolio website will be live in minutes!

**Need help?** 
- 📧 Email: shehanikavishkarg@gmail.com
- 📱 Phone: +94 71 217 0538
