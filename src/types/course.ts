export interface Course {
  id: number
  title: string
  description: string
  duration: string
  level: 'Débutant' | 'Intermédiaire' | 'Avancé'
  instructor?: string
  price?: number
  thumbnail?: string
  createdAt?: string
  updatedAt?: string
}

export interface CourseFilters {
  level?: Course['level']
  search?: string
  minPrice?: number
  maxPrice?: number
}
