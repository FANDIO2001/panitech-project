export interface Bootcamp {
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
  curriculum?: string[]
  // Nouvelles propriétés pour le design
  image?: string
  videoUrl?: string
  isNew?: boolean
  lastUpdate?: string
  students?: number | string
  language?: string
  level?: 'beginner' | 'intermediate' | 'advanced'
  expiry?: string
  certificate?: boolean
  provider?: string
  rating?: number
  courseType?: string
  overviewText?: string
  faqs?: { question: string; answer?: string }[]
}

export interface BootcampRegistration {
  bootcampId: number
  userId: number
  email: string
  name: string
  phone?: string
  registrationDate: string
  status: 'pending' | 'confirmed' | 'cancelled'
}
