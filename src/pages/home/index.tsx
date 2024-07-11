import style from './style.module.scss'
import { MainVersion } from '@/widgets/main/version'
export const HomePage = () => {
  const version = '1.21'
  return (
    <>
      <div className={style.main}>
        <div className={style.container}>
          <img
            className={style.logo}
            src="/src/shared/images/title.png"
            alt=""
          />
          <hr className={style.line} />
          <MainVersion version={version} />
        </div>
        <img
          className={style.arrow}
          src="/src/shared/images/arrow.svg"
          alt=""
        />
      </div>
      <div className={style.blocks}>
        <div className={style.server}></div>
        <div className={style.players}></div>
        <div className={style.mods}></div>
      </div>
    </>
  )
}
