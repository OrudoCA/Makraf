import style from './style.module.scss'
import { ServerInfo } from '@/entities/server_info'
import { OnlineCounter } from '@/entities/online_counter'

export const Server = () => {
  return (
    <div className={style.info}>
      <div className={style.info_container}>
        <ServerInfo />
      </div>
      <div className={style.online_container}>
        <OnlineCounter />
      </div>
    </div>
  )
}
