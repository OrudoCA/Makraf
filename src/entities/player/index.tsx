import style from './style.module.scss'
interface PlayerProps {
  image_path: string
  player_name: string
  has_image: boolean
}

export const Player = ({ image_path, player_name, has_image }: PlayerProps) => {
  return (
    <div className={style.container}>
      {has_image && <img className={style.image} src={image_path} alt="" />}
      <p className={style.text}>{player_name}</p>
    </div>
  )
}
