import { useCallback } from 'react'
import tinyColor from 'tinycolor2'

import * as S from './styles'

type Labels = {
  name: string
  color: string
}

export type JobCardProps = {
  title: string
  labels: Labels[]
  created_at: string
  html_url: string
}

const JobCard = ({ title, labels, created_at, html_url }: JobCardProps) => {
  const formatColor = useCallback((hexadecimalColor) => {
    const color = tinyColor(hexadecimalColor)

    return color.isLight() ? '#030517' : '#FAFAFA'
  }, [])

  const formatDate = useCallback((date) => {
    const dateSplit = date.split('T')
    const ymd = dateSplit[0].split('-')

    return `${ymd[2]}/${ymd[1]}/${ymd[0]}`
  }, [])

  return (
    <S.Wrapper
      onClick={() => {
        window.open(html_url, '_blank')
      }}
    >
      <S.Title>{title}</S.Title>
      <S.LabelsWrapper>
        {labels &&
          labels.map((label) => (
            <S.Label
              key={label.name}
              style={{
                backgroundColor: `#${label.color}`,
                color: `${formatColor(label.color)}`
              }}
            >
              {label.name}
            </S.Label>
          ))}
      </S.LabelsWrapper>
      <S.Publication>Publicado em: {formatDate(created_at)}</S.Publication>
    </S.Wrapper>
  )
}

export default JobCard
