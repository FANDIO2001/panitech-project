# PaniTech Academy

Next.js project with TypeScript, Server Actions, and Tailwind CSS - Feature-Based Architecture

## 🏗️ Project Architecture

```
panitechacademy/
│
├── public/                        # Static files (images, icons, SVG, etc.)
│   ├── assets/                    # Assets exported from Figma
│   └── favicon.ico
│
├── src/
│   ├── app/                       # Next.js pages and routing (App Router)
│   │   ├── layout.tsx             # Global layout (Header/Footer)
│   │   ├── page.tsx               # Home page
│   │   ├── courses/               # Courses page
│   │   │   └── page.tsx
│   │   ├── bootcamp/              # Bootcamp page
│   │   │   └── page.tsx
│   │   └── globals.css            # Global styles (includes Tailwind)
│   │
│   ├── components/                # Reusable generic components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Button.tsx
│   │   └── Card.tsx
│   │
│   ├── features/                  # Specific features
│   │   ├── home/
│   │   │   ├── components/        # Components specific to Home
│   │   │   │   └── Hero.tsx
│   │   │   ├── actions/           # Server Actions
│   │   │   │   └── getHeroData.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── courses/
│   │   │   ├── components/        # Components specific to Courses
│   │   │   │   └── CourseCard.tsx
│   │   │   ├── actions/           # Server Actions
│   │   │   │   └── fetchCourses.ts
│   │   │   └── index.ts
│   │   │
│   │   └── bootcamp/
│   │       ├── components/        # Components specific to Bootcamp
│   │       │   └── BootcampBanner.tsx
│   │       ├── actions/           # Server Actions
│   │       │   └── registerBootcamp.ts
│   │       └── index.ts
│   │
│   ├── lib/                       # Global utility functions
│   │   └── apiClient.ts
│   │
│   ├── styles/                    # Tailwind config and custom styles
│   │   └── tailwind.config.ts
│   │
│   └── types/                     # TypeScript types and interfaces
│       ├── course.ts
│       ├── bootcamp.ts
│       └── user.ts
│
├── .env.local                     # Environment variables (API, keys, etc.)
├── tailwind.config.js              # Tailwind configuration
├── postcss.config.js               # PostCSS configuration
├── next.config.js                  # Next.js configuration
├── tsconfig.json                   # TypeScript configuration
└── package.json                    # Dependencies and scripts
```

## 🚀 Installation

```bash
npm install
```

## 📝 Available scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint

## 🔧 Technologies used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Static typing
- **Tailwind CSS** - Utility CSS framework
- **Server Actions** - Built-in server actions (hybrid approach)

## 📚 Feature-Based Structure

The project follows a **feature-based** architecture where each feature is isolated in its own folder with:
- Its specific components
- Its Server Actions
- Its types (if necessary)
- An `index.ts` file for exports

### Advantages

- ✅ Clear and modular organization
- ✅ Facilitates maintenance and scalability
- ✅ Reusability of generic components
- ✅ Separation of concerns

## 🎯 Server Actions

Server Actions allow you to execute server-side code directly from React components. See the files in `src/features/*/actions/` for examples.

### Features

- ✅ Full TypeScript typing
- ✅ Server-side validation
- ✅ State management with `useTransition`
- ✅ Hybrid approach (client + server)

## 📦 Configuration

### Environment variables

Create a `.env.local` file at the root of the project:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

### Tailwind CSS

The Tailwind configuration is in `tailwind.config.js`. Custom styles can be added in `src/styles/tailwind.config.ts`.

## 🎨 Components

### Generic components

Reusable components are in `src/components/`:
- `Header` - Navigation header
- `Footer` - Footer
- `Button` - Button with variants
- `Card` - Content card

### Feature components

Feature-specific components are located in `src/features/[feature]/components/`.

## 🔄 Next steps

1. Add a database (Prisma, Supabase, etc.)
2. Implement authentication
3. Add tests (Jest, Testing Library)
4. Set up CI/CD
5. Add animations and transitions
