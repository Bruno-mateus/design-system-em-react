import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipContent = styled(TooltipPrimitive.Content, {
  background: '$gray900',
  fontFamily: '$default',
  padding: '$3 $4',
  borderRadius: '$sm',
  color: '$white',
  fontSize: '$sm',
  boxShadow: '4px 16px 24px rgba(0,0,0,0.25)',
})

export const TooltipArrow = styled(TooltipPrimitive.Arrow, {
  fill: '$gray900',
})
