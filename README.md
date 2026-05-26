# 💫 Relation

<div align="center">

<img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=22&pause=1000&color=A78BFA&center=true&vCenter=true&width=500&lines=Discover+the+bond+between+two+people;Do+naam+%E2%80%94+ek+raaz;Find+your+relationship+instantly!" alt="Typing SVG" />

<br/>

![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-6-fbbf24?style=for-the-badge&logo=vite&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-f7df1e?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-06d6a0?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Live-ff4d6d?style=for-the-badge)

<br/>

**[🌐 Live Demo](https://arushkumar-aiml.github.io/Relation-)** &nbsp;·&nbsp;
**[🐛 Report Bug](https://github.com/arushkumar-aiml/Relation-/issues)** &nbsp;·&nbsp;
**[✨ Request Feature](https://github.com/arushkumar-aiml/Relation-/issues)**

</div>

---

## 📸 Preview

> A beautifully crafted relationship detector app with immersive dark UI, animated gradients, and smooth transitions. Enter two names and instantly reveal what bond they share.

---

## 🌟 About The Project

**Relation** is a fun and visually stunning web app that uncovers the hidden relationship between any two people using the classic **FLAMES algorithm** — reimagined with a modern, animated interface.

Whether you want to know if two people are best friends, lovers, siblings, or sworn enemies — just type the names and let the magic happen. ✨

> *"Do naam — ek raaz"* &nbsp; Two names, one secret.

---

## ✨ Features

- 🎯 &nbsp; **Instant Relationship Detection** — Smart FLAMES algorithm with name-based letter analysis
- 🧡 &nbsp; **6 Unique Relationship Types** — Friends, Lovers, Acquaintance, Husband-Wife, Enemies, Siblings
- 📊 &nbsp; **Compatibility Score** — Animated progress bar showing bond strength
- 🔢 &nbsp; **Transparent Calculation** — See every step of how the result was determined
- 🌌 &nbsp; **Immersive Animated UI** — Live gradient orbs, pulse effects, smooth entrance animations
- 📱 &nbsp; **Fully Responsive** — Pixel-perfect on mobile, tablet, and desktop
- ⚡ &nbsp; **Blazing Fast** — Powered by Vite with instant Hot Module Replacement
- 🚫 &nbsp; **Zero Friction** — Only names needed, nothing else

---

## 💜 Relationship Types

<div align="center">

| &nbsp; | Relationship | Hindi Name | Bond Strength |
|--------|-------------|-----------|:---:|
| 🤝 | **Friends** | Pakke Dost | ![70%](https://img.shields.io/badge/70%25-06d6a0?style=flat-square) |
| ❤️ | **Lovers** | Pyaar | ![95%](https://img.shields.io/badge/95%25-ff4d6d?style=flat-square) |
| 😊 | **Acquaintance** | Jaanpehchan | ![45%](https://img.shields.io/badge/45%25-ffd166?style=flat-square) |
| 💍 | **Made for Each Other** | Husband-Wife | ![92%](https://img.shields.io/badge/92%25-c77dff?style=flat-square) |
| ⚡ | **Enemies** | Dushman | ![15%](https://img.shields.io/badge/15%25-ff6b35?style=flat-square) |
| 🧡 | **Siblings** | Bhai-Bahen | ![88%](https://img.shields.io/badge/88%25-a8dadc?style=flat-square) |

</div>

---

## 🧠 How It Works

The app uses a customized **FLAMES algorithm** based on letter analysis:

```
1. Take both names as input
2. Cross out all common letters between the two names
3. Count the total remaining letters → this becomes the "count"
4. Cycle through F → L → A → M → E → S
   eliminating one letter every "count" steps
5. The last letter standing = the relationship type
```

**Real Example:**
```
Input  →  "Arush" + "Ayushi"
Common →  a, u, h, i  (crossed out)
Left   →  r + y s = 3 letters
Count  →  3
Elim   →  F → L → A → M → E
Winner →  S  =  Siblings 🧡  ✅
```

---

## 🚀 Getting Started

### Prerequisites

```bash
node  -v   # v18+
npm   -v   # v9+
git   --version
```

### Installation

```bash
# Clone the repo
git clone https://github.com/arushkumar-aiml/Relation-.git

# Enter the project
cd Relation-

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open **[http://localhost:5173](http://localhost:5173)** in your browser 🎉

---

## 📦 Scripts

```bash
npm run dev       # Start development server (HMR enabled)
npm run build     # Build for production → /dist
npm run preview   # Preview production build locally
npm run lint      # Run ESLint checks
npm run deploy    # Deploy to GitHub Pages
```

---

## 📁 Project Structure

```
Relation-/
│
├── 📂 public/
│   └── vite.svg
│
├── 📂 src/
│   ├── App.jsx          ← Main app component + FLAMES logic
│   ├── App.css          ← All styles, animations, variables
│   ├── main.jsx         ← React DOM entry point
│   └── index.css        ← Global reset
│
├── index.html           ← HTML shell
├── vite.config.js       ← Vite config
├── package.json         ← Dependencies & scripts
└── README.md            ← You are here 📍
```

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| [React](https://react.dev) | 19 | UI Framework |
| [Vite](https://vitejs.dev) | 6 | Build Tool & Dev Server |
| [Lucide React](https://lucide.dev) | Latest | Icon Library |
| CSS3 | — | Animations & Styling |

---

## 🌐 Deployment

### GitHub Pages

```bash
npm install --save-dev gh-pages

# In package.json add:
# "homepage": "https://arushkumar-aiml.github.io/Relation-"
# "predeploy": "npm run build"
# "deploy": "gh-pages -d dist"

npm run deploy
```

Live at → **`https://arushkumar-aiml.github.io/Relation-`**

### One-Click Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/arushkumar-aiml/Relation-)

---

## 📱 Run on Android (Termux)

```bash
pkg install nodejs git -y
git clone https://github.com/arushkumar-aiml/Relation-.git
cd Relation- && npm install && npm run dev
# Visit: http://localhost:5173
```

---

## 🤝 Contributing

All contributions are welcome!

```bash
# 1. Fork the repo
# 2. Create your branch
git checkout -b feature/YourFeature

# 3. Commit changes
git commit -m "✨ Add YourFeature"

# 4. Push and open a Pull Request
git push origin feature/YourFeature
```

---

## 👨‍💻 Author

<div align="center">

**Arush Kumar**

[![GitHub](https://img.shields.io/badge/GitHub-arushkumar--aiml-181717?style=for-the-badge&logo=github)](https://github.com/arushkumar-aiml)

</div>

---

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for more information.

---

<div align="center">

Made with 💜 and a little bit of cosmic magic

*Har rishta khaas hota hai — Every relationship is special.*

⭐ **Drop a star if you liked it!** ⭐

</div>
