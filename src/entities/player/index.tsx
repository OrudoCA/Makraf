import style from './style.module.scss'
interface PlayerProps {
  image_path: string
  player_name: string
}

export const Player = ({ image_path, player_name }: PlayerProps) => {
  return (
    <div className={style.container}>
      <img className={style.image} src={image_path} alt="" />
      <p className={style.text}>{player_name}</p>
    </div>
  )
}
