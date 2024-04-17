// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { screen } from '@testing-library/react'

import { renderRoute } from '../../test-setup'

describe('<LandingPage />', () => {
  it('renders a link that has a class name', () => {
    renderRoute('/')

    const link = screen.getByRole('link', { name: /Enter/ })
    expect(link).toHaveClass('button')
    expect(link).toContainHTML('button')
  })
})
