import { NextSeo } from 'next-seo'
import GithubCorner from 'react-github-corner'

import { initializeApollo } from 'utils/apollo'
import { QUERY_JOBS_OPEN } from 'graphql/queries/jobs_open'
import { JobsOpen } from 'graphql/generated/JobsOpen'

import Main, { MainProps } from 'components/Main'

export default function Home(props: MainProps) {
  return (
    <>
      <NextSeo
        title="Frontend BR"
        description="Espaço para a divulgação de vagas para desenvolvedores frontend."
        canonical="https://frontendbr-jobs.vercel.app/"
        openGraph={{
          url: 'https://frontendbr-jobs.vercel.app/',
          title: 'Frontend BR',
          description:
            'Espaço para a divulgação de vagas para desenvolvedores frontend.',
          images: [
            {
              url: 'https://frontendbr-jobs.vercel.app/img/logo.png'
            }
          ],
          site_name: 'Frontend BR'
        }}
        twitter={{
          handle: '@Morpa',
          site: '@Morpa',
          cardType: 'summary_large_image'
        }}
      />
      <GithubCorner
        href="https://github.com/Morpa/FrontendBR"
        octoColor="#06092b"
        bannerColor="#f231a5"
      />
      <Main {...props} />
    </>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<JobsOpen>({
    query: QUERY_JOBS_OPEN
  })

  return {
    props: {
      revalidate: 60,
      jobs: data.countJobs!.open_issues_count
    }
  }
}
