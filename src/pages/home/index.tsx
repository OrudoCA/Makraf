import style from './style.module.scss'
import { Main } from '@/widgets/main'
import { Server } from '@/widgets/info'
import { ModInfo } from '@/widgets/mods'
import { PlayerInfo } from '@/widgets/players'
export const HomePage = () => {
  return (
    <>
      <Main />
      <div className={style.blocks}>
        <Server />
        <PlayerInfo />
        <ModInfo />
      </div>
    </>
  )
}
