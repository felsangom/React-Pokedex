import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../../app/app'

test('renders search field', () => {
  render(<App />)
  const searchField = screen.getByRole(/search/i)
  expect(searchField).toBeInTheDocument()
})
