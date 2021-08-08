import * as React from 'react'
import { makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100vh',
    width: '100vw',
    position: 'fixed'
  },
  dude: {
    backgroundImage: `url(https://assets.hotellook.com/kandidat/layout/images/men.3bb08.svg)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center center',
    zIndex: 2,
    height: '100vh',
    width: '100vw',
    bottom: 0,
    left: 0,
    position: 'absolute',
    [theme.breakpoints.down('sm')]: {
      backgroundSize: 'cover',
    }
  },
  ground: {
    backgroundImage: `url(icons/ground.svg)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '15vh',
    width: '100vw',
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  text: {
     height: '100vh',
     width: '100vw',
     display: 'flex',
     justifyContent: 'center',
     alignItems: 'center'
  },
  title: {
    textDecoration: 'line-through'
  }
}))

const Dude = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.dude} />
      <div className={classes.ground} />
      
    </div>
  )
}

export default Dude
