import * as React from 'react'
import { Grid, makeStyles, Theme, Typography } from '@material-ui/core'
import SocialButton from '../SocialButton'
import stores from '../../../store'
import Checkbox from '../../ui/Checkbox'
import { ShareButtonsStyleProps } from './ShareButtons.d'
import { observer } from 'mobx-react'

const useStyles = makeStyles((theme: Theme) => ({
  title: (props: ShareButtonsStyleProps) => ({
    position: 'relative',
    paddingBottom: theme.spacing(1),
    opacity: props.shared ? '50%' : '100%'
  }),
  buttons: (props: ShareButtonsStyleProps) => ({
    opacity: props.shared ? '50%' : '100%',
    '& button': {
      marginRight: '30px',
      [theme.breakpoints.down('sm')]: {
        marginRight: theme.spacing(1)
      }      
    }
  }),
  titleContainer: {
    position: 'relative'
  },
  num: (props: ShareButtonsStyleProps) => ({
    position: 'absolute',
    left: '-20%',
    top: '-10%',
    display: !props.shared ? 'block' : 'none',
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      left: '-12px',
      top: 0,
      fontSize: '16px'
    }
  }),
  checkbox: (props: ShareButtonsStyleProps) => ({
    position: 'absolute',
    left: '-25%',
    top: '-30%',
    display: props.shared ? 'block' : 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'none'    
    }
  })
}))

const ShareButtons = () => {
  const {
    userStore: {
      sendShared,
      shared
    }
  } = stores
  const classes = useStyles({ shared })
  return (
    <Grid container>
      <Grid item xs={12} className={classes.titleContainer}>
        <Typography color="primary" className={classes.title}>
          Поделитесь с друзьями
        </Typography>
        <Typography className={classes.num} color="primary" variant="h2">
          1.
        </Typography>
        <Checkbox checked className={classes.checkbox} />
      </Grid>
      <Grid item xs={12} className={classes.buttons}>
        <SocialButton variant='vk' onClick={sendShared} disabled={!!shared} />
        <SocialButton variant='facebook' onClick={sendShared} disabled={!!shared} />
        <SocialButton variant='twitter' onClick={sendShared} disabled={!!shared} />
        <SocialButton variant='ok' onClick={sendShared} disabled={!!shared} />
      </Grid>
    </Grid>
  )
}

export default observer(ShareButtons)
