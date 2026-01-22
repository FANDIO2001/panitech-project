export interface Course {
  id: number
  title: string
  description: string
  duration: string
  level: 'Débutant' | 'Intermédiaire' | 'Avancé' | 'Intermediate' | 'Advanced' | 'Beginner'
  instructor?: string
  price?: number
  thumbnail?: string
  createdAt?: string
  updatedAt?: string
  // Nouvelles propriétés pour le header
  backgroundImage?: string
  bestSeller?: boolean
  category?: string
  status?: 'Enrolling Now' | 'Starting Soon' | 'Full'
  rating?: number
  reviews?: number
  students?: number
  certificateIncluded?: boolean
}

export interface CourseFilters {
  level?: Course['level']
  search?: string
  minPrice?: number
  maxPrice?: number
}
