import style from './style.module.scss'
interface ButtonProps {
  text: string
  image_path: string
}
export const Button = ({ text, image_path }: ButtonProps) => {
  return (
    <div className={style.container}>
      <span className={style.text_container}>
        <p>{text}</p>
      </span>
      <img src={image_path} alt="" />
    </div>
  )
}
