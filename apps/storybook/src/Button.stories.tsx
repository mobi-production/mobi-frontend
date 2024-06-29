import { Button } from '@repo/ui'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    intent: {
      description: '버튼의 색상과 관련된 속성을 나타냅니다.',
      control: { type: 'radio' },
      options: ['default', 'outline', 'empty']
    },
    size: {
      description: '버튼의 크기를 선택합니다.',
      control: { type: 'radio' },
      options: ['small', 'medium', 'large', 'full']
    },
    rounded: {
      description: '버튼의 테두리 둥근 정도를 나타냅니다.',
      control: { type: 'radio' },
      options: ['square', 'full']
    }
  }
}

export default meta

type Story = StoryObj<typeof Button>

export const MainButton: Story = {
  parameters: {
    layout: 'centered'
  },
  args: {
    intent: 'outline',
    rounded: 'full',
    children: '지원하기'
  }
}

export const ApplyButton: Story = {
  parameters: {
    layout: 'centered'
  },
  args: {
    rounded: 'full',
    children: '지원하기'
  }
}

export const ApplyMobileButton: Story = {
  args: {
    rounded: 'full',
    size: 'full',
    children: '지원하기'
  }
}
