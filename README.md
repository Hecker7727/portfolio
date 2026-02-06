# 🌐 Modern Developer Portfolio

### Built with React 19, Tailwind CSS 4, GSAP, Framer Motion & Lenis

This is a fully animated, interactive developer portfolio designed to **impress clients, recruiters, and hiring managers**. It features buttery smooth scrolling, premium animations, and a modern design system.

> ⚡ Built with React 19 (Vite), Tailwind CSS 4, GSAP, Framer Motion, and Lenis.

<br/>


## 🚀 Tech Stack

| Technology       | Description                             |
| ---------------- | --------------------------------------- |
| **React 19**     | Latest React with Vite for fast dev     |
| **Tailwind CSS 4**| Next-gen utility-first styling          |
| **GSAP**         | High-performance scroll-based animations|
| **Framer Motion**| Complex layout and gesture animations   |
| **Lenis**        | Smooth scrolling experience             |

---

## 📁 Features

- 🔥 Immersive Hero Section with ethereal visual effects
- 🧩 Smooth slide-in Navbar with staggered animations
- 🎯 Scroll-triggered Service Summary
- 🖼️ Interactive Works section with hover effects
- ✍️ Creative About section with reveal animations
- 🏁 Scroll-based Marquee effects
- 📱 **Mobile Optimized**: Magnet effects disabled on mobile for better usability
- 📄 **Resume Feature**: Custom styled link with direct PDF access
- 💬 **Direct Contact**: Integrated WhatsApp link for instant messaging
- 💼 Fully responsive and accessible

---

## 📦 Setup & Installation

```bash
git clone https://github.com/yourusername/jayesh-portfolio.git
cd jayesh-portfolio
npm install
npm run dev
```

> Open http://localhost:5173 in your browser.

---

## 🛠️ Customization Tips

- Change text, images, and links in `/constants/index.js`
- Adjust design tokens in `index.css` (Tailwind 4 uses CSS variables)
- Add your own contact info in `Contact.jsx`

---

## 🤝 Let’s Build Together

> 📩 Open to opportunities and collaborations!



---

## 🚀 Deployment

This portfolio is configured to automatically deploy to **both GitHub Pages and Cloudflare Pages**. On every push to the `main` branch, the site will be built and deployed to both platforms.

### GitHub Pages
**Live Site**: https://hecker7727.github.io/

The deployment is handled by GitHub Actions (see `.github/workflows/deploy.yml`).

### Cloudflare Pages
**Live Site**: https://h07.me (via custom domain)

The deployment is handled by GitHub Actions using Wrangler (see `.github/workflows/cloudflare-pages.yml`).

#### Setup Required for Cloudflare Deployment
To enable Cloudflare Pages deployment via Wrangler, you only need to configure one secret:

**CLOUDFLARE_API_TOKEN**: 
- Go to [Cloudflare Dashboard](https://dash.cloudflare.com/profile/api-tokens)
- Create a new API token with "Cloudflare Pages: Edit" permissions
- Add it as a repository secret in GitHub

Both workflows run independently and deploy simultaneously on every push to `main`.
