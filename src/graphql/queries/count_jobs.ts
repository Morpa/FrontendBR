import { gql, QueryHookOptions, useQuery } from '@apollo/client'
import { countJobs, countJobsVariables } from 'graphql/generated/countJobs'

export const QUERY_COUNT_JOBS = gql`
  query countJobs($filter: [String]) {
    getQuantity(filter: $filter)
  }
`

export function useQueryCountJobs(
  options?: QueryHookOptions<countJobs, countJobsVariables>
) {
  return useQuery<countJobs, countJobsVariables>(QUERY_COUNT_JOBS, options)
}
