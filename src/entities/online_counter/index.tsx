import style from './style.module.scss'

export const OnlineCounter = () => {
  return (
    <div className={style.container}>
      <h6>Текущий онлайн:</h6>
      <span>69 / 69</span>
    </div>
  )
}
