import style from './style.module.scss'
import { MainVersion } from '@/entities/version_info'

export const Main = () => {
  let version = '52'
  return (
    <div className={style.main}>
      <div className={style.container}>
        <img className={style.logo} src="/src/shared/images/title.png" alt="" />
        <hr className={style.line} />
        <MainVersion version={version} />
      </div>
      <img className={style.arrow} src="/src/shared/images/arrow.svg" alt="" />
    </div>
  )
}
