import { gql } from '@apollo/client'

export const QUERY_JOBS_OPEN = gql`
  query JobsOpen {
    countJobs {
      open_issues_count
    }
  }
`
