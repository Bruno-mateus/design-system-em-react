import * as ToastPrimitive from '@radix-ui/react-toast'

import { keyframes, styled } from '../../styles'

const VIEWPORT_PADDING = 25

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
})

export const ToastRoot = styled(ToastPrimitive.Root, {
  background: '$gray800',
  fontFamily: '$default',
  lineHeight: '$tall',
  border: '1px solid $gray600',
  borderRadius: '$sm',
  display: 'flex',
  flexDirection: 'column',
  maxWidth: 360,
  padding: '$3 $4',
  position: 'relative',
  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },
  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
})
export const ToastTitle = styled(ToastPrimitive.Title, {
  color: '$white',
  fontWeight: 'bold',
  fontSize: '$xl',
})
export const ToastDescription = styled(ToastPrimitive.Description, {
  color: '$gray200',
  fontSize: '$sm',
})

export const ToastClose = styled(ToastPrimitive.Close, {
  position: 'absolute',

  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  top: '$3',
  right: '$4',
  svg: {
    color: '$gray200',
  },
})

export const ToastViewport = styled(ToastPrimitive.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  padding: VIEWPORT_PADDING,
  gap: 10,
  width: 390,
  zIndex: 888888888888,
  margin: 0,
})
