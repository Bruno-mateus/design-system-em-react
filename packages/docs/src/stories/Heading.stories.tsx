import { Heading, TextProps } from '@ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Custom Title',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
export const TagCustom: StoryObj<TextProps> = {
  args: {
    children: 'h1 Heading',
    as: 'h1',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inlie-radio',
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre será um `h2`, mas podemos alterar  isso com a propriedade `as`',
      },
    },
  },
}
