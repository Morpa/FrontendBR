import { gql } from '@apollo/client'

export const QUERY_JOBS = gql`
  query QueryJobs($limit: Int!, $currentPage: Int!, $filter: String) {
    getJobs(limit: $limit, currentPage: $currentPage, filter: $filter) {
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
