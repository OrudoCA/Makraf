import style from './style.module.scss'
import { PlayerList } from '../player_list'

export const PlayerInfo = () => {
  return (
    <div className={style.container}>
      <div className={style.players}>
        <PlayerList />
      </div>
    </div>
  )
}
