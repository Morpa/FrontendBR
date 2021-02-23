import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import RateLimit from '.'

const props = {
  title: 'A simple title',
  description: 'A simple description'
}

describe('<RateLimit />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<RateLimit {...props} />)

    expect(
      screen.getByRole('img', {
        name: /Um computador com um triângulo vermelho sobre ele/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /a simple title/i })
    ).toBeInTheDocument()

    expect(screen.getByText(/a simple description/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
