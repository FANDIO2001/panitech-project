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
