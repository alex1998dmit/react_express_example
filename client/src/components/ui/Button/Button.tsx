import * as React from 'react'
import { Button as MUIButton, makeStyles } from '@material-ui/core'
import { ButtonProps } from './Button.d'

const useStyles = makeStyles({
  root: {
    background: 'white',
    padding: '8px 44px 0',
    fontSize: '40px',
    borderRadius: '35px',
    color: '#7F4156'
  },
  disabled: {
    background: 'transparent'
  }
})

const Button: React.FC<ButtonProps> = (props) => {
  const { children, type, disabled } = props
  const classes = useStyles()
  return (
    <MUIButton
      disabled={disabled}
      classes={{
        root: classes.root,
        disabled: classes.disabled
      }}
      type={type}
    >
      {children}
    </MUIButton>
  )
}

Button.defaultProps = {
  disabled: false,
  type: 'button'
}

export default Button
