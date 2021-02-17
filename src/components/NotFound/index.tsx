import Button from 'components/Button'
import Heading from 'components/Heading'
import * as S from './styles'

const NotFound = () => (
  <S.Wrapper>
    <S.Image src="/img/notfound.png" alt="Um cachorrinho dormindo" />

    <Heading color="white" lineBottom lineColor="secondary" size="medium">
      Página não encontrada
    </Heading>

    <Button as="a" href="/">
      Voltar página inicial
    </Button>
  </S.Wrapper>
)

export default NotFound
