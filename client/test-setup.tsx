import { beforeEach, expect, vi } from 'vitest'
import { cleanup, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import * as matchers from '@testing-library/jest-dom/matchers'
import '@testing-library/jest-dom/vitest'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'
import routes from './router.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

beforeEach(cleanup)
expect.extend(matchers)

vi.mock('@react-three/drei')
vi.mock('@react-three/fiber')
vi.mock('@react-three/postprocessing')

export function renderRoute(location: string) {
  const router = createMemoryRouter(routes, {
    initialEntries: [location],
  })

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  })

  const user = userEvent.setup()
  const screen = render(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>,
  )
  return { user, ...screen }
}
