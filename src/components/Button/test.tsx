import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Button from '.'

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    const { container } = renderWithTheme(<Button>Show</Button>)

    expect(screen.getByRole('button', { name: /Show/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the small size', () => {
    renderWithTheme(<Button size="small">Show</Button>)

    expect(screen.getByRole('button', { name: /Show/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem'
    })
  })

  it('should render the large size', () => {
    renderWithTheme(<Button size="large">Show</Button>)

    expect(screen.getByRole('button', { name: /Show/i })).toHaveStyle({
      height: '5rem',
      padding: '0.8rem 4.8rem',
      'font-size': '1.6rem'
    })
  })

  it('should render a fullWidth version', () => {
    renderWithTheme(<Button fullWidth>Show</Button>)

    expect(screen.getByRole('button', { name: /Show/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should render a disabled Button', () => {
    renderWithTheme(<Button disabled>Show</Button>)

    expect(screen.getByRole('button', { name: /Show/i })).toHaveStyleRule(
      'cursor',
      'not-allowed',
      {
        modifier: ':disabled'
      }
    )
  })

  it('should render Button as a link', () => {
    renderWithTheme(
      <Button as="a" href="/link">
        Show
      </Button>
    )

    expect(screen.getByRole('link', { name: /Show/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })
})
