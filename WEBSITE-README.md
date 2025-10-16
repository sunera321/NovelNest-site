# NovelNest Marketing Website

An interactive, modern portfolio website for NovelNest - A digital storytelling platform that streamlines the user experience of both authors and readers.

## 🚀 Built With

- **Next.js 14** - React framework for production
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library

## ✨ Features

- 🎨 Modern, responsive design
- ⚡ Fast page loads with Next.js optimization
- 🎭 Smooth animations with Framer Motion
- 📱 Mobile-first approach
- 🎯 SEO optimized
- ♿ Accessible
- 🎨 Brand-consistent color scheme

## 📦 Installation

1. **Navigate to the website folder:**
   ```bash
   cd website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
website/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Homepage
│   │   └── globals.css       # Global styles
│   └── components/
│       ├── layout/
│       │   ├── Header.tsx    # Navigation header
│       │   └── Footer.tsx    # Site footer
│       └── home/
│           ├── Hero.tsx      # Hero section
│           ├── Features.tsx  # Features showcase
│           ├── HowItWorks.tsx
│           ├── ForReaders.tsx
│           ├── ForAuthors.tsx
│           ├── Stats.tsx
│           ├── Testimonials.tsx
│           └── CTA.tsx       # Call to action
├── public/                   # Static assets
├── tailwind.config.js        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── package.json

```

## 🎨 Customization

### Colors
The website uses NovelNest's brand colors defined in `tailwind.config.js`:
- Primary: #213A57
- Secondary: #14919B
- Cyan: #0AD1C8
- Green: #45DFB1, #80ED99

### Content
Edit the content in the component files under `src/components/home/` to customize text, testimonials, features, etc.

## 📄 Sections

### Homepage includes:
1. **Hero Section** - Eye-catching introduction with app download CTAs
2. **Features** - Key features of NovelNest
3. **How It Works** - 4-step process explanation
4. **For Readers** - Benefits for readers
5. **For Authors** - Benefits for authors with dashboard preview
6. **Stats** - Community statistics
7. **Testimonials** - User reviews and feedback
8. **Call to Action** - Final conversion section

## 🎯 Marketing Focus

The website is designed to:
- ✅ Attract new users to download the mobile app
- ✅ Showcase features for both readers and authors
- ✅ Build trust through testimonials and statistics
- ✅ Provide clear calls-to-action
- ✅ Offer an engaging, interactive experience

## 🤝 Contributing

This is the marketing website for NovelNest mobile application. For the main app repository, please refer to the NovelNest-FrontEnd and NovelNest-BackEnd folders.

## 📝 License

Copyright © 2025 NovelNest. All rights reserved.
