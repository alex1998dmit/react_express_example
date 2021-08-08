import { AppBar, Container, makeStyles, Theme, Toolbar } from '@material-ui/core'
import * as React from 'react'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: "transparent",
    border: "none",
    boxShadow: "none",
    padding: '30px 0'
  },
  logo: {
    width: '140px',
    height: '30px',
    backgroundImage: `url(/icons/logoDesktop.svg)`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    [theme.breakpoints.down('sm')]: {
      width: '33px',
      height: '33px',
      backgroundImage: `url(/icons/logoMobile.svg)`,
    }
  },
  toolBarRoot: {
    display: "flex",
    justifyContent: "space-between",
    height: "56px",
    padding: 0,
  },
}))

const Header: React.FC = () => {
  const classes = useStyles()
  return (
    <AppBar
      position="absolute"
      classes={{
        root: classes.root,
      }}
    >
      <Container>
        <Toolbar classes={{ root: classes.toolBarRoot }}>
          <div
            className={classes.logo}
          />
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
