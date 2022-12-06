import React, { ComponentProps } from 'react'
import { Input, TextInputContainer, WithPrefix } from './styles'

export interface InputProps extends ComponentProps<typeof Input> {
  prefix?: string
}

export function TextInput({ prefix, ...props }: InputProps) {
  return (
    <TextInputContainer>
      {!!prefix && <WithPrefix>{prefix}</WithPrefix>}
      <Input {...props} />
    </TextInputContainer>
  )
}
TextInput.displayName = 'TextInput'
