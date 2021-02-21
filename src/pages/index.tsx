import { initializeApollo } from 'utils/apollo'
import { QUERY_JOBS_OPEN } from 'graphql/queries/jobs_open'
import { JobsOpen } from 'graphql/generated/JobsOpen'

import Main, { MainProps } from 'components/Main'

export default function Home(props: MainProps) {
  return <Main {...props} />
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<JobsOpen>({
    query: QUERY_JOBS_OPEN
  })

  return {
    props: {
      jobs: data.countJobs!.open_issues_count
    }
  }
}
