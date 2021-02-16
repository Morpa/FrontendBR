import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'

import JobCard from '.'

const props = {
  title: '[CURITIBA-PR] Web Designer @ Grupo A Educação',
  labels: [
    { name: 'Pleno', color: '6c46ea' },
    { name: 'CLT', color: '7fe266' }
  ],
  created_at: '15-02-2021',
  html_url: 'https://github.com/frontendbr/vagas/issues/4297'
}

describe('<JobCard />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<JobCard {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(screen.getByText(props.labels[0].name)).toBeInTheDocument()

    expect(screen.getByText(props.labels[0].name)).toHaveStyle({
      backgroundColor: '#6c46ea'
    })

    expect(screen.getByText('Publicado em: 2021/02/15')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render div as link', () => {
    global.open = jest.fn()

    renderWithTheme(<JobCard {...props} />)

    userEvent.click(screen.getByRole('heading', { name: props.title }))

    expect(global.open).toBeCalled()
  })
})
