import { Text, TextProps } from '@ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus doloremque exercitationem quidem deserunt qui quo nostrum natus, officiis, accusantium alias, nihil in. Voluptates libero numquam mollitia hic. Aperiam, ab fugiat.',
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
