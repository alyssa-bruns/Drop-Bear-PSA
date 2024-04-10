import { useQuery } from '@tanstack/react-query'
import {
  getAllSightings,
  getSightingById,
  getSightingsByLocation,
} from '../apis/apiClient'

export function useGetAllSightings() {
  return useQuery({
    queryKey: ['sightings'],
    queryFn: async () => getAllSightings(),
  })
}

export function useGetSightingById(id: number) {
  return useQuery({
    queryKey: ['sighting', id],
    queryFn: async () => getSightingById(id),
  })
}

export function useGetSightingsByLocation(location: string) {
  return useQuery({
    queryKey: ['sightings', location],
    queryFn: async () => getSightingsByLocation(location),
  })
}
