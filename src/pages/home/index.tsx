import style from './style.module.scss'
import { Main } from '@/widgets/main'
import { Server } from '@/widgets/info'
import { ModInfo } from '@/widgets/mods'
import { PlayerInfo } from '@/widgets/players'
import { Pchola } from '@/entities/pchola'
export const HomePage = () => {
  return (
    <>
      <Main />
      <div className={style.container}>
        <Server />
        <PlayerInfo />
        <ModInfo />
      </div>
    </>
  )
}
