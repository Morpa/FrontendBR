import { screen } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'

import { renderWithTheme } from 'utils/tests/helpers'

import filterItemsMock from 'components/ExploreSidebar/mock'

import Jobs from '.'
import { jobsMock } from './mock'

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('components/ExploreSidebar', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock ExploreSidebar">{children}</div>
  }
}))

describe('<Jobs />', () => {
  it('should render loading when starting template', async () => {
    renderWithTheme(
      <MockedProvider mocks={[]} addTypename={false}>
        <Jobs filterItems={filterItemsMock} />
      </MockedProvider>
    )

    expect(screen.getByText(/loading.../i)).toBeInTheDocument()
  })

  it('should render sections', async () => {
    renderWithTheme(
      <MockedProvider mocks={[jobsMock]} addTypename={false}>
        <Jobs filterItems={filterItemsMock} />
      </MockedProvider>
    )

    expect(await screen.findByTestId('Mock ExploreSidebar')).toBeInTheDocument()

    expect(await screen.findByText(/job/i)).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /carregar mais/i })
    ).toBeInTheDocument()
  })
})
