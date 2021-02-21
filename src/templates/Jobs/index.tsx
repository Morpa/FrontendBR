import { useState } from 'react'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { ParsedUrlQueryInput } from 'querystring'
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'

import { QueryJobs, QueryJobsVariables } from 'graphql/generated/QueryJobs'
import { QUERY_JOBS } from 'graphql/queries/jobs'
import { parsedQueryStringToFilter } from 'utils/filter'

import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import { Grid } from 'components/Grid'
import JobCard from 'components/JobCard'

import Base from 'templates/Base'

import * as S from './styles'

export type HomeTemplateProps = {
  filterItems: ItemProps[]
}

const Jobs = ({ filterItems }: HomeTemplateProps) => {
  const { push, query } = useRouter()

  const [currentPage, setCurrentPage] = useState(2)

  const { data, fetchMore } = useQuery<QueryJobs, QueryJobsVariables>(
    QUERY_JOBS,
    {
      variables: {
        currentPage: currentPage,
        limit: 15,
        filter: parsedQueryStringToFilter({
          queryString: query,
          filterItems
        }).label
      }
    }
  )

  if (!data) return <p>Loading...</p>

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

        {
          <section>
            <Grid>
              {data?.getJobs.map((job) => (
                <JobCard
                  key={job.id}
                  title={job?.title}
                  html_url={job.html_url}
                  created_at={job.created_at}
                  labels={job.labels}
                />
              ))}
            </Grid>
            <S.ShowMore role="button" onClick={handleShowMore}>
              <p>Carregar mais</p>
              <ArrowDown size={35} />
            </S.ShowMore>
          </section>
        }
      </S.Main>
    </Base>
  )
}

export default Jobs
