import { Story, Meta } from '@storybook/react/types-6-0'
import RateLimit, { RateLimitProps } from '.'

export default {
  title: 'RateLimit',
  component: RateLimit
} as Meta

export const Default: Story<RateLimitProps> = (args) => <RateLimit {...args} />

Default.args = {
  title: 'Opss...',
  description:
    'Parece que você atingiu o limite de requisições. Aguarde alguns minutos...'
}
