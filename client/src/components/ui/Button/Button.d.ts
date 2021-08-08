import * as React from 'react'

export interface ButtonProps {
  children: React.ReactNode
  disabled?: boolean
  type?: 'button' | 'submit'
  className?: string
}