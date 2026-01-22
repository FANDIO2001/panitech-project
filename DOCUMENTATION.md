# PaniTech Academy Documentation

## 📦 Dependencies List

### Main Dependencies (dependencies)

| Package | Version | Description |
|---------|---------|-------------|
| `next` | ^14.2.0 | React framework for full-stack applications |
| `react` | ^18.3.1 | React UI library |
| `react-dom` | ^18.3.1 | React DOM rendering |
| `@fortawesome/fontawesome-svg-core` | ^7.1.0 | FontAwesome core for SVG icons |
| `@fortawesome/free-solid-svg-icons` | ^7.1.0 | Free solid FontAwesome icons |
| `@fortawesome/react-fontawesome` | ^3.1.1 | React components for FontAwesome |

### Development Dependencies (devDependencies)

| Package | Version | Description |
|---------|---------|-------------|
| `typescript` | ^5.4.5 | Typed programming language |
| `tailwindcss` | ^3.4.1 | Utility-first CSS framework |
| `postcss` | ^8.4.35 | CSS transformation tool |
| `autoprefixer` | ^10.4.18 | PostCSS plugin for CSS prefixes |
| `eslint` | ^8.57.0 | JavaScript/TypeScript linter |
| `eslint-config-next` | ^14.2.0 | ESLint configuration for Next.js |
| `@types/node` | ^20.12.7 | TypeScript types for Node.js |
| `@types/react` | ^18.3.1 | TypeScript types for React |
| `@types/react-dom` | ^18.3.0 | TypeScript types for React DOM |
| `pdfkit` | ^0.14.0 | PDF generation (currently unused) |

---

## 🏗️ Project Architecture

### Folder Structure

```
panitechacademy/
├── src/
│   ├── app/                    # Next.js Pages (App Router)
│   │   ├── page.tsx            # Home page
│   │   ├── layout.tsx         # Root layout
│   │   ├── courses/
│   │   │   ├── page.tsx       # Courses list
│   │   │   └── [id]/
│   │   │       └── page.tsx   # Course detail
│   │   └── bootcamp/
│   │       └── page.tsx       # Bootcamp page
│   ├── components/             # Reusable components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── TopHeader.tsx
│   ├── features/              # Features organized by domain
│   │   ├── home/              # Home page components
│   │   ├── courses/           # Course components
│   │   └── bootcamp/          # Bootcamp components
│   ├── lib/                   # Utilities and clients
│   │   └── apiClient.ts       # Centralized API client
│   └── types/                 # TypeScript types
│       ├── course.ts
│       ├── bootcamp.ts
│       └── user.ts
└── public/                    # Static assets
```

---

## 🧩 Components and Their Usage

### 1. Global Components (`src/components/`)

#### **Button.tsx**
- **Description**: Reusable button component with variants
- **Props**:
  - `variant`: 'primary' | 'secondary' | 'outline' (default: 'primary')
  - `children`: Button content
  - `className`: Additional CSS classes
  - All standard HTML button props
- **Usage**:
  ```tsx
  <Button variant="primary" className="px-8 py-4">
    Click here
  </Button>
  ```
- **Where used**: Throughout the application (Hero, Footer, Sections, etc.)

#### **Card.tsx**
- **Description**: Card container with shadow and padding
- **Props**:
  - `children`: Card content
  - `className`: Additional CSS classes
- **Usage**:
  ```tsx
  <Card className="mb-4">
    Card content
  </Card>
  ```

#### **Header.tsx**
- **Description**: Main header with navigation, search, cart
- **Features**:
  - Responsive navigation (mobile/desktop)
  - Dropdown menu for courses
  - Search bar
  - Language selector (FR/EN/ES)
  - Cart and favorites icons
- **Where used**: `src/app/layout.tsx` (all pages)

