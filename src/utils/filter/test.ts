import { parsedQueryStringToFilter } from '.'

const filterItems = [{ name: 'tag', type: 'checkbox' }]

const queryString = { label: ['Stale', 'Remoto'] }

describe('parsedQueryStringToFilter()', () => {
  it('should parse queryString to filter format', () => {
    const parsedQuery = parsedQueryStringToFilter({ queryString, filterItems })

    expect(parsedQuery).toStrictEqual({
      label: ['Stale', 'Remoto']
    })
  })
})
