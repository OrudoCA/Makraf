import style from './style.module.scss'
import { ServerInfo } from '@/entities/server_info'
import { OnlineCounter } from '@/entities/online_counter'
import {
  useGetPlayersCountQuery,
  useGetStatusQuery,
} from '@/shared/redux/hooks'

export const Server = () => {
  const { data: status } = useGetStatusQuery()
  const { data: players } = useGetPlayersCountQuery()

  return (
    <div className={style.info}>
      <div className={style.info_container}>
        <ServerInfo status={status} ip="mc.orudo.ru" version="1.20.6" />
      </div>
      <div className={style.online_container}>
        <OnlineCounter count={players} />
      </div>
    </div>
  )
}
