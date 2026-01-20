# PaniTech Academy

Projet Next.js avec TypeScript, Server Actions et Tailwind CSS - Architecture Feature-Based

## 🏗️ Architecture du projet

```
panitechacademy/
│
├── public/                        # Fichiers statiques (images, icônes, SVG, etc.)
│   ├── assets/                    # Assets exportés depuis Figma
│   └── favicon.ico
│
├── src/
│   ├── app/                       # Pages et routing Next.js (App Router)
│   │   ├── layout.tsx             # Layout global (Header/Footer)
│   │   ├── page.tsx               # Page d'accueil (Home)
│   │   ├── courses/               # Page Courses
│   │   │   └── page.tsx
│   │   ├── bootcamp/              # Page Bootcamp
│   │   │   └── page.tsx
│   │   └── globals.css            # Styles globaux (inclut Tailwind)
│   │
│   ├── components/                # Composants génériques réutilisables
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Button.tsx
│   │   └── Card.tsx
│   │
│   ├── features/                  # Fonctionnalités spécifiques
│   │   ├── home/
│   │   │   ├── components/        # Composants propres à Home
│   │   │   │   └── Hero.tsx
│   │   │   ├── actions/           # Server Actions
│   │   │   │   └── getHeroData.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── courses/
│   │   │   ├── components/        # Composants propres à Courses
│   │   │   │   └── CourseCard.tsx
│   │   │   ├── actions/           # Server Actions
│   │   │   │   └── fetchCourses.ts
│   │   │   └── index.ts
│   │   │
│   │   └── bootcamp/
│   │       ├── components/        # Composants propres à Bootcamp
│   │       │   └── BootcampBanner.tsx
│   │       ├── actions/           # Server Actions
│   │       │   └── registerBootcamp.ts
│   │       └── index.ts
│   │
│   ├── lib/                       # Fonctions utilitaires globales
│   │   └── apiClient.ts
│   │
│   ├── styles/                    # Config Tailwind et styles personnalisés
│   │   └── tailwind.config.ts
│   │
│   └── types/                     # Types et interfaces TypeScript
│       ├── course.ts
│       ├── bootcamp.ts
│       └── user.ts
│
├── .env.local                     # Variables d'environnement (API, clés…)
├── tailwind.config.js              # Configuration Tailwind
├── postcss.config.js               # Configuration PostCSS
├── next.config.js                  # Configuration Next.js
├── tsconfig.json                   # Configuration TypeScript
└── package.json                    # Dépendances et scripts
```

## 🚀 Installation

```bash
npm install
```

## 📝 Scripts disponibles

- `npm run dev` - Démarrer le serveur de développement
- `npm run build` - Construire l'application pour la production
- `npm run start` - Démarrer le serveur de production
- `npm run lint` - Lancer ESLint

## 🔧 Technologies utilisées

- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utilitaire
- **Server Actions** - Actions serveur intégrées (approche hybride)

## 📚 Structure Feature-Based

Le projet suit une architecture **feature-based** où chaque fonctionnalité est isolée dans son propre dossier avec :
- Ses composants spécifiques
- Ses Server Actions
- Ses types (si nécessaire)
- Un fichier `index.ts` pour les exports

### Avantages

- ✅ Organisation claire et modulaire
- ✅ Facilite la maintenance et l'évolutivité
- ✅ Réutilisabilité des composants génériques
- ✅ Séparation des préoccupations

## 🎯 Server Actions

Les Server Actions permettent d'exécuter du code côté serveur directement depuis les composants React. Voir les fichiers dans `src/features/*/actions/` pour des exemples.

### Caractéristiques

- ✅ Typage TypeScript complet
- ✅ Validation côté serveur
- ✅ Gestion d'état avec `useTransition`
- ✅ Approche hybride (client + serveur)

## 📦 Configuration

### Variables d'environnement

Créez un fichier `.env.local` à la racine du projet :

```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

### Tailwind CSS

La configuration Tailwind est dans `tailwind.config.js`. Les styles personnalisés peuvent être ajoutés dans `src/styles/tailwind.config.ts`.

## 🎨 Composants

### Composants génériques

Les composants réutilisables sont dans `src/components/` :
- `Header` - En-tête de navigation
- `Footer` - Pied de page
- `Button` - Bouton avec variantes
- `Card` - Carte de contenu

### Composants de features

Les composants spécifiques à une feature sont dans `src/features/[feature]/components/`.

## 🔄 Prochaines étapes

1. Ajouter une base de données (Prisma, Supabase, etc.)
2. Implémenter l'authentification
3. Ajouter des tests (Jest, Testing Library)
4. Configurer CI/CD
5. Ajouter des animations et transitions
