import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import filterItemsMock from 'components/ExploreSidebar/mock'
import jobsMock from 'templates/Jobs/mock'

import Jobs from '.'

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

jest.mock('components/JobCard', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock JobCard" />
  }
}))

describe('<Jobs />', () => {
  it('should render sections', () => {
    renderWithTheme(<Jobs filterItems={filterItemsMock} jobs={[jobsMock[0]]} />)

    expect(screen.getByTestId('Mock ExploreSidebar')).toBeInTheDocument()

    expect(screen.getByTestId('Mock JobCard')).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /carregar mais/i })
    ).toBeInTheDocument()
  })
})
