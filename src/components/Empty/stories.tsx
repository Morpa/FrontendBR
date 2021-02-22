import { Story, Meta } from '@storybook/react/types-6-0'
import Empty, { EmptyProps } from '.'

export default {
  title: 'Empty',
  component: Empty
} as Meta

export const Default: Story<EmptyProps> = (args) => <Empty {...args} />

Default.args = {
  title: 'Opss...',
  description: 'A vaga que você procura não existe',
  hasLink: true
}
