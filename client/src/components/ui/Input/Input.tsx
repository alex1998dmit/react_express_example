import * as React from 'react'
import { makeStyles } from '@material-ui/core'
import { InputProps, StyleProps } from './Input.d'

const useStyles = makeStyles({
  root: (props: StyleProps) => ({
    padding: '13px 22px',
    border: 'white',
    borderRadius: '25px',
    width: props.fullWidth ? '100%' : 'initial'
  })
})

const Input: React.FC<InputProps> = React.forwardRef((props, ref) => {
  const { fullWidth, type, disabled, ...otherProps } = props
  const classes = useStyles({ fullWidth })
  return (
    <input
      type={type}
      disabled={disabled}
      className={classes.root}
      {...otherProps}
    />
  )
})

Input.defaultProps = {
  disabled: false,
  fullWidth: false,
  type: 'string'
}

export default Input
