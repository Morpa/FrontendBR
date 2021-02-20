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

  await apolloClient.query<QueryJobs, QueryJobsVariables>({
    query: QUERY_JOBS,
    variables: { limit: 15, currentPage: 1 }
  })

  return {
    props: {
      revalidate: 60,
      initialApolloState: apolloClient.cache.extract(),
      filterItems: filterItemsMock
    }
  }
}
