import { Pchola } from '@/entities/pchola'
import style from './style.module.scss'
import { Button } from '@/entities/button'

export const ModInfo = () => {
  return (
    <div className={style.container}>
      <div className={style.mods}>
        <h6>Client-side mods:</h6>
        <div className={style.buttons}>
          <Button text="Zip" image_path="src/shared/images/archive.svg" />
          <Button text="MultiMC" image_path="src/shared/images/multimc.svg" />
        </div>
        <a href="">*Mods info</a>
      </div>
      <Pchola pchola_path="src/shared/images/pchola.svg" />
    </div>
  )
}
