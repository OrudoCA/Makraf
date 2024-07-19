import style from './style.module.scss'
import { ServerInfo } from '@/entities/server_info'
import { OnlineCounter } from '@/entities/online_counter'
import {
  useGetPlayersCountQuery,
  useGetStatusQuery,
} from '@/shared/redux/hooks'
import { useEffect } from 'react'

export const Server = () => {
  const { data: status, refetch: refetchStatus } = useGetStatusQuery()
  const { data: players, refetch: refetchPlayers } =
    useGetPlayersCountQuery(undefined)

  useEffect(() => {
    const interval = setInterval(() => {
      refetchStatus()
      refetchPlayers()
    }, 5000)

    return () => clearInterval(interval) // Cleanup on component unmount
  }, [])

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
