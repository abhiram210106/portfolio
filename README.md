# Vaka Abhiram — Portfolio Website

A modern, high-performance portfolio website built with **React 19**, **TypeScript**, **Tailwind CSS**, and **Three.js** interactive 3D elements.

🌐 **Live Website**: [https://abhiram210106.github.io/portfolio/](https://abhiram210106.github.io/portfolio/)  
📦 **GitHub Repository**: [https://github.com/abhiram210106/portfolio](https://github.com/abhiram210106/portfolio)

---

## 📁 Project Architecture

The entire portfolio is designed with **data-driven separation of concerns**. You do **not** need to touch complex React/Tailwind layout code to update your projects, skills, or personal info. Everything is controlled from a single configuration file!

```text
portfolio/
├── .github/workflows/deploy.yml   # Automatic GitHub Actions CI/CD pipeline
├── public/                        # Static assets (images, icons, favicon)
│   └── assets/images/             # Avatar, background, emoji graphics
├── src/
│   ├── data/
│   │   └── portfolioData.ts       # ⭐️ CENTRAL DATA STORE (Edit your works here!)
│   ├── components/                # Reusable UI components
│   │   ├── Hero.tsx               # Hero header with dynamic blob
│   │   ├── BlobAnimation.tsx      # Three.js 3D sphere animation
│   │   ├── AboutCard.tsx          # About me section & bio
│   │   ├── ShowcaseGrid.tsx       # Tech stack & skills badges
│   │   ├── ProjectsGrid.tsx       # Interactive works / project cards
│   │   ├── ContactCard.tsx        # Contact info & social links
│   │   ├── Navbar.tsx             # Floating responsive navigation bar
│   │   └── Icons.tsx              # SVG logos & technology badge renderers
│   ├── App.tsx                    # Main app page layout
│   └── main.tsx                   # React app entry point
├── package.json                   # Project dependencies and deployment scripts
└── vite.config.ts                 # Vite bundler configuration & base routing
```

---

## 🛠️ How to Add or Modify Your Works & Projects

All project cards are dynamically rendered from `src/data/portfolioData.ts`.

### Adding a New Project:
Open `src/data/portfolioData.ts`, find `portfolioData.makeThings.projects`, and add a new object to the array:

```typescript
{
  id: "my-new-project",
  title: "My New Project Title",
  subtitle: "Short tagline or category",
  description: "A clear description of what the project does, key algorithms, or impact.",
  // Pick any gradient (Tailwind gradient or hex colors)
  gradient: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #93c5fd 100%)",
  textColor: "text-white", // or "text-neutral-900" for light cards
  tags: [
    { label: "Python" },
    { label: "PyTorch" },
    { label: "Streamlit" }
  ],
  demoUrl: "https://your-demo-url.com",       // Live link (or GitHub link if no demo)
  githubUrl: "https://github.com/abhiram210106/your-repo",
  iconType: "ai",                             // 'voltammetry' | 'oralabs' | 'ai' | 'code' | 'web'
  status: "Completed",                        // "Completed" or "In Development"
  isOngoing: false,                           // Set true to show an amber 'In Progress' pill
}
```

The new card will immediately format, render, and adapt cleanly in the responsive grid!

---

## 🎨 How to Update Personal Info & Skills

In `src/data/portfolioData.ts`:
- **Bio & Education**: Update `portfolioData.about` (e.g. `paragraph1`, `degree`, `location`).
- **Skills & Badges**: Add or modify items in `portfolioData.showcase.skills` (Python, Java, Git, ML, etc.).
- **Social Links & Email**: Update `portfolioData.contact.socials` or `portfolioData.personal`.

---

## 💻 Local Development

Run the local development server with hot-reload:

```bash
npm run dev
```

Open [http://localhost:5173/portfolio/](http://localhost:5173/portfolio/) in your browser.

---

## 🚀 How to Deploy Updates Online

Whenever you make changes or add new projects, you have **two easy ways** to publish them live:

### Method 1: One-Command Fast Deploy (Recommended)
Run this single command in your terminal:
```bash
npm run deploy
```
*This automatically builds the project and updates your live site at `https://abhiram210106.github.io/portfolio/` immediately.*

### Method 2: Standard Git Push
Commit and push your changes to GitHub:
```bash
git add .
git commit -m "Add new project"
git push origin main
```
*GitHub Actions will automatically run the CI/CD pipeline and publish the update.*

---

## 📝 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts Vite development server with HMR |
| `npm run build` | Compiles TypeScript and creates optimized production bundle in `dist/` |
| `npm run deploy` | Builds and publishes directly to GitHub Pages (`gh-pages` branch) |
| `npm run preview` | Locally preview the production build |
| `npm run lint` | Runs Oxlint linter for fast code checks |
