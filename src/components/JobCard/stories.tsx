import { Story, Meta } from '@storybook/react/types-6-0'
import JobCard, { JobCardProps } from '.'

export default {
  title: 'JobCard',
  component: JobCard,
  args: {
    title: '[CURITIBA-PR] Web Designer @ Grupo A Educação',
    labels: [
      { name: 'Pleno', color: '6c46ea' },
      { name: 'CLT', color: '7fe266' }
    ],
    created_at: '2021-02-15T19:52:17Z',
    html_url: 'https://github.com/frontendbr/vagas/issues/4297'
  }
} as Meta

export const Default: Story<JobCardProps> = (args) => (
  <div style={{ width: '34rem', height: 'auto' }}>
    <JobCard {...args} />
  </div>
)
