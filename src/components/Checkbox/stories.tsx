import { Story, Meta } from '@storybook/react/types-6-0'

import Checkbox, { CheckboxProps } from '.'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    onCheck: { action: 'checked' }
  }
} as Meta

export const Default: Story<CheckboxProps> = (args) => (
  <>
    <div style={{ padding: 10 }}>
      <Checkbox name="category" label="PJ" labelFor="pj" isChecked {...args} />
    </div>
    <div style={{ padding: 10 }}>
      <Checkbox name="category" label="CLT" labelFor="clt" {...args} />
    </div>
    <div style={{ padding: 10 }}>
      <Checkbox name="category" label="Remoto" labelFor="remoto" {...args} />
    </div>
  </>
)