#### **Footer.tsx**
- **Description**: Footer with links and social media
- **Features**:
  - 4 link columns (Solutions, Company, Resources, Legal)
  - Social media icons (Facebook, Twitter, LinkedIn, Instagram)
  - Background gradient (#57C5F7 → #005C86)
- **Where used**: `src/app/layout.tsx` (all pages)

#### **TopHeader.tsx**
- **Description**: Top header (information bar)
- **Where used**: `src/app/layout.tsx`

---

### 2. Home Components (`src/features/home/components/`)

#### **Hero.tsx**
- **Description**: Hero section of the home page
- **Features**:
  - Background image with overlay
  - Main title
  - Search bar
  - "Browse Courses" button (background #57C5F7)
- **Where used**: `src/app/page.tsx` (first section)

#### **TopRatedCourses.tsx**
- **Description**: Displays top-rated courses
- **Where used**: `src/app/page.tsx`

#### **CourseBundles.tsx**
- **Description**: Displays course bundles
- **Where used**: `src/app/page.tsx`

#### **NewestCourses.tsx**
- **Description**: Displays newest courses
- **Where used**: `src/app/page.tsx`

#### **InstructorLeadCourses.tsx**
- **Description**: Displays instructor-led courses
- **Where used**: `src/app/page.tsx`

#### **BootcampSection.tsx**
- **Description**: Section presenting bootcamps
- **Where used**: `src/app/page.tsx`

#### **Frame107Section.tsx**
- **Description**: Frame 107 section (specific content)
- **Where used**: `src/app/page.tsx`

#### **PartnersSection.tsx**
- **Description**: "Our Student Work at these companies" section
- **Features**:
  - Background gradient (#57C5F7 → #005C86)
  - 4 clickable partner logos (Microsoft, Adobe, Certified Agency, AWS)
  - "Strategy" text overlay
- **Where used**: `src/app/page.tsx`

#### **WhyChooseSection.tsx**
- **Description**: "Why choose us" section
- **Where used**: `src/app/page.tsx`

#### **TestimonialsSection.tsx**
- **Description**: Testimonials section
- **Where used**: `src/app/page.tsx`

#### **ReviewsSection.tsx**
- **Description**: Customer reviews section
- **Where used**: `src/app/page.tsx`

#### **FAQSection.tsx**
- **Description**: FAQ section (Frequently Asked Questions)
- **Where used**: `src/app/page.tsx`

#### **BusinessSection.tsx**
- **Description**: Section for businesses
- **Where used**: `src/app/page.tsx`

#### **HireStudentsSection.tsx**
- **Description**: "Hire PaniTech Students" section
- **Where used**: `src/app/page.tsx`

#### **NewsletterSection.tsx**
- **Description**: Newsletter subscription section
- **Where used**: `src/app/page.tsx` and `src/app/courses/page.tsx`

---

### 3. Course Components (`src/features/courses/components/`)

#### **CoursesBanner.tsx**
- **Description**: Main banner for the courses page
- **Features**:
  - Course title
  - Badges (Best Seller, Category, Level, Status)
  - Description
- **Where used**: `src/app/courses/page.tsx`

#### **CourseHeaderSection.tsx**
- **Description**: Header for course detail page
- **Where used**: `src/app/courses/[id]/page.tsx`

#### **CourseInfoSidebar.tsx**
- **Description**: Sidebar with course information (price, duration, etc.)
- **Where used**: `src/app/courses/[id]/page.tsx`

#### **CourseTabs.tsx**
- **Description**: Navigation tabs (Overview, Curriculum, Reviews, etc.)
- **Where used**: `src/app/courses/[id]/page.tsx`

#### **CourseTabContent.tsx**
- **Description**: Tab content
- **Where used**: `src/app/courses/[id]/page.tsx`

#### **CourseDescriptionSection.tsx**
- **Description**: Course description section
- **Where used**: `src/app/courses/page.tsx`

#### **CourseJobsSection.tsx**
- **Description**: Section for jobs related to the course
- **Where used**: `src/app/courses/page.tsx`

#### **CourseLearnSection.tsx**
- **Description**: "What you'll learn" section
- **Features**:
  - Background gradient (#155DFC → #57C5F7)
- **Where used**: `src/app/courses/page.tsx`

#### **CourseRequirementsSection.tsx**
- **Description**: Prerequisites section
- **Features**:
  - Checkmark icons with color #57C5F7
  - Transparent borders with #57C5F7 border
- **Where used**: `src/app/courses/page.tsx`

#### **CourseBatchesSection.tsx**
- **Description**: "Flexible batches for you" section
- **Features**:
  - 3 tabs: Instructor-Led, Self Paced Training, Corporate Training
  - Conditional styles for active tabs
- **Where used**: `src/app/courses/page.tsx`

#### **CoursePathSection.tsx**
- **Description**: "Path to career" section
- **Where used**: `src/app/courses/page.tsx`

#### **CourseFAQSection.tsx**
- **Description**: Course-specific FAQ section
- **Where used**: `src/app/courses/page.tsx`

#### **CourseCertificatesSection.tsx**
- **Description**: Available certificates section
- **Where used**: `src/app/courses/page.tsx`

#### **CourseEarnCertificateSection.tsx**
- **Description**: "Earn Certificate" section
- **Where used**: `src/app/courses/page.tsx`

#### **CourseCurriculumSection.tsx**
- **Description**: Course curriculum section
- **Where used**: `src/app/courses/page.tsx`

#### **CourseReviewsSection.tsx**
- **Description**: Course reviews section
- **Where used**: `src/app/courses/page.tsx`

#### **CourseSuccessStoriesSection.tsx**
- **Description**: Success stories section
- **Where used**: `src/app/courses/page.tsx`

#### **CourseCard.tsx**
- **Description**: Reusable course card
- **Where used**: In course list sections

#### **ContainerBackground.tsx**
- **Description**: Container with custom background
- **Where used**: Various sections

---

### 4. Bootcamp Components (`src/features/bootcamp/components/`)

#### **BootcampBanner.tsx**
- **Description**: Bootcamp banner
- **Where used**: `src/app/bootcamp/page.tsx`

#### **BootcampHeaderSection.tsx**
- **Description**: Header with title, description and metrics
- **Where used**: `src/app/bootcamp/page.tsx`

#### **BootcampInfoSidebar.tsx**
- **Description**: Sidebar with price and information
- **Features**:
  - Price with Poppins font, SemiBold, 37.08px
  - "(one-time purchase)" text with color #4B556366, Medium, 21.08px
- **Where used**: `src/app/bootcamp/page.tsx`

#### **BootcampMediaSection.tsx**
- **Description**: Media section (image/video)
- **Where used**: `src/app/bootcamp/page.tsx`

#### **BootcampTabs.tsx**
- **Description**: Navigation tabs for bootcamp
- **Where used**: `src/app/bootcamp/page.tsx`

#### **BootcampTabContent.tsx**
- **Description**: Tab content
- **Where used**: `src/app/bootcamp/page.tsx`

#### **BootcampDetails.tsx**
- **Description**: Bootcamp details
- **Where used**: In tabs

#### **BootcampRegistrationForm.tsx**
- **Description**: Bootcamp registration form
- **Where used**: In tabs

#### **BootcampCTASection.tsx**
- **Description**: Call-to-Action section
- **Features**:
  - Background image
  - "View All Courses & Start learning" button with background #57C5F7
- **Where used**: `src/app/bootcamp/page.tsx` (bottom of page)

---

## 🔄 Component Call Flow

### Home Page (`src/app/page.tsx`)

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

### Courses Page (`src/app/courses/page.tsx`)

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

### Course Detail Page (`src/app/courses/[id]/page.tsx`)

```
CourseDetailPage
├── fetchCourse(id) [Action]
└── CourseHeaderSection
    └── CourseTabs
        └── CourseTabContent
    └── CourseInfoSidebar
```

### Bootcamp Page (`src/app/bootcamp/page.tsx`)

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

### Global Layout (`src/app/layout.tsx`)

```
RootLayout
├── TopHeader
├── Header
├── {children} (Pages)
└── Footer
```

---

## 🎨 Styles and Theme

### Main Colors

- **Main blue**: `#57C5F7`
- **Dark blue**: `#005C86`
- **Gradient blue**: `#155DFC`
- **Text gray**: `#4B556366`
- **Text black**: `#0F172B`

### Used Gradients

1. **PartnersSection & Footer**: `linear-gradient(to bottom, #57C5F7, #005C86)`
2. **CourseLearnSection**: `linear-gradient(to bottom, #155DFC, #57C5F7)`

### Typography

- **Main font**: Arial (for some titles)
- **Poppins font**: Used for prices (SemiBold, 37.08px)

---

## 🔧 Actions and API

### Home Actions (`src/features/home/actions/`)

#### **getHeroData.ts**
- Retrieves data for the Hero section

### Course Actions (`src/features/courses/actions/`)

#### **fetchCourses.ts**
- Retrieves the list of all courses
- Returns: `Promise<Course[]>`

#### **fetchCourse.ts**
- Retrieves a specific course by ID
- Parameters: `courseId: number`
- Returns: `Promise<Course | null>`

### Bootcamp Actions (`src/features/bootcamp/actions/`)

#### **fetchBootcamp.ts**
- Retrieves a specific bootcamp by ID
- Parameters: `bootcampId: number`
- Returns: `Promise<Bootcamp | null>`
- Function: `fetchAllBootcamps()` to retrieve all bootcamps

#### **registerBootcamp.ts**
- Registers a user to a bootcamp
- Parameters: `registration: BootcampRegistration`
- Returns: `Promise<BootcampRegistration>`

### API Client (`src/lib/apiClient.ts`)

#### **ApiClient**
- Class to manage API calls
- Methods:
  - `get<T>(endpoint, options?)`: GET request
  - `post<T>(endpoint, data?, options?)`: POST request
  - `put<T>(endpoint, data?, options?)`: PUT request
  - `delete<T>(endpoint, options?)`: DELETE request
- Default instance: `apiClient`

---

## 📝 TypeScript Types

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
  // ... other properties
}
```

---

## 🚀 Available Scripts

```bash
# Development
npm run dev          # Starts the development server

# Production
npm run build        # Builds the application for production
npm run start        # Starts the production server

# Quality
npm run lint         # Checks code with ESLint
```

---

## 📦 Exports and Index

### Home Exports (`src/features/home/index.ts`)
Exports all components and actions from the home feature.

### Course Exports (`src/features/courses/index.ts`)
Exports all components and actions from the courses feature.

### Bootcamp Exports (`src/features/bootcamp/index.ts`)
Exports all components and actions from the bootcamp feature.

---

## 🔗 Links and Navigation

### Main Routes

- `/`: Home page
- `/courses`: Courses list
- `/courses/[id]`: Course detail
- `/bootcamp`: Bootcamp page

### Header Navigation

- Home → `/`
- Courses → `/courses`
- Bootcamp → `/bootcamp`
- Community → `#` (to be implemented)
- Subscription → `#` (to be implemented)

---

## 📱 Responsive Design

The application uses Tailwind CSS with breakpoints:
- `sm:`: 640px
- `md:`: 768px
- `lg:`: 1024px
- `xl:`: 1280px

Components are designed to be responsive, with specific adaptations for mobile and desktop.

---

## 🎯 Key Functionality Points

1. **Next.js App Router**: Uses Next.js 14's new routing system
2. **Server Components**: Most pages are Server Components (async)
3. **Client Components**: Interactive components marked with `'use client'`
4. **TypeScript**: Strict typing for better maintainability
5. **Tailwind CSS**: Styling with utility classes
6. **FontAwesome**: SVG icons via React FontAwesome
7. **Image Optimization**: Uses `next/image` for image optimization

---

## 📄 Important Notes

- Data is currently mocked in actions
- API client is configured but requires a real backend API
- Images are stored in `/public/assets/` and `/public/images/`
- Logo is in `/public/logo.jpg`
- Main colors are defined via inline styles for some sections

---
