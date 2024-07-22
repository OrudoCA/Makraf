import style from './style.module.scss'
import { Main } from '@/widgets/main'
import { Server } from '@/widgets/info'
import { ModInfo } from '@/widgets/mods'
import { PlayerList } from '@/widgets/player_list'
export const HomePage = () => {
  return (
    <>
      <Main />
      <div className={style.container}>
        <Server />
        <PlayerList />
        <ModInfo />
      </div>
    </>
  )
}
