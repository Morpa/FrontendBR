import { gql } from '@apollo/client'

export const QUERY_LABELS = gql`
  query QueryLabels {
    getLabels {
      labels {
        name
      }
    }
  }
`
