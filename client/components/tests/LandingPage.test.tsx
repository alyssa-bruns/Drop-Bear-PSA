// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { screen } from '@testing-library/react'

import { renderRoute } from '../../test-setup'

describe('<LandingPage />', () => {
  it('renders a button that has a <button> html tag and a class name', () => {
    renderRoute('/login')

    const button = screen.getByRole('button', { name: /Enter/ })
    expect(button).toContainHTML('button')
    expect.assertions(2)
  })
})
