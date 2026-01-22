# Documentation PaniTech Academy

## 📦 Liste des Dépendances

### Dépendances Principales (dependencies)

| Package | Version | Description |
|---------|---------|-------------|
| `next` | ^14.2.0 | Framework React pour applications full-stack |
| `react` | ^18.3.1 | Bibliothèque UI React |
| `react-dom` | ^18.3.1 | Rendu React pour le DOM |
| `@fortawesome/fontawesome-svg-core` | ^7.1.0 | Core FontAwesome pour icônes SVG |
| `@fortawesome/free-solid-svg-icons` | ^7.1.0 | Icônes solides gratuites FontAwesome |
| `@fortawesome/react-fontawesome` | ^3.1.1 | Composants React pour FontAwesome |

### Dépendances de Développement (devDependencies)

| Package | Version | Description |
|---------|---------|-------------|
| `typescript` | ^5.4.5 | Langage de programmation typé |
| `tailwindcss` | ^3.4.1 | Framework CSS utility-first |
| `postcss` | ^8.4.35 | Outil de transformation CSS |
| `autoprefixer` | ^10.4.18 | Plugin PostCSS pour préfixes CSS |
| `eslint` | ^8.57.0 | Linter JavaScript/TypeScript |
| `eslint-config-next` | ^14.2.0 | Configuration ESLint pour Next.js |
| `@types/node` | ^20.12.7 | Types TypeScript pour Node.js |
| `@types/react` | ^18.3.1 | Types TypeScript pour React |
| `@types/react-dom` | ^18.3.0 | Types TypeScript pour React DOM |
| `pdfkit` | ^0.14.0 | Génération de PDF (non utilisé actuellement) |

---

## 🏗️ Architecture du Projet

### Structure des Dossiers

```
panitechacademy/
├── src/
│   ├── app/                    # Pages Next.js (App Router)
│   │   ├── page.tsx            # Page d'accueil
│   │   ├── layout.tsx         # Layout racine
│   │   ├── courses/
│   │   │   ├── page.tsx       # Liste des cours
│   │   │   └── [id]/
│   │   │       └── page.tsx   # Détail d'un cours
│   │   └── bootcamp/
│   │       └── page.tsx       # Page bootcamp
│   ├── components/             # Composants réutilisables
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── TopHeader.tsx
│   ├── features/              # Features organisées par domaine
│   │   ├── home/              # Composants de la page d'accueil
│   │   ├── courses/           # Composants des cours
│   │   └── bootcamp/          # Composants bootcamp
│   ├── lib/                   # Utilitaires et clients
│   │   └── apiClient.ts       # Client API centralisé
│   └── types/                 # Types TypeScript
│       ├── course.ts
│       ├── bootcamp.ts
│       └── user.ts
└── public/                    # Assets statiques
```

---

## 🧩 Composants et leur Utilisation

### 1. Composants Globaux (`src/components/`)

#### **Button.tsx**
- **Description** : Composant bouton réutilisable avec variantes
- **Props** :
  - `variant`: 'primary' | 'secondary' | 'outline' (défaut: 'primary')
  - `children`: Contenu du bouton
  - `className`: Classes CSS supplémentaires
  - Toutes les props HTML standard d'un bouton
- **Utilisation** :
  ```tsx
  <Button variant="primary" className="px-8 py-4">
    Cliquer ici
  </Button>
  ```
- **Où utilisé** : Partout dans l'application (Hero, Footer, Sections, etc.)

#### **Card.tsx**
- **Description** : Conteneur de carte avec ombre et padding
- **Props** :
  - `children`: Contenu de la carte
  - `className`: Classes CSS supplémentaires
- **Utilisation** :
  ```tsx
  <Card className="mb-4">
    Contenu de la carte
  </Card>
  ```

#### **Header.tsx**
- **Description** : En-tête principal avec navigation, recherche, panier
- **Fonctionnalités** :
  - Navigation responsive (mobile/desktop)
  - Menu déroulant pour les cours
  - Barre de recherche
  - Sélecteur de langue (FR/EN/ES)
  - Icônes panier et favoris
