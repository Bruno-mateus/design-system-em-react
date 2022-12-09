import React, { useState } from 'react'
import { Button, Toast, ToastProps } from '@ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export const DemoToast = (props: ToastProps) => {
  const [isOpen, setOpen] = useState(false)
  return (
    <div>
      <Button
        onClick={() => {
          setOpen(true)
        }}
      >
        Agendar
      </Button>
      <Toast open={isOpen} onOpenChange={setOpen} {...props} />
    </div>
  )
}

export default {
  title: 'Data Display/Toast',
  component: DemoToast,
  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro as 16h ',
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
