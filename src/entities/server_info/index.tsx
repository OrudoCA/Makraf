import style from './style.module.scss'
import logo from '@/shared/images/server_logo.svg'
import { StatusResponse } from '@/shared/redux/slices/types'
type ServerInfoProps = {
  status?: StatusResponse
  ip: string
  version: string
}

export const ServerInfo = ({ status, ip, version }: ServerInfoProps) => {
  return (
    <div className={style.container}>
      <div className={style.logo}>
        <img src={logo} alt="" />
      </div>

      <div className={style.info}>
        <span className={style.text_container}>
          <h6>ORUDOCRAFT</h6>
        </span>
        <p>Status: {status ? <>Online</> : <>Offline</>}</p>
        <p>IP: {ip}</p>
        <p>Version: {version}</p>
      </div>
    </div>
  )
}
