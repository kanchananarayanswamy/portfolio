# Portfolio Website 🚀

A clean, minimal, and modern personal portfolio website for a Computer Science (Data Science) Student. Built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🌟 Features

✨ **Modern Design**
- Apple-inspired minimal UI
- Light and dark mode toggle
- Smooth scrolling and animations
- Clean typography with Poppins & Inter fonts
- Soft shadows and rounded cards
- Professional color palette

📱 **Fully Responsive**
- Mobile-first design approach
- Optimized for mobile, tablet, and desktop
- Touch-friendly interactions

⚡ **Performance**
- Fast loading with Vite
- Optimized animations with Framer Motion
- Minimal dependencies
- SEO-friendly structure

🎨 **Interactive Components**
- Animated navbar with active section highlighting
- Scroll-to-top button
- Hover effects and transitions
- Staggered animations

## 📋 Sections

### 1. **Hero**
- Name and title
- Short introduction
- Resume download button
- Call-to-action button
- Animated scroll indicator

### 2. **About**
- Profile image with gradient border
- Brief introduction
- Education details
- Career objective
- "Learn More" button

### 3. **Skills**
Organized by categories:
- **Programming**: Python, JavaScript, SQL, C
- **Frontend**: React, HTML, CSS, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Databases**: PostgreSQL, MySQL, MongoDB
- **Tools**: Git, GitHub, VS Code, Postman, Tableau, Power BI

### 4. **Projects**
- Project cards with images/emojis
- Title and description
- Technology tags
- GitHub and Live Demo buttons
- Hover animations

### 5. **Experience**
- Timeline layout with visual indicators
- Job title, company, location, and period
- Description and highlights
- Responsive grid design

### 6. **Certifications**
- Certificate cards with images
- Issuer and date information
- Credential ID
- Links to verify certificates

### 7. **Coding Profiles**
Links to:
- LeetCode
- CodeChef
- HackerRank
- GitHub
- LinkedIn
- CodePen

### 8. **Contact**
- Contact information (Email, Phone, Location)
- Contact form with validation
- Success message animation
- Social media links

### 9. **Footer**
- Copyright information
- Quick navigation links
- Social media icons
- Year-based copyright

## 🛠️ Tech Stack

- **Framework**: React 18.2
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Scrolling**: React Scroll
- **CSS Processing**: PostCSS & Autoprefixer

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/kanchananarayanswamy/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The site will open at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🎨 Customization

### Personal Information
Update the following files with your information:

- **Hero Section**: `src/components/Hero.tsx`
  - Name, title, and introduction
  - Resume download link

- **About Section**: `src/components/About.tsx`
  - Bio, education, and career objective
  - Profile image (change emoji or add image)

- **Projects**: `src/components/Projects.tsx`
  - Add your projects with details
  - Update GitHub and demo links

- **Experience**: `src/components/Experience.tsx`
  - Add your work experience
  - Update dates and responsibilities

- **Certifications**: `src/components/Certifications.tsx`
  - Add your certificates
  - Update issuer and credential links

- **Contact**: `src/components/Contact.tsx`
  - Update email, phone, and location
  - Connect social media links

- **Footer**: `src/components/Footer.tsx`
  - Update social media links
  - Modify quick navigation links

### Theme Customization

Edit `tailwind.config.js` to customize:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#0066ff', // Change primary color
      // Customize dark mode colors
    },
    // Add custom animations, fonts, etc.
  },
},
```

### Colors

- **Primary**: `#0066ff` (Blue)
- **Light Background**: `#ffffff` (White)
- **Dark Background**: `#0f1419` (Near Black)
- **Accents**: Blue shades for gradients

## 📂 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Certifications.tsx
│   │   ├── CodingProfiles.tsx
│   │   ├── Contact.tsx
│   │   ├── ScrollToTop.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── tsconfig.node.json
├── package.json
└── .gitignore
```

## 🚀 Deployment

### GitHub Pages

1. Build the project:
   ```bash
   npm run build
   ```

2. Update `vite.config.ts` with your repository name:
   ```typescript
   export default defineConfig({
     base: '/portfolio/',
     // ... other config
   })
   ```

3. Push to GitHub and enable GitHub Pages in settings

### Vercel

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Vite and deploy
3. Your site is live at `your-project.vercel.app`

### Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

## 🎯 Features Highlights

### Dark Mode
- Toggle between light and dark themes
- Preference saved in localStorage
- Smooth transitions

### Animations
- Page fade-in on load
- Staggered component animations
- Hover scale effects
- Scroll-triggered animations
- Smooth scroll behavior

### Responsive Design
- Mobile: Single column layout
- Tablet: 2-column grids
- Desktop: 3-4 column grids
- Touch-friendly buttons and spacing

## 🔍 SEO

- Semantic HTML structure
- Meta tags in `index.html`
- Open Graph tags ready
- Mobile viewport optimization
- Fast page load times

## 📝 Performance Tips

1. Optimize images for better loading
2. Minify and bundle assets
3. Use lazy loading for sections
4. Enable gzip compression on server
5. Cache-friendly configuration

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available under the MIT License.

## 💡 Tips

- Replace emoji placeholders with actual images for better branding
- Add real project links and GitHub repositories
- Update all contact information
- Customize color scheme to match your brand
- Add your resume PDF for download
- Test on different devices before deployment
- Use analytics to track visitor engagement

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Framer Motion Documentation](https://www.framer.com/motion)
- [Vite Documentation](https://vitejs.dev)

## 📧 Support

If you have any questions or need help, feel free to reach out!

## 🙏 Acknowledgments

- Inspired by Apple's design philosophy
- Built with modern web technologies
- Crafted with attention to detail and user experience

---

**Happy coding! 🎉**

Made with ❤️ for aspiring data scientists and developers.
