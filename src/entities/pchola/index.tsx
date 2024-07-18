import style from './style.module.scss'
interface PcholaProps {
  pchola_path: string
}

export const Pchola = ({ pchola_path }: PcholaProps) => {
  return <img className={style.pchola} src={pchola_path} alt="" />
}
