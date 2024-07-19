import style from './style.module.scss'
import { MainVersion } from '@/entities/version_info'
import title from '@/shared/images/title.png'
import arrow from '@/shared/images/arrow.svg'
export const Main = () => {
  let version = '1.20.6'
  return (
    <div className={style.main}>
      <div className={style.container}>
        <img className={style.logo} src={title} alt="" />
        <hr className={style.line} />
        <MainVersion version={version} />
      </div>
      <img className={style.arrow} src={arrow} alt="" />
    </div>
  )
}
