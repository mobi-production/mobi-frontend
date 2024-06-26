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
      className='border-gray-2 bg-blue-600 text-white'
      onClick={(): void => {
        console.info('Hello from Turborepo!')
      }}>
      Hello
    </Button>
  )
}
