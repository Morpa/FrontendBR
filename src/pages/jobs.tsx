import { initializeApollo } from 'utils/apollo'
import { QUERY_JOBS } from 'graphql/queries/jobs'
import { QueryJobs, QueryJobsVariables } from 'graphql/generated/QueryJobs'

import Jobs, { HomeTemplateProps } from 'templates/Jobs'
import filterItemsMock from 'components/ExploreSidebar/mock'

export default function Home(props: HomeTemplateProps) {
  return <Jobs {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryJobs, QueryJobsVariables>({
    query: QUERY_JOBS,
    variables: { limit: 9 }
  })

  return {
    props: {
      revalidate: 60,
      jobs: data.getJobs,
      filterItems: filterItemsMock
    }
  }
}