import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Empty from '.'

const props = {
  title: 'A simple title',
  description: 'A simple description'
}

describe('<Empty />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Empty {...props} hasLink />)

    expect(
      screen.getByRole('img', {
        name: /Um computador com uma lupa a frente/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /a simple title/i })
    ).toBeInTheDocument()

    expect(screen.getByText(/a simple description/i)).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /voltar/i })).toHaveAttribute(
      'href',
      '/jobs'
    )

    expect(container.parentElement).toMatchSnapshot()
  })

  it('should not render link when hasLink is not passed', () => {
    renderWithTheme(<Empty {...props} />)

    expect(
      screen.queryByRole('link', { name: /voltar/i })
    ).not.toBeInTheDocument()
  })
})
