import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Main from '.'

const props = {
  title: 'title default',
  jobs: '344'
}

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Main {...props} />)

    expect(
      screen.getByRole('heading', {
        name: /title default/i
      })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /344/i })).toHaveAttribute(
      'href',
      '/jobs'
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
