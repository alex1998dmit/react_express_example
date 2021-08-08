import * as React from 'react'
import { makeStyles } from '@material-ui/core'
import { SocialButtonProps } from './SocialButton.d'

const socialNetworks = {
  'vk': {
    color: '#45668e',
    icon: '/icons/vk.svg',
    url: 'https://oauth.vk.com/authorize?client_id=-1&redirect_uri=https%3A%2F%2Fvk.com%2Fshare.php%3Furl%3Dhttps%253A%252F%252Fi.avs.io%252F41qdr%252Fvk%26image%3Dhttps%3A%2F%2Fassets.hotellook.com%2Fkandidat%2Fupload%2Fko3crqb.png%26title%3D%25D0%2592%25D1%258B%25D0%25B8%25D0%25B3%25D1%2580%25D0%25B0%25D0%25B9%2520%25D0%25BE%25D0%25B4%25D0%25B8%25D0%25BD%2520%25D0%25B8%25D0%25B7%2520%25D0%25BF%25D1%258F%25D1%2582%25D0%25B8%2520%25D0%25B0%25D0%25B2%25D0%25B8%25D0%25B0%25D0%25B1%25D0%25B8%25D0%25BB%25D0%25B5%25D1%2582%25D0%25BE%25D0%25B2%2520%25D0%25BE%25D1%2582%2520Aviasales%26no_vk_links%3D1&display=widget',
  },
  'facebook': {
    color: '#3b5998',
    icon: '/icons/facebook.svg',
    url: 'https://www.facebook.com/login.php?skip_api_login=1&api_key=219887715052731&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Ffeed%3Fapp_id%3D219887715052731%26display%3Dpopup%26caption%3D%25D0%25A3%25D0%25B7%25D0%25BD%25D0%25B0%25D0%25B9%252C%2B%25D0%25BA%25D1%2582%25D0%25BE%2B%25D1%2582%25D0%25B2%25D0%25BE%25D0%25B9%2B%25D0%25BA%25D0%25B0%25D0%25BD%25D0%25B4%25D0%25B8%25D0%25B4%25D0%25B0%25D1%2582%2B%25D0%25B2%2B%25D0%25BF%25D1%2583%25D1%2582%25D0%25B5%25D1%2588%25D0%25B5%25D1%2581%25D1%2582%25D0%25B2%25D0%25B8%25D0%25B5-2018%26link%3Dhttps%253A%252F%252Fi.avs.io%252F41qdr%252Ffb&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Freturn%2Fclose%3Ferror_code%3D4201%26error_message%3DUser%2Bcanceled%2Bthe%2BDialog%2Bflow%23_%3D_&display=popup&locale=ru_RU',
  },
  'twitter': {
    color: '#45abe7',
    icon: '/icons/twitter.svg',
    url: 'https://twitter.com/intent/tweet?text=%D0%A3%D0%B7%D0%BD%D0%B0%D0%B9%2C%20%D0%BA%D1%82%D0%BE%20%D1%82%D0%B2%D0%BE%D0%B9%20%D0%BA%D0%B0%D0%BD%D0%B4%D0%B8%D0%B4%D0%B0%D1%82%20%D0%B2%20%D0%BF%D1%83%D1%82%D0%B5%D1%88%D0%B5%D1%81%D1%82%D0%B2%D0%B8%D0%B5-2018%20https%3A%2F%2Fi.avs.io%2F41qdr%2Ftw'
  },
  'ok': {
    color: '#de7840',
    icon: '/icons/ok.svg',
    url: 'https://connect.ok.ru/dk?st.cmd=OAuth2Login&st.layout=w&st.redirect=%252Fdk%253Fcmd%253DWidgetSharePreview%2526amp%253Bst.cmd%253DWidgetSharePreview%2526amp%253Bst.shareUrl%253Dhttps%25253A%25252F%25252Fi.avs.io%25252F41qdr%25252Fok&st._wt=1&st.client_id=-1'
  },
}


const useStyles = makeStyles({
  root: (props: SocialButtonProps) => ({ 
    backgroundColor: socialNetworks[props.variant].color,
    width: '53px',
    height: '53px',
    border: 'none',
    backgroundImage: `url(${socialNetworks[props.variant].icon})`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    borderRadius: '100%',
    cursor: 'pointer',
    '&:hover': {
      backgroundImage: `url(/icons/heart.svg)`,
    },
  }),
})


const SocialButton: React.FC<SocialButtonProps> = (props) => {
  const classes = useStyles(props)
  const onClickHandler = () => {
    window.open(
      socialNetworks[props.variant].url,
      "_blank",
      'location=yes,height=570,width=520,scrollbars=yes,status=yes'
    )
    if (!props.disabled) props.onClick()
  }

  return (
    <button type='button' onClick={onClickHandler} className={classes.root} />
  )
}

SocialButton.defaultProps = {
  disabled: false
}

export default SocialButton
