import * as React from 'react'
import cn from 'classnames'
import { makeStyles } from '@material-ui/core'
import { CloudProps } from './Cloud.d'

const useStyles = makeStyles({
  cloud: (props: CloudProps) => ({
    backgroundRepeat: 'no-repeat',
    position: 'fixed',
    backgroundImage: `url(${props.url})`,
    top: `${props.y}%`,
    left: `${props.x}%`,
    width: '151px',
    height: '32px',
  }),
})

const Cloud: React.FC<CloudProps> = (props) => {
  const classes = useStyles(props)
  return (
    <div className={cn(classes.cloud)} />
  )
}

export default Cloud
