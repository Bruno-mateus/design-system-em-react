import React, { ComponentProps, ReactNode } from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { TooltipArrow, TooltipContent } from './styles'

export interface TooltipProps
  extends ComponentProps<typeof TooltipPrimitive.Root> {
  content: string | ReactNode
}

export function Tooltip({ children, content, ...props }: TooltipProps) {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipContent>
            {content}
            <TooltipArrow />
          </TooltipContent>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}

Tooltip.displayName = 'Tooltip'