- **Où utilisé** : `src/app/layout.tsx` (toutes les pages)

#### **Footer.tsx**
- **Description** : Pied de page avec liens et réseaux sociaux
- **Fonctionnalités** :
  - 4 colonnes de liens (Solutions, Company, Resources, Legal)
  - Icônes réseaux sociaux (Facebook, Twitter, LinkedIn, Instagram)
  - Dégradé de fond (#57C5F7 → #005C86)
- **Où utilisé** : `src/app/layout.tsx` (toutes les pages)

#### **TopHeader.tsx**
- **Description** : En-tête supérieur (barre d'information)
- **Où utilisé** : `src/app/layout.tsx`

---

### 2. Composants Home (`src/features/home/components/`)

#### **Hero.tsx**
- **Description** : Section héro de la page d'accueil
- **Fonctionnalités** :
  - Image de fond avec overlay
  - Titre principal
  - Barre de recherche
  - Bouton "Browse Courses" (fond #57C5F7)
- **Où utilisé** : `src/app/page.tsx` (première section)

#### **TopRatedCourses.tsx**
- **Description** : Affiche les cours les mieux notés
- **Où utilisé** : `src/app/page.tsx`

#### **CourseBundles.tsx**
- **Description** : Affiche les bundles de cours
- **Où utilisé** : `src/app/page.tsx`

#### **NewestCourses.tsx**
- **Description** : Affiche les cours les plus récents
- **Où utilisé** : `src/app/page.tsx`

#### **InstructorLeadCourses.tsx**
- **Description** : Affiche les cours dirigés par un instructeur
- **Où utilisé** : `src/app/page.tsx`

#### **BootcampSection.tsx**
- **Description** : Section présentant les bootcamps
- **Où utilisé** : `src/app/page.tsx`

#### **Frame107Section.tsx**
- **Description** : Section Frame 107 (contenu spécifique)
- **Où utilisé** : `src/app/page.tsx`

#### **PartnersSection.tsx**
- **Description** : Section "Our Student Work at these companies"
- **Fonctionnalités** :
  - Dégradé de fond (#57C5F7 → #005C86)
  - 4 logos de partenaires cliquables (Microsoft, Adobe, Certified Agency, AWS)
  - Texte "Strategy" en overlay
- **Où utilisé** : `src/app/page.tsx`

#### **WhyChooseSection.tsx**
- **Description** : Section "Pourquoi nous choisir"
- **Où utilisé** : `src/app/page.tsx`

#### **TestimonialsSection.tsx**
- **Description** : Section témoignages
- **Où utilisé** : `src/app/page.tsx`

#### **ReviewsSection.tsx**
- **Description** : Section avis clients
- **Où utilisé** : `src/app/page.tsx`

#### **FAQSection.tsx**
- **Description** : Section FAQ (Questions fréquentes)
- **Où utilisé** : `src/app/page.tsx`

#### **BusinessSection.tsx**
- **Description** : Section pour les entreprises
- **Où utilisé** : `src/app/page.tsx`

#### **HireStudentsSection.tsx**
- **Description** : Section "Hire PaniTech Students"
- **Où utilisé** : `src/app/page.tsx`

#### **NewsletterSection.tsx**
- **Description** : Section inscription newsletter
- **Où utilisé** : `src/app/page.tsx` et `src/app/courses/page.tsx`

---

### 3. Composants Courses (`src/features/courses/components/`)

#### **CoursesBanner.tsx**
- **Description** : Bannière principale de la page cours
- **Fonctionnalités** :
  - Titre du cours
  - Badges (Best Seller, Category, Level, Status)
  - Description
- **Où utilisé** : `src/app/courses/page.tsx`

#### **CourseHeaderSection.tsx**
- **Description** : En-tête de la page de détail d'un cours
- **Où utilisé** : `src/app/courses/[id]/page.tsx`

#### **CourseInfoSidebar.tsx**
- **Description** : Sidebar avec informations du cours (prix, durée, etc.)
- **Où utilisé** : `src/app/courses/[id]/page.tsx`

#### **CourseTabs.tsx**
- **Description** : Onglets de navigation (Overview, Curriculum, Reviews, etc.)
- **Où utilisé** : `src/app/courses/[id]/page.tsx`

#### **CourseTabContent.tsx**
- **Description** : Contenu des onglets
- **Où utilisé** : `src/app/courses/[id]/page.tsx`

#### **CourseDescriptionSection.tsx**
- **Description** : Section description du cours
- **Où utilisé** : `src/app/courses/page.tsx`

#### **CourseJobsSection.tsx**
- **Description** : Section des emplois liés au cours
- **Où utilisé** : `src/app/courses/page.tsx`

#### **CourseLearnSection.tsx**
- **Description** : Section "What you'll learn"
- **Fonctionnalités** :
  - Dégradé de fond (#155DFC → #57C5F7)
- **Où utilisé** : `src/app/courses/page.tsx`

#### **CourseRequirementsSection.tsx**
- **Description** : Section des prérequis
- **Fonctionnalités** :
  - Icônes checkmark avec couleur #57C5F7
  - Bordures transparentes avec bordure #57C5F7
- **Où utilisé** : `src/app/courses/page.tsx`

#### **CourseBatchesSection.tsx**
- **Description** : Section "Flexible batches for you"
- **Fonctionnalités** :
  - 3 onglets : Instructor-Led, Self Paced Training, Corporate Training
  - Styles conditionnels pour les onglets actifs
- **Où utilisé** : `src/app/courses/page.tsx`

#### **CoursePathSection.tsx**
- **Description** : Section "Path to career"
- **Où utilisé** : `src/app/courses/page.tsx`

#### **CourseFAQSection.tsx**
- **Description** : Section FAQ spécifique au cours
- **Où utilisé** : `src/app/courses/page.tsx`

#### **CourseCertificatesSection.tsx**
- **Description** : Section des certificats disponibles
- **Où utilisé** : `src/app/courses/page.tsx`

#### **CourseEarnCertificateSection.tsx**
- **Description** : Section "Earn Certificate"
- **Où utilisé** : `src/app/courses/page.tsx`

#### **CourseCurriculumSection.tsx**
- **Description** : Section curriculum du cours
- **Où utilisé** : `src/app/courses/page.tsx`

#### **CourseReviewsSection.tsx**
- **Description** : Section avis sur le cours
- **Où utilisé** : `src/app/courses/page.tsx`

#### **CourseSuccessStoriesSection.tsx**
- **Description** : Section histoires de succès
- **Où utilisé** : `src/app/courses/page.tsx`

#### **CourseCard.tsx**
- **Description** : Carte de cours réutilisable
- **Où utilisé** : Dans les sections de liste de cours

#### **ContainerBackground.tsx**
- **Description** : Conteneur avec fond personnalisé
- **Où utilisé** : Diverses sections

---

### 4. Composants Bootcamp (`src/features/bootcamp/components/`)

#### **BootcampBanner.tsx**
- **Description** : Bannière du bootcamp
- **Où utilisé** : `src/app/bootcamp/page.tsx`

#### **BootcampHeaderSection.tsx**
- **Description** : En-tête avec titre, description et métriques
- **Où utilisé** : `src/app/bootcamp/page.tsx`

#### **BootcampInfoSidebar.tsx**
- **Description** : Sidebar avec prix et informations
- **Fonctionnalités** :
  - Prix avec font Poppins, SemiBold, 37.08px
  - Texte "(one-time purchase)" avec couleur #4B556366, Medium, 21.08px
- **Où utilisé** : `src/app/bootcamp/page.tsx`

#### **BootcampMediaSection.tsx**
- **Description** : Section média (image/vidéo)
- **Où utilisé** : `src/app/bootcamp/page.tsx`

#### **BootcampTabs.tsx**
- **Description** : Onglets de navigation pour le bootcamp
- **Où utilisé** : `src/app/bootcamp/page.tsx`

#### **BootcampTabContent.tsx**
- **Description** : Contenu des onglets
- **Où utilisé** : `src/app/bootcamp/page.tsx`

#### **BootcampDetails.tsx**
- **Description** : Détails du bootcamp
- **Où utilisé** : Dans les onglets

#### **BootcampRegistrationForm.tsx**
- **Description** : Formulaire d'inscription au bootcamp
- **Où utilisé** : Dans les onglets

#### **BootcampCTASection.tsx**
- **Description** : Section Call-to-Action
- **Fonctionnalités** :
  - Image de fond
  - Bouton "View All Courses & Start learning" avec fond #57C5F7
- **Où utilisé** : `src/app/bootcamp/page.tsx` (en bas de page)

---

## 🔄 Flux d'Appel des Composants

### Page d'Accueil (`src/app/page.tsx`)

```
HomePage
├── Hero
├── TopRatedCourses
├── CourseBundles
├── NewestCourses
├── InstructorLeadCourses
├── BootcampSection
├── Frame107Section
├── PartnersSection
├── WhyChooseSection
├── TestimonialsSection
├── ReviewsSection
├── FAQSection
├── BusinessSection
├── HireStudentsSection
└── NewsletterSection
```

### Page Cours (`src/app/courses/page.tsx`)

```
CoursesPage
├── CoursesBanner
├── CourseDescriptionSection
├── CourseJobsSection
├── CourseLearnSection
├── CourseRequirementsSection
├── CourseBatchesSection
├── CoursePathSection
├── CourseFAQSection
├── CourseCertificatesSection
├── CourseEarnCertificateSection
├── CourseCurriculumSection
├── CourseReviewsSection
├── CourseSuccessStoriesSection
└── NewsletterSection
```

### Page Détail Cours (`src/app/courses/[id]/page.tsx`)

```
CourseDetailPage
├── fetchCourse(id) [Action]
└── CourseHeaderSection
    └── CourseTabs
        └── CourseTabContent
    └── CourseInfoSidebar
```

### Page Bootcamp (`src/app/bootcamp/page.tsx`)

```
BootcampPage
├── fetchBootcamp(1) [Action]
├── BootcampMediaSection
├── BootcampInfoSidebar
├── BootcampHeaderSection
├── BootcampTabs
│   └── BootcampTabContent
│       ├── BootcampDetails
│       └── BootcampRegistrationForm
└── BootcampCTASection
```

### Layout Global (`src/app/layout.tsx`)

```
RootLayout
├── TopHeader
├── Header
├── {children} (Pages)
└── Footer
```

---

## 🎨 Styles et Thème

### Couleurs Principales

- **Bleu principal** : `#57C5F7`
- **Bleu foncé** : `#005C86`
- **Bleu gradient** : `#155DFC`
- **Gris texte** : `#4B556366`
- **Noir texte** : `#0F172B`

### Dégradés Utilisés

1. **PartnersSection & Footer** : `linear-gradient(to bottom, #57C5F7, #005C86)`
2. **CourseLearnSection** : `linear-gradient(to bottom, #155DFC, #57C5F7)`

### Typographie

- **Font principale** : Arial (pour certains titres)
- **Font Poppins** : Utilisée pour les prix (SemiBold, 37.08px)

---

## 🔧 Actions et API

### Actions Home (`src/features/home/actions/`)

#### **getHeroData.ts**
- Récupère les données pour la section Hero

### Actions Courses (`src/features/courses/actions/`)

#### **fetchCourses.ts**
- Récupère la liste de tous les cours
- Retourne : `Promise<Course[]>`

#### **fetchCourse.ts**
- Récupère un cours spécifique par ID
- Paramètres : `courseId: number`
- Retourne : `Promise<Course | null>`

### Actions Bootcamp (`src/features/bootcamp/actions/`)

#### **fetchBootcamp.ts**
- Récupère un bootcamp spécifique par ID
- Paramètres : `bootcampId: number`
- Retourne : `Promise<Bootcamp | null>`
- Fonction : `fetchAllBootcamps()` pour récupérer tous les bootcamps

#### **registerBootcamp.ts**
- Enregistre un utilisateur à un bootcamp
- Paramètres : `registration: BootcampRegistration`
- Retourne : `Promise<BootcampRegistration>`

### Client API (`src/lib/apiClient.ts`)

#### **ApiClient**
- Classe pour gérer les appels API
- Méthodes :
  - `get<T>(endpoint, options?)` : Requête GET
  - `post<T>(endpoint, data?, options?)` : Requête POST
  - `put<T>(endpoint, data?, options?)` : Requête PUT
  - `delete<T>(endpoint, options?)` : Requête DELETE
- Instance par défaut : `apiClient`

---

## 📝 Types TypeScript

### Course (`src/types/course.ts`)

```typescript
interface Course {
  id: number
  title: string
  description: string
  duration: string
  level: 'Débutant' | 'Intermédiaire' | 'Avancé' | 'Intermediate' | 'Advanced' | 'Beginner'
  instructor?: string
  price?: number
  thumbnail?: string
  backgroundImage?: string
  bestSeller?: boolean
  category?: string
  status?: 'Enrolling Now' | 'Starting Soon' | 'Full'
  rating?: number
  reviews?: number
  students?: number
  certificateIncluded?: boolean
}
```

### Bootcamp (`src/types/bootcamp.ts`)

```typescript
interface Bootcamp {
  id: number
  title: string
  description: string
  duration: string
  startDate: string
  endDate: string
  price: number
  maxParticipants: number
  currentParticipants: number
  status: 'upcoming' | 'ongoing' | 'completed'
  image?: string
  videoUrl?: string
  level?: 'beginner' | 'intermediate' | 'advanced'
  rating?: number
  // ... autres propriétés
}
```

---

## 🚀 Scripts Disponibles

```bash
# Développement
npm run dev          # Lance le serveur de développement

# Production
npm run build        # Compile l'application pour la production
npm run start        # Lance le serveur de production

# Qualité
npm run lint         # Vérifie le code avec ESLint
```

---

## 📦 Exports et Index

### Exports Home (`src/features/home/index.ts`)
Exporte tous les composants et actions de la feature home.

### Exports Courses (`src/features/courses/index.ts`)
Exporte tous les composants et actions de la feature courses.

### Exports Bootcamp (`src/features/bootcamp/index.ts`)
Exporte tous les composants et actions de la feature bootcamp.

---

## 🔗 Liens et Navigation

### Routes Principales

- `/` : Page d'accueil
- `/courses` : Liste des cours
- `/courses/[id]` : Détail d'un cours
- `/bootcamp` : Page bootcamp

### Navigation dans Header

- Home → `/`
- Courses → `/courses`
- Bootcamp → `/bootcamp`
- Community → `#` (à implémenter)
- Subscription → `#` (à implémenter)

---

## 📱 Responsive Design

L'application utilise Tailwind CSS avec des breakpoints :
- `sm:` : 640px
- `md:` : 768px
- `lg:` : 1024px
- `xl:` : 1280px

Les composants sont conçus pour être responsive, avec des adaptations spécifiques pour mobile et desktop.

---

## 🎯 Points Clés de Fonctionnement

1. **Next.js App Router** : Utilisation du nouveau système de routing de Next.js 14
2. **Server Components** : La plupart des pages sont des Server Components (async)
3. **Client Components** : Composants interactifs marqués avec `'use client'`
4. **TypeScript** : Typage strict pour une meilleure maintenabilité
5. **Tailwind CSS** : Styling avec classes utilitaires
6. **FontAwesome** : Icônes SVG via React FontAwesome
7. **Image Optimization** : Utilisation de `next/image` pour l'optimisation des images

---

## 📄 Notes Importantes

- Les données sont actuellement mockées dans les actions
- L'API client est configuré mais nécessite une vraie API backend
- Les images sont stockées dans `/public/assets/` et `/public/images/`
- Le logo est dans `/public/logo.jpg`
- Les couleurs principales sont définies via inline styles pour certaines sections

---

*Documentation générée le : $(date)*
