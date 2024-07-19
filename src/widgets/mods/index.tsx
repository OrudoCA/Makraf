import { Pchola } from '@/entities/pchola'
import style from './style.module.scss'
import { Button } from '@/entities/button'
import archive from '@/shared/images/archive.svg'
import multimc from '@/shared/images/multimc.svg'

export const ModInfo = () => {
  return (
    <div className={style.container}>
      <div className={style.mods}>
        <h6>Client-side mods:</h6>
        <div className={style.buttons}>
          <Button text="Zip" zip={true} path="#" />
          <Button text="MultiMC" zip={false} path="#" />
        </div>
        <a href="">*Mods info</a>
      </div>
      <Pchola />
    </div>
  )
}
