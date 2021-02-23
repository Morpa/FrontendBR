import { useState } from 'react'
import { useRouter } from 'next/router'
import { ParsedUrlQueryInput } from 'querystring'
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'

import { useQueryJobs } from 'graphql/queries/jobs'
import { useQueryCountJobs } from 'graphql/queries/count_jobs'
import { parsedQueryStringToFilter } from 'utils/filter'

import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import { Grid } from 'components/Grid'
import JobCard from 'components/JobCard'
import Empty from 'components/Empty'

import Base from 'templates/Base'

import * as S from './styles'

export type HomeTemplateProps = {
  filterItems: ItemProps[]
}

const Jobs = ({ filterItems }: HomeTemplateProps) => {
  const { push, query } = useRouter()

  const [currentPage, setCurrentPage] = useState(2)

  const { data, loading, fetchMore } = useQueryJobs({
    notifyOnNetworkStatusChange: true,
    variables: {
      currentPage: currentPage,
      limit: 15,
      filter: parsedQueryStringToFilter({
        queryString: query,
        filterItems
      }).filter
    }
  })

  const { data: count } = useQueryCountJobs({
    variables: {
      filter: parsedQueryStringToFilter({
        queryString: query,
        filterItems
      }).filter
    }
  })

  if (!data) return <p>Loading...</p>

  const hasMoreJobs = data.getJobs.length < (count?.getQuantity || 0)

  const handleFilter = (items: ParsedUrlQueryInput) => {
    push({
      pathname: '/jobs',
      query: items
    })
    return
  }

  const handleShowMore = () => {
    setCurrentPage(currentPage + 1)
    fetchMore({ variables: { currentPage: currentPage, limit: 15 } })
  }

  return (
    <Base>
      <S.Main>
        <ExploreSidebar
          initialValues={parsedQueryStringToFilter({
            queryString: query,
            filterItems
          })}
          items={filterItems}
          onFilter={handleFilter}
        />

        <section>
          {data.getJobs.length ? (
            <>
              <Grid>
                {data?.getJobs.map((job) => (
                  <JobCard
                    key={job.id}
                    title={job.title}
                    html_url={job.html_url}
                    created_at={job.created_at}
                    labels={job.labels}
                  />
                ))}
              </Grid>
              {hasMoreJobs && (
                <S.ShowMore>
                  {loading ? (
                    <S.ShowMoreLoading
                      src="/img/dots.svg"
                      alt="Carregando mais vagas..."
                    />
                  ) : (
                    <S.ShowMoreButton role="button" onClick={handleShowMore}>
                      <p>Carregar mais</p>
                      <ArrowDown size={35} />
                    </S.ShowMoreButton>
                  )}
                </S.ShowMore>
              )}
            </>
          ) : (
            <Empty
              title="Opss..."
              description="A vaga que você procura não existe"
              hasLink
            />
          )}
        </section>
      </S.Main>
    </Base>
  )
}

export default Jobs
