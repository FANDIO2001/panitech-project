export interface User {
  id: number
  email: string
  name: string
  avatar?: string
  role: 'student' | 'instructor' | 'admin'
  createdAt: string
  updatedAt: string
}

export interface UserProfile extends User {
  bio?: string
  phone?: string
  location?: string
  website?: string
}

export interface AuthResponse {
  user: User
  token: string
}
