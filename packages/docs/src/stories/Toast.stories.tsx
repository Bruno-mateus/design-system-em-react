import React, { useEffect, useRef, useState } from 'react'
import { Button, Toast, ToastProps } from '@ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export const DemoToast = (props: ToastProps) => {
  const [IsOpen, setOpen] = useState(false)

  const timerRef = useRef(0)

  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  return (
    <div>
      <Button
        onClick={() => {
          setOpen(false)
          window.clearTimeout(timerRef.current)
          timerRef.current = window.setTimeout(() => {
            setOpen(true)
          }, 100)
        }}
      >
        Agendar
      </Button>
      <Toast open={IsOpen} onOpenChange={setOpen} {...props} />
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
