import Main, { MainProps } from 'components/Main'

export default function Home(props: MainProps) {
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
