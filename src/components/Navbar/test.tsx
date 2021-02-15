import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Navbar from '.'

describe('<Navbar />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Navbar />)

    expect(
      screen.getByRole('img', { name: /frontend-br/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
