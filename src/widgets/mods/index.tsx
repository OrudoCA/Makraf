import { Pchola } from '@/entities/pchola'
import style from './style.module.scss'

export const ModInfo = () => {
  return (
    <div className={style.container}>
      <div className={style.mods}></div>
      <Pchola pchola_path="src/shared/images/pchola.svg" />
    </div>
  )
}
