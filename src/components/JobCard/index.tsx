import formatColor from 'utils/formatColor'
import formatDate from 'utils/formatDate'

import * as S from './styles'

type Labels = {
  name: string
  color: string
}

export type JobCardProps = {
  title: string
  labels: Labels[] | null
  created_at: string
  html_url: string
}

const JobCard = ({ title, labels, created_at, html_url }: JobCardProps) => {
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
