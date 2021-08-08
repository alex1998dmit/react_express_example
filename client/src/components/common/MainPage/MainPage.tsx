import { makeStyles } from '@material-ui/core'
import React from 'react'
import Header from '../Header'
import Submit from '../Submit'
import Clouds from '../Clouds'
import stores from '../../../store'
import Congrats from '../Congrats/Congrats'
import { observer } from 'mobx-react'

const useStyles = makeStyles({
  root: {
    backgroundColor: '#CD718E',
    height: '100vh',
    width: '100%'
  },
})

const MainPage: React.FC = () => {
  const classes = useStyles()
  const {
    userStore: {
      init,
      user,
      isSubmitted,
    }
  } = stores

  React.useEffect(() => {
    const as = async () => {
      await init()
    }

    if (!user) {
      as()
    }
  }, [init, user])

  return (
    <div className={classes.root}>
      <Header />
      <Clouds />
      {isSubmitted ? <Congrats /> : <Submit />}
    </div>
  )
}

export default observer(MainPage)
