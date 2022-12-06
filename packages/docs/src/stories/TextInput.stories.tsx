import React from 'react'
import { Box, InputProps, Text, TextInput } from '@ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Input',
  component: TextInput,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text css={{ fontSize: '$sm' }}>Email address</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<InputProps>

export const Primary: StoryObj<InputProps> = {
  args: {
    placeholder: 'Type your E-mail',
  },
}

export const WithPrefix: StoryObj<InputProps> = {
  args: {
    prefix: 'cal.com/',
  },
}
export const InputDisabled: StoryObj<InputProps> = {
  args: {
    disabled: true,
  },
}
