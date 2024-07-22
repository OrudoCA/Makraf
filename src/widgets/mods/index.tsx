import { Pchola } from '@/entities/pchola'
import style from './style.module.scss'
import { Button } from '@/entities/button'
import { config } from '@/shared/config'

export const ModInfo = () => {
  console.log(config.VITE_API_API_URL)
  return (
    <div className={style.container}>
      <div className={style.mods}>
        <h6>Client-side mods:</h6>
        <div className={style.buttons}>
          <Button
            text=".ZIP"
            svg="zip"
            path="https://cdn.orudo.ru/ORUDOCRAFT/modpacks/Full.zip"
          />
          <Button
            text="MultiMC"
            svg="mmc"
            path="https://cdn.orudo.ru/ORUDOCRAFT/mmc/ORUDOCRAFT.zip"
          />
          <Button
            text=".MRPACK"
            svg="mrpack"
            path="https://cdn.orudo.ru/ORUDOCRAFT/modrinth/ORUDOCRAFT.mrpack"
          />
        </div>
      </div>
      <Pchola />
    </div>
  )
}
