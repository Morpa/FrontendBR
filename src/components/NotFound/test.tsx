import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import NotFound from '.'

describe('<NotFound />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<NotFound />)

    expect(
      screen.getByRole('img', { name: /Um cachorrinho dormindo/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /página não encontrada/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('link', { name: /Voltar página inicial/i })
    ).toHaveAttribute('href', '/')

    expect(container.firstChild).toMatchSnapshot()
  })
})
