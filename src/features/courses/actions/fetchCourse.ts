'use server'

import { Course } from '@/types/course'

export async function fetchCourse(id: number): Promise<Course | null> {
  // Simulation d'un appel API ou récupération depuis une base de données
  // Dans un vrai projet, cela pourrait être un appel à une API externe
  
  const courses: Course[] = [
    {
      id: 1,
      title: 'CompTIA Security+ 701 Training | CompTIA Security+ Certification',
      description: 'Master modern web development from scratch. Learn HTML, CSS, JavaScript, React, Node.js, MongoDB, and deploy real-world projects.',
      duration: '10 heures',
      level: 'Intermediate',
      instructor: 'John Doe',
      price: 99,
      thumbnail: '/assets/react-course.jpg',
      backgroundImage: '/images/Container.png',
      bestSeller: true,
      category: 'Web Development',
      status: 'Enrolling Now',
      rating: 4.8,
      reviews: 2847,
      students: 12458,
      certificateIncluded: true,
    },
    {
      id: 2,
      title: 'Next.js Avancé',
      description: 'Maîtrisez Next.js avec Server Actions et App Router.',
      duration: '15 heures',
      level: 'Intermédiaire',
      instructor: 'Jane Smith',
      price: 149,
      thumbnail: '/assets/react-course.jpg',
      backgroundImage: '/images/Container.png',
      bestSeller: false,
      category: 'Web Development',
      status: 'Enrolling Now',
      rating: 4.9,
      reviews: 1200,
      students: 8500,
      certificateIncluded: true,
    },
    {
      id: 3,
      title: 'TypeScript pour Développeurs',
      description: 'Découvrez TypeScript et améliorez la qualité de votre code.',
      duration: '12 heures',
      level: 'Intermédiaire',
      instructor: 'Bob Johnson',
      price: 79,
      thumbnail: '/assets/react-course.jpg',
      backgroundImage: '/images/Container.png',
      bestSeller: true,
      category: 'Programming',
      status: 'Enrolling Now',
      rating: 4.7,
      reviews: 950,
      students: 6200,
      certificateIncluded: true,
    },
  ]

  const course = courses.find(c => c.id === id)
  return course || null
}
