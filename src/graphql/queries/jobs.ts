import { gql } from '@apollo/client'

export const QUERY_JOBS = gql`
  query QueryJobs($limit: Int!) {
    getJobs(limit: $limit) {
      id
      title
      html_url
      created_at
      labels {
        node_id
        name
        color
      }
    }
  }
`
