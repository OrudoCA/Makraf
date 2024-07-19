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
    }, 5000) // 15 seconds

    return () => clearInterval(interval) // Cleanup on component unmount
  }, [])
  return (
    <div className={style.container}>
      <span className={style.heading}>Player list:</span>
      <div className={style.grid}>
        {playersData !== undefined && playersData.data.length ? (
          playersData.data.map((playerName: string, index: number) => (
            <Player
              key={index}
              image_path={`src/shared/images/player.svg`}
              player_name={playerName}
              has_image={true}
            />
          ))
        ) : (
          <NoPlayers />
        )}
      </div>
    </div>
  )
}
