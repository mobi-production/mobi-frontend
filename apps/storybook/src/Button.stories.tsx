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

export const Primary: Story = {
  render: () => (
    <Button
      intent='apply'
      className='bg-amber-600'
      onClick={(): void => {
        console.info('Hello from Turborepo!')
      }}>
      Hello
    </Button>
  )
}
