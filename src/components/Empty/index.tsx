import Link from 'next/link'

import Button from 'components/Button'

import * as S from './styles'

export type EmptyProps = {
  title: string
  description: string
  hasLink?: boolean
}

const Empty = ({ title, description, hasLink }: EmptyProps) => (
  <S.Wrapper>
    <S.Image
      src="/img/empty.png"
      alt="Um computador com uma lupa a frente"
      role="img"
    />

    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>

    {hasLink && (
      <Link href="/jobs" passHref>
        <Button as="a">Voltar</Button>
      </Link>
    )}
  </S.Wrapper>
)

export default Empty
