import Button from 'components/Button'

import * as S from './styles'

export type MainProps = {
  title: string
  jobs: string
}

const Main = ({ title, jobs }: MainProps) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.png"
      alt="Imagem de um círculo com as cores da bandeira do Brasil."
    />
    <S.Title>{title}</S.Title>

    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com código."
    />

    <Button as="a" href="/jobs">
      Ver as {jobs} vagas
    </Button>
  </S.Wrapper>
)

export default Main
