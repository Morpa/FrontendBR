import { QUERY_COUNT_JOBS } from 'graphql/queries/count_jobs'
import { QUERY_JOBS } from 'graphql/queries/jobs'

export const countJobsMock = {
  request: {
    query: QUERY_COUNT_JOBS,
    variables: { filter: undefined }
  },
  result: {
    data: {
      getQuantity: 50
    }
  }
}

export const noJobsMock = {
  request: {
    query: QUERY_JOBS,
    variables: { currentPage: 2, limit: 15, filter: undefined }
  },
  result: {
    data: {
      getJobs: []
    }
  }
}

export const jobsMock = {
  request: {
    query: QUERY_JOBS,
    variables: { currentPage: 2, limit: 15, filter: undefined }
  },
  result: {
    data: {
      getJobs: [
        {
          id: 1,
          title: 'FirstJob',
          html_url: 'http://job.com',
          created_at: '2021-02-15T19:52:17Z',
          labels: [
            { name: 'Pleno', color: '6c46ea' },
            { name: 'CLT', color: '7fe266' }
          ]
        },
        {
          id: 22,
          title: 'MoreJob',
          html_url: 'http://job2.com',
          created_at: '2021-02-15T19:52:17Z',
          labels: [
            { name: 'Pleno', color: '6c46ea' },
            { name: 'CLT', color: '7fe266' }
          ]
        }
      ]
    }
  }
}

export const fetchMoreJobs = {
  request: {
    query: QUERY_JOBS,
    variables: { currentPage: 2, limit: 15, filter: undefined }
  },
  result: {
    data: {
      getJobs: [
        {
          id: 2,
          title: 'More Job',
          html_url: 'http://job.com',
          created_at: '2021-02-15T19:52:17Z',
          labels: [
            { name: 'Pleno', color: '6c46ea', __typename: 'Labels' },
            { name: 'CLT', color: '7fe266', __typename: 'Labels' }
          ],
          __typename: 'Job'
        },
        {
          id: 29,
          title: 'More Job2',
          html_url: 'http://job.com',
          created_at: '2021-02-15T19:52:17Z',
          labels: [
            { name: 'Pleno', color: '6c46ea', __typename: 'Labels' },
            { name: 'CLT', color: '7fe266', __typename: 'Labels' }
          ],
          __typename: 'Job'
        }
      ]
    }
  }
}
