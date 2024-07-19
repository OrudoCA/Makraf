import style from './style.module.scss'
import image from '@/shared/images/player.svg'
interface PlayerProps {
  player_name: string
  has_image: boolean
}

export const Player = ({ player_name, has_image }: PlayerProps) => {
  return (
    <div className={style.container}>
      {has_image && <img className={style.image} src={image} alt="" />}
      <p className={style.text}>{player_name}</p>
    </div>
  )
}
