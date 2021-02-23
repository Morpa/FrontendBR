import * as S from './styles'

export type RateLimitProps = {
  title: string
  description: string
}

const RateLimit = ({ title, description }: RateLimitProps) => (
  <S.Wrapper>
    <S.Image
      src="/img/limit.png"
      alt="Um computador com um triângulo vermelho sobre ele"
      role="img"
    />

    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)

export default RateLimit
