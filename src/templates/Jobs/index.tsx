import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'

import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import { Grid } from 'components/Grid'
import JobCard, { JobCardProps } from 'components/JobCard'

import Base from 'templates/Base'

import * as S from './styles'

export type HomeTemplateProps = {
  jobs: JobCardProps[]
  filterItems: ItemProps[]
}

const Jobs = ({ filterItems, jobs = [] }: HomeTemplateProps) => {
  const handleFilter = () => {
    return
  }

  const handleShowMore = () => {
    return
  }

  return (
    <Base>
      <S.Main>
        <ExploreSidebar items={filterItems} onFilter={handleFilter} />

        <section>
          <Grid>
            {jobs.map((item) => (
              <JobCard key={item.title} {...item} />
            ))}
          </Grid>

          <S.ShowMore role="button" onClick={handleShowMore}>
            <p>Carregar mais</p>
            <ArrowDown size={35} />
          </S.ShowMore>
        </section>
      </S.Main>
    </Base>
  )
}

export default Jobs
