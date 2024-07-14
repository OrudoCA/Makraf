import style from './style.module.scss'
import logo from '@/shared/images/server_logo.svg'

export const ServerInfo = () => {
  return (
    <div className={style.container}>
      <div className={style.logo}>
        <img src={logo} alt="" />
      </div>

      <div className={style.info}>
        <h6>ORUDOCRAFT</h6>
        <p>Status:</p>
        <p>IP:</p>
        <p>Version:</p>
      </div>
    </div>
  )
}
