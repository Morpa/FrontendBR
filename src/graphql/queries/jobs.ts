import { gql } from '@apollo/client'

export const QUERY_JOBS = gql`
  query QueryJobs($limit: Int!, $currentPage: Int!) {
    getJobs(limit: $limit, currentPage: $currentPage) {
      id
      title
      html_url
      created_at
      labels {
        name
        color
      }
    }
  }
`
