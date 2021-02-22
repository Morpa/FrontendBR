import { screen } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import userEvent from '@testing-library/user-event'

import { renderWithTheme } from 'utils/tests/helpers'
import apolloCache from 'utils/apolloCache'

import filterItemsMock from 'components/ExploreSidebar/mock'

import Jobs from '.'
import { fetchMoreJobs, jobsMock } from './mock'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const push = jest.fn()

useRouter.mockImplementation(() => ({
  push,
  query: '',
  asPath: '',
  route: '/'
}))

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

describe('<Jobs />', () => {
  it('should render sections', async () => {
    renderWithTheme(
      <MockedProvider mocks={[jobsMock]} addTypename={false}>
        <Jobs filterItems={filterItemsMock} />
      </MockedProvider>
    )

    expect(await screen.findByText(/job/i)).toBeInTheDocument()

    expect(
      await screen.findByRole('button', { name: /carregar mais/i })
    ).toBeInTheDocument()
  })

  it('should render more jobs when show more is clicked', async () => {
    renderWithTheme(
      <MockedProvider mocks={[jobsMock, fetchMoreJobs]} cache={apolloCache}>
        <Jobs filterItems={filterItemsMock} />
      </MockedProvider>
    )

    expect(await screen.findByText(/job/i)).toBeInTheDocument()

    userEvent.click(
      await screen.findByRole('button', { name: /carregar mais/i })
    )

    expect(await screen.findByText(/more job/i)).toBeInTheDocument()
  })

  it('should change push router when selecting a filter', async () => {
    renderWithTheme(
      <MockedProvider mocks={[jobsMock, fetchMoreJobs]} cache={apolloCache}>
        <Jobs filterItems={filterItemsMock} />
      </MockedProvider>
    )

    userEvent.click(await screen.findByRole('checkbox', { name: /clt/i }))

    expect(push).toHaveBeenCalledWith({
      pathname: '/jobs',
      query: { filter: ['clt'] }
    })
  })
})
