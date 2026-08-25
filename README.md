# Portfolio React

Portfolio personnel développé avec React, Vite et Tailwind CSS. Design en thème sombre avec des sections organisées en cartes, entièrement responsive (mobile, tablette, desktop).

## Stack technique

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/) — build tool & dev server
- [Tailwind CSS 3](https://tailwindcss.com/) — styling utilitaire
- [React Router 7](https://reactrouter.com/) — routage
- [lucide-react](https://lucide.dev/) — icônes

## Installation

```bash
npm install
```

## Commandes disponibles

| Commande | Description |
| --- | --- |
| `npm run dev` | Lance le serveur de développement (Vite) |
| `npm run build` | Génère le build de production dans `dist/` |
| `npm run preview` | Sert le build de production en local |
| `npm run lint` | Vérifie le code avec ESLint |

## Structure du projet

```
src/
├── App.jsx              # Déclaration des routes
├── main.jsx             # Point d'entrée React
├── Pages/               # Pages associées aux routes
│   ├── Intro.jsx         # "/" — page d'accueil
│   ├── Blogs.jsx         # "/blog"
│   ├── Uses.jsx          # "/uses"
│   └── Contact.jsx       # "/contact"
└── components/
    ├── Layout.jsx         # Structure commune (Header + contenu + Footer)
    ├── Header.jsx         # Navbar (avec menu hamburger responsive)
    ├── Footer.jsx         # Pied de page
    ├── HeroBanner.jsx     # Section d'accueil (carte)
    ├── Cta.jsx            # Appel à l'action (carte)
    ├── MyStory.jsx        # Section "À propos" (carte)
    ├── MyStory2.jsx       # Articles/expériences (carte, répétée en liste)
    ├── MyProject.jsx      # Élément de la liste de projets (carte)
    ├── Pagination.jsx     # Pagination du blog
    ├── BlogComponents.jsx # Contenu de la page Blog
    ├── ContactComponent.jsx # Contenu de la page Contact
    └── UsesComponent.jsx  # Contenu de la page Uses
```

## Routes

| Route | Page |
| --- | --- |
| `/` | Accueil (Intro) |
| `/blog` | Blog |
| `/uses` | Outils utilisés |
| `/contact` | Contact |

## Conventions de design

- Fond global sombre (`#072344`) appliqué dans [Layout.jsx](src/components/Layout.jsx).
- Sections principales présentées comme des cartes (`rounded-2xl`/`3xl`, `border-white/10`, `bg-white/5`, `backdrop-blur`) alignées sur la largeur de la navbar (`max-w-7xl`).
- Composants responsives : disposition en une colonne sur mobile, en plusieurs colonnes/lignes à partir de `sm:`/`md:`/`lg:`.
