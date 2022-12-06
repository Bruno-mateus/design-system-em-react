import { Text, TextProps } from '@ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus doloremque exercitationem quidem deserunt qui quo nostrum natus, officiis, accusantium alias, nihil in. Voluptates libero numquam mollitia hic. Aperiam, ab fugiat.',
    size: 'md',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: { type: 'inline-radio' },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
export const TagCustom: StoryObj<TextProps> = {
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus doloremque exercitationem quidem deserunt qui quo nostrum natus, officiis, accusantium alias, nihil in. Voluptates libero numquam mollitia hic. Aperiam, ab fugiat.',
    as: 'strong',
  },
}
