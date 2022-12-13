import React, { ComponentProps } from 'react'
import * as ToastPrimitive from '@radix-ui/react-toast'
import {
  ToastClose,
  ToastDescription,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from './styles'
import { X } from 'phosphor-react'

export interface ToastProps extends ComponentProps<typeof ToastPrimitive.Root> {
  title: string
  description?: string
}

export function Toast({ title, description, ...props }: ToastProps) {
  return (
    <ToastPrimitive.Provider swipeDirection="right">
      <ToastRoot duration={2000} {...props}>
        <ToastTitle>{title}</ToastTitle>
        <ToastClose>
          <X size={20} />
        </ToastClose>
        {description && <ToastDescription>{description}</ToastDescription>}
      </ToastRoot>

      <ToastViewport />
    </ToastPrimitive.Provider>
  )
}
