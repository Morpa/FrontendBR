import { gql } from '@apollo/client'

export const QUERY_RATE_LIMIT = gql`
  query RateLimit {
    rateLimit {
      limit
      remaining
    }
  }
`
