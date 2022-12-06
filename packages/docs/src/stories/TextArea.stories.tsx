import React from 'react'
import { Box, Text, TextArea, TextAreaProps } from '@ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'
export default {
  title: 'Form/Textarea',
  component: TextArea,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', padding: '$2 ' }}
        >
          <Text css={{ fontSize: '$sm' }}>Observations</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Add any observation',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
