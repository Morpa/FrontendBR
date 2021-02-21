import { GetServerSidePropsContext } from 'next'

import { initializeApollo } from 'utils/apollo'
import { QUERY_JOBS } from 'graphql/queries/jobs'
import { QueryJobs, QueryJobsVariables } from 'graphql/generated/QueryJobs'

import { parsedQueryStringToFilter } from 'utils/filter'

import Jobs, { HomeTemplateProps } from 'templates/Jobs'

export default function Home(props: HomeTemplateProps) {
  return <Jobs {...props} />
}

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const apolloClient = initializeApollo()

  const filterLabels = {
    title: 'Labels',
    name: 'labels',
    type: 'checkbox',
    fields: [
      {
        label: 'CLT',
        name: 'clt'
      },
      {
        label: 'PJ',
        name: 'pj'
      },
      {
        label: 'Alocado',
        name: 'alocado'
      },
      {
        label: 'Remoto',
        name: 'remoto'
      },
      {
        label: 'Especialista',
        name: 'especialista'
      },
      {
        label: 'Sênior',
        name: 's%C3%AAnior'
      },
      {
        label: 'Pleno',
        name: 'pleno'
      },
      {
        label: 'Júnior',
        name: 'j%C3%BAnior'
      },
      {
        label: 'Estágio',
        name: 'est%C3%A1gio'
      }
    ]
  }

  const filterItems = [filterLabels]

  await apolloClient.query<QueryJobs, QueryJobsVariables>({
    query: QUERY_JOBS,
    variables: {
      limit: 15,
      currentPage: 1,
      filter: parsedQueryStringToFilter({
        queryString: query,
        filterItems
      }).label
    }
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      filterItems
    }
  }
}
