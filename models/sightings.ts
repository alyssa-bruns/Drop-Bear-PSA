export interface Sighting {
  id: number
  display_name: string
  lat: number
  lon: number
  date: string
  time: string
  description: string
  email: string
  is_approved: boolean
}

export interface NewSighting {
  id: number
  display_name: string
  lat: number
  lon: number
  date: string
  time: string
  description: string
  email: string
}
