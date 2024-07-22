import style from './style.module.scss'
import { Player } from '@/entities/player'
import { useGetPlayersListQuery } from '@/shared/redux/hooks'
import { NoPlayers } from '@/entities/no_players'
import { useEffect } from 'react'
export const PlayerList = () => {
  const { data: playersData, refetch } = useGetPlayersListQuery()
  useEffect(() => {
    const interval = setInterval(() => {
      refetch()
    }, 10000) // 15 seconds

    return () => clearInterval(interval) // Cleanup on component unmount
  }, [])
  const containerClass = `${style.container} ${!playersData || playersData.data.length === 0 ? style.hidden : ''}`
  console.log(containerClass)
  return (
    <div className={containerClass}>
      <div className={style.subcontainer}>
        <span className={style.heading}>Player list:</span>
        <div className={style.grid}>
          {playersData !== undefined ? (
            playersData.data.map((playerName: string, index: number) => (
              <Player key={index} player_name={playerName} has_image={true} />
            ))
          ) : (
            <NoPlayers />
          )}
        </div>
      </div>
    </div>
  )
}
