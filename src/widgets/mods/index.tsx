import { Pchola } from '@/entities/pchola'
import style from './style.module.scss'
import { Button } from '@/entities/button'
import { config } from '@/shared/config'

export const ModInfo = () => {
  return (
    <div className={style.container}>
      <div className={style.mods}>
        <h6>Client-side mods:</h6>
        <div className={style.buttons}>
          <Button text="Zip" zip={true} path={config.zipUrl} />
          <Button text="MultiMC" zip={false} path={config.multimcUrl} />
        </div>
        <a href="">*Mods info</a>
      </div>
      <Pchola />
    </div>
  )
}
