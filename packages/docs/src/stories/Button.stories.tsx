import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@ignite-ui/react'

export default {
  title: 'button',
  component: Button,
  default: {
    args: {
      children: 'enviar',
    },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
  args: {
    children: 'login',
  },
}
export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'big',
    children: 'logout',
  },
}
