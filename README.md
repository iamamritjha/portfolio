# Amrit Prakash — Modern Developer Portfolio (v2.0)

A world-class, minimal luxury portfolio designed for **Amrit Prakash** (Full-Stack Developer & MCA Student at Chandigarh University). Built with **React 19**, **Vite**, **Framer Motion**, and **Tailwind CSS v4**.

---

## ⚡ Tech Stack & Architecture

- **Core**: React 19 + Vite 6
- **Styling**: Tailwind CSS v4 + Vanilla Glassmorphism & Custom Ambient Glows
- **Motion**: Framer Motion 12 (spring physics, layout animations, exit transitions)
- **Typography**: `Syne` (editorial headings), `Plus Jakarta Sans` (body), `JetBrains Mono` (code/tags)
- **Icons**: Lucide React + Bespoke Brand SVGs

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
The site runs locally at: **`http://localhost:3000`**

### 3. Production Build
```bash
npm run build
```
Creates an optimized static bundle in `dist/`.

---

## 📂 Project Structure

```text
Portfolio/
├── public/
│   ├── Amrit_Resume.pdf               <-- Official resume PDF (downloadable)
│   └── images/
│       ├── avatar.png                 <-- Profile portrait
│       └── lifeledger-comparison.png  <-- Project architecture infographics
├── src/
│   ├── components/
│   │   ├── Navbar.jsx                 <-- Floating glassmorphic navigation
│   │   ├── Hero.jsx                   <-- High-impact intro, stat strip & CTAs
│   │   ├── ProjectCard.jsx            <-- Spacious project cards with spring hover
│   │   ├── ProjectsSection.jsx        <-- Project showcase with category filters
│   │   ├── ProjectModal.jsx           <-- Deep-dive architecture modal
│   │   ├── AboutSection.jsx           <-- Portrait card, bio & credentials
│   │   ├── SkillsSection.jsx          <-- Categorized skill bento grid
│   │   ├── EducationSection.jsx       <-- Academic timeline (MCA, BCA, BSEB)
│   │   ├── ContactSection.jsx         <-- Copyable email & direct socials
│   │   ├── Footer.jsx                 <-- Minimalist footer & back-to-top
│   │   └── Icons.jsx                  <-- Brand SVGs (GitHub, LinkedIn)
│   ├── data/
│   │   └── portfolioData.js           <-- ⭐ ALL EDITABLE CONTENT LIVES HERE ⭐
│   ├── App.jsx                        <-- Main page assembly + scroll progress
│   ├── index.css                      <-- Global design tokens, glow & glass styles
│   └── main.jsx                       <-- React entry point
├── package.json
└── vite.config.js
```

---

## ✏️ How to Update Content in the Future

All data is centralized in **`src/data/portfolioData.js`**. You don't need to touch JSX files for content updates:

1. **Update DSA count or CGPA**:
   Edit `stats` in `src/data/portfolioData.js`.
2. **Add or Edit Projects**:
   Add a new object to the `projects` array in `src/data/portfolioData.js`.
3. **Update Skills or Certifications**:
   Edit `skillCategories` or `certifications` arrays.
4. **Update Contact Info**:
   Edit `personalInfo` object.
5. **Update Resume**:
   Drop the new PDF in `public/Amrit_Resume.pdf`.

---

© 2026 Amrit Prakash. All rights reserved.
