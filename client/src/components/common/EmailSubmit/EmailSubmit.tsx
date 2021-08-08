import * as React from 'react'
import { Grid, makeStyles, Theme, Typography } from '@material-ui/core'
import Button from '../../ui/Button'
import Input from '../../ui/Input'
import { useForm } from 'react-hook-form'
import { observer } from 'mobx-react'
import rootStore from '../../../store'
import { EmailFormParams, EmailSubmitStyleProps } from './EmailSubmit.d'
import Checkbox from '../../ui/Checkbox'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    width: '100%'
  },
  titleContainer: {
    position: 'relative',
    paddingBottom: theme.spacing(1),
  },
  title: (props: EmailSubmitStyleProps) => ({
    opacity: !props.email ? '100%' : '50%'
  }),
  form: {
    width: '100%'
  },
  num: (props: EmailSubmitStyleProps) => ({
    position: 'absolute',
    left: '-20%',
    top: '-10%',
    display: !props.email ? 'inherit' : 'none',
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      left: '-12px',
      top: 0,
      fontSize: '16px'
    }
  }),
  input: {
    paddingBottom: theme.spacing(2)
  },
  checkbox: (props: EmailSubmitStyleProps) => ({
    position: 'absolute',
    left: '-25%',
    top: '-30%',
    display: props.email ? 'inherit' : 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'none'    
    }
  })
}))

const EmailSubmit = () => {
  const {
    appStore: {
      startLoading,
      completeLoading,
      isLoading
    },
    userStore: {
      email,
      sendEmail
    }} = rootStore
  const classes = useStyles({ email: !!email })
  const form = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
  })
  
  const formHandler = async ({ email }: EmailFormParams) => {
    startLoading()
    await sendEmail(email)
    completeLoading()
  }

  return (
    <form onSubmit={form.handleSubmit(formHandler)} className={classes.form}>
      <Grid container>
        <Grid item xs={12} className={classes.titleContainer}>
          <Typography color="primary" className={classes.title}>
            Оставь почту:
          </Typography>
          <Typography className={classes.num} color="primary" variant="h2">
            2.
          </Typography>
          <Checkbox checked className={classes.checkbox} />
        </Grid>
        <Grid item xs={12} className={classes.input} container justifyContent='center'>
          <Input
            disabled={!!email}
            fullWidth
            {...form.register('email',
            {
              required: "required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "error"
              }
            }
          )}
          />
        </Grid>
        <Grid item xs={12} container justifyContent='center'>
          <Button
            disabled={!form.formState.isValid || !!email || isLoading}
            type='submit'
          >
            Отправить
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default observer(EmailSubmit)
