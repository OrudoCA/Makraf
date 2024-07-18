import style from './style.module.scss'
interface MainVersionProps {
  version: string
}
export const MainVersion = ({ version }: MainVersionProps) => {
  return (
    <span className={style.container}>
      <p>Vanilla Minecraft Server on {version}</p>
    </span>
  )
}
