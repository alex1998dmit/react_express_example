import * as React from 'react'
import { Grid, makeStyles, Typography } from '@material-ui/core'
import Clouds from '../Clouds'
import Dude from '../Dude'
import Header from '../Header'

const useStyles = makeStyles({
  title: {
    textDecoration: 'line-through'
  },
  texts: {
    height: '100vh',
    width: '100vw',
    zIndex: 3,
    position: 'relative'
  }
})

const Congrats = () => {
  const classes = useStyles()
  return (
    <div>
      <Header />
      <Clouds />
      <Dude />
      <Grid
        container
        className={classes.texts}
        alignContent='center'
        alignItems='center'
        justifyContent='center'
      >
        <Grid item xs={12}>
          <Typography
            className={classes.title}
            variant='h1'
            align='center'
            color='secondary'
          >
            Выборы
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            align='center'
            variant='h2'
            color='primary'
          >
            Путешествие близко!
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default Congrats
