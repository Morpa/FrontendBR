import { Story, Meta } from '@storybook/react/types-6-0'
import Main, { MainProps } from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'title default',
    jobs: '344'
  }
} as Meta

export const Default: Story<MainProps> = (args) => <Main {...args} />
