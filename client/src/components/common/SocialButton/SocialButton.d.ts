export interface SocialButtonProps {
  variant: 'facebook' | 'vk' | 'twitter' | 'ok',
  onClick: () => void
  disabled?: boolean
}