import React, { ComponentProps } from 'react'
import * as ToastPrimitive from '@radix-ui/react-toast'
import { ToastRoot } from './styles'

export interface ToastProps extends ComponentProps<typeof ToastPrimitive.Root> {
  title: string
  description?: string
}

export function Toast({ title, description, ...props }: ToastProps) {
  return (
    <ToastPrimitive.Provider>
      <ToastRoot duration={3000}>
        <ToastPrimitive.Title>{title}</ToastPrimitive.Title>
        {description && (
          <ToastPrimitive.Description>{description}</ToastPrimitive.Description>
        )}
        <ToastPrimitive.Close>close</ToastPrimitive.Close>
      </ToastRoot>

      <ToastPrimitive.Viewport />
    </ToastPrimitive.Provider>
  )
}
