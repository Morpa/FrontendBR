import { gql, QueryHookOptions, useQuery } from '@apollo/client'

import { QueryJobs, QueryJobsVariables } from 'graphql/generated/QueryJobs'

export const QUERY_JOBS = gql`
  query QueryJobs($limit: Int!, $currentPage: Int, $filter: [String]) {
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
export function useQueryJobs(
  options?: QueryHookOptions<QueryJobs, QueryJobsVariables>
) {
  return useQuery<QueryJobs, QueryJobsVariables>(QUERY_JOBS, options)
}
