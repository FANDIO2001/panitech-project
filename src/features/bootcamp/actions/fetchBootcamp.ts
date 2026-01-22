'use server'

import { Bootcamp } from '@/types/bootcamp'

export async function fetchBootcamp(id: number): Promise<Bootcamp | null> {
  // Simulation d'un appel API
  // Dans un vrai projet, cela ferait un appel à une API ou base de données
  
  await new Promise((resolve) => setTimeout(resolve, 500))

  // Données de démonstration
  const bootcamp: Bootcamp = {
    id: id,
    title: 'Ultimate CEH Certified Ethical Hacker Cert Guide',
    description: 'Comprehensive CEH training with hands-on labs, practice tests, and full coverage of CEH exam domains to prepare you for certification and practical skills.',
    duration: '10h++',
    startDate: '2024-03-01',
    endDate: '2024-05-24',
    price: 99,
    maxParticipants: 30,
    currentParticipants: 18,
    status: 'upcoming',
    image: '/assets/bootcamp-course-4.png',
    isNew: true,
    lastUpdate: '2024-11-14',
    students: '99+',
    language: 'Eng',
    level: 'beginner',
    expiry: 'Lifetime',
    certificate: true,
    provider: 'Pani Tech Academy',
    rating: 4.8,
    courseType: 'Certificate Course',
    overviewText: 'A complete, hands-on CEH training and exam-prep course that teaches commercial-grade hacking tools, methodologies, and countermeasures. Covers reconnaissance, scanning, system & web app hacking, wireless, IoT, cloud and cryptography, plus lab exercises and practice exams to prepare you for the CEH certification (v12/v13) and CEH Practical.',
    faqs: [
      { question: 'What does this CEH courses cover?' },
      { question: 'Which CEH version does this course map to?' },
      { question: 'Do I need prior experience to take this course?' },
      { question: 'How long is CEH certification valid and how do I maintain it?' },
      { question: 'Is hands-on practice Include / Is there a practical exam?' },
    ],
    curriculum: [
      'Semaine 1-2: Fondamentaux du Web (HTML, CSS, JavaScript)',
      'Semaine 3-4: React et Next.js - Développement Frontend',
      'Semaine 5-6: Node.js et Express - Développement Backend',
      'Semaine 7-8: Bases de données (PostgreSQL, MongoDB)',
      'Semaine 9-10: APIs REST et GraphQL',
      'Semaine 11-12: Déploiement, DevOps et Projet Final',
    ],
  }

  return bootcamp
}

export async function fetchAllBootcamps(): Promise<Bootcamp[]> {
  // Simulation d'un appel API
  await new Promise((resolve) => setTimeout(resolve, 500))

  return [
    {
      id: 1,
      title: 'Bootcamp Intensif Développement Web Full Stack',
      description: 'Un bootcamp complet de 12 semaines pour maîtriser le développement web moderne.',
      duration: '12 semaines',
      startDate: '2024-03-01',
      endDate: '2024-05-24',
      price: 2999,
      maxParticipants: 30,
      currentParticipants: 18,
      status: 'upcoming',
    },
    {
      id: 2,
      title: 'Bootcamp Design UI/UX',
      description: 'Formation intensive en design d\'interface et expérience utilisateur.',
      duration: '8 semaines',
      startDate: '2024-04-15',
      endDate: '2024-06-07',
      price: 2499,
      maxParticipants: 25,
      currentParticipants: 12,
      status: 'upcoming',
    },
    {
      id: 3,
      title: 'Bootcamp Data Science & Machine Learning',
      description: 'Maîtrisez la science des données et l\'apprentissage automatique.',
      duration: '16 semaines',
      startDate: '2024-02-01',
      endDate: '2024-05-24',
      price: 3999,
      maxParticipants: 20,
      currentParticipants: 20,
      status: 'ongoing',
    },
  ]
}
