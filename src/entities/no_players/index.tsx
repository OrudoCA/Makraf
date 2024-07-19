import style from './style.module.scss'

export const NoPlayers = () => {
  return (
    <span className={style.container}>
      <p>No players yet :c</p>
    </span>
  )
}
