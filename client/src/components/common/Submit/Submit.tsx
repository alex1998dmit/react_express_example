import { Container, Grid, makeStyles, Theme, Typography } from '@material-ui/core'
import * as React from 'react'
import EmailSubmit from '../EmailSubmit'
import ShareButtons from '../ShareButtons/ShareButtons'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  title: {
    paddingBottom: theme.spacing(2)
  },
  btns: {
    paddingBottom: theme.spacing(2),
  },
  email: {
    paddingBottom: theme.spacing(2)
  }
}))

const Submit: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Container>
        <Grid
          container
          alignContent='center'
          alignItems='center'
          justifyContent='center'
        >
          <Grid
            container
            item
            xs={12}
            sm={12}
            md={6}
            alignContent='center'
            alignItems='center'
            justifyContent='center'
            spacing={2}
          >
            <Grid
              item
              xl={8}
              lg={8}
              md={8}
              sm={8}
              xs={12}
              className={classes.title}
            >
              <Typography variant='h1' color="primary" align='center'>
                Чтобы выиграть путешествие
              </Typography>
            </Grid>
            <Grid item xl={8} lg={8} md={8} sm={8} xs={12} container justifyContent='center' className={classes.btns}>
              <ShareButtons />
            </Grid>
            <Grid item xl={8} lg={8} md={8} sm={8} xs={12} container justifyContent='center' className={classes.email}>
              <EmailSubmit />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Submit
