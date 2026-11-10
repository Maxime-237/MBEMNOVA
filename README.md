# MBEMNOVA — Reproduction du site officiel

Projet d'école : reproduction à l'identique du site [mbemnova.com](https://www.mbemnova.com/),
agence de développement web, intelligence artificielle et cybersécurité basée à Douala.

## Technologies

- [Vue 3](https://vuejs.org/) avec [Vite](https://vite.dev/)
- [Vue Router](https://router.vuejs.org/) pour la navigation entre les pages
- [Tailwind CSS](https://tailwindcss.com/) pour le style
- [AOS](https://michalsnik.github.io/aos/) pour les animations au scroll

## Fonctionnalités

- [x] Mise en place du projet, du thème (couleurs, polices) et du routeur
- [x] Navbar flottante responsive avec menu burger et lien de page active
- [x] Footer avec newsletter (validation de l'adresse email)
- [ ] Page d'accueil
- [ ] Pages À propos, Carrières et Stage
- [ ] Pages Services (avec pages de détail dynamiques)
- [ ] Pages Produits et Portfolio (filtres et fenêtre de détail)
- [ ] Blog et page Contact (formulaires)

## Responsive

Le site est conçu en « mobile-first » avec les breakpoints suivants :

| Appareil | Largeur | Préfixe Tailwind |
|---|---|---|
| Mobile | 375 px | `xs:` |
| Grand mobile | 640 px | `sm:` |
| Tablette | 768 px | `md:` |
| Ordinateur | 1024 px | `lg:` |

## Installation

```bash
git clone https://github.com/Maxime-237/MBEMNOVA.git
cd mbemnova
npm install
npm run dev
```

Le site est ensuite accessible sur `http://localhost:5173`.

## Structure du projet

```
src/
├── assets/images/     # Logo et images du site
├── components/
│   └── layout/        # Navbar, Footer
├── data/              # Données du site (pôles, projets, articles…)
├── router/            # Définition des routes
├── views/             # Une page = un fichier
├── App.vue
├── main.js
└── style.css          # Thème Tailwind (couleurs, polices, breakpoints)
```
