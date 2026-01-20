'use server'

import { Course } from '@/types/course'

export async function fetchCourses(): Promise<Course[]> {
  // Simulation d'un appel API ou récupération depuis une base de données
  // Dans un vrai projet, cela pourrait être un appel à une API externe
  
  return [
    {
      id: 1,
      title: 'Introduction à React',
      description: 'Apprenez les bases de React et créez votre première application.',
      duration: '10 heures',
      level: 'Débutant',
    },
    {
      id: 2,
      title: 'Next.js Avancé',
      description: 'Maîtrisez Next.js avec Server Actions et App Router.',
      duration: '15 heures',
      level: 'Intermédiaire',
    },
    {
      id: 3,
      title: 'TypeScript pour Développeurs',
      description: 'Découvrez TypeScript et améliorez la qualité de votre code.',
      duration: '12 heures',
      level: 'Intermédiaire',
    },
  ]
}
