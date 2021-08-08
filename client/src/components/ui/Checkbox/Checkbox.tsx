import * as React from 'react'
import { Checkbox as MUICheckbox, CheckboxProps, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    width: '20px',
    height: '20px'
  },
  checked: {
    color: '#7F4156 !important',
  },
})

const Checkbox: React.FC<CheckboxProps> = (props) => {
  const classes = useStyles()
  const { checked, className } = props
  return ( 
    <MUICheckbox
      checked={checked}
      className={className}
      classes={{
        root: classes.root,
        checked: classes.checked,
      }}
    />
  )
}

Checkbox.defaultProps = {
  checked: false
}

export default Checkbox
