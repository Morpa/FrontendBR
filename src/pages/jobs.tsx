import Jobs, { HomeTemplateProps } from 'templates/Jobs'

import filterItemsMock from 'components/ExploreSidebar/mock'
import jobsMock from 'templates/Jobs/mock'

export default function Home(props: HomeTemplateProps) {
  return <Jobs {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      jobs: jobsMock,
      filterItems: filterItemsMock
    }
  }
}
