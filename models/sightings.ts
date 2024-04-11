export interface Sighting {
  id: number
  location: string
  date: string
  time: string
  description: string
  email: string
  is_approved: boolean
}

export interface NewSighting {
  location: string
  date: string
  time: string
  description: string
  email: string
}
