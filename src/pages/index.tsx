import { gql, useQuery } from '@apollo/client'

import Main, { MainProps } from 'components/Main'

export default function Home(props: MainProps) {
  const { data, loading, error } = useQuery(gql`
    query JobsOpen {
      countJobs {
        open_issues_count
      }
    }
  `)

  if (loading) return <p>Loading...</p>

  if (error) return <p>{error}</p>

  if (data) return <p>{JSON.stringify(data, null, 2)}</p>

  return <Main {...props} />
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Espaço para divulgação de vagas para front-enders.',
      jobs: 345
    }
  }
}
