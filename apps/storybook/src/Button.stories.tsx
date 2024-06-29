import { Button } from '@repo/ui'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['button', 'submit', 'reset']
    }
  }
}

export default meta

type Story = StoryObj<typeof Button>

export const ApplyButton: Story = {
  args: {
    rounded: 'full',
    intent: 'apply',
    children: '지원하기'
  }
}
