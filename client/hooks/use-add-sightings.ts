import { useMutation, useQueryClient } from '@tanstack/react-query'
import { NewSighting } from '../../models/sightings.ts'
import { addSighting } from '../apis/apiClient.ts'

export default function useAddSighting() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (newSighting: NewSighting) => addSighting(newSighting),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['sightings'] })
    },
  })
}
