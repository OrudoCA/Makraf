import style from './style.module.scss'
import { PlayersCountResponse } from '@/shared/redux/slices/types'
interface OnlineProps {
  count?: PlayersCountResponse
}

export const OnlineCounter = ({ count }: OnlineProps) => {
  return (
    <div className={style.container}>
      <span id={style.text_container}>
        <h6>Current players:</h6>
      </span>
      <span id={style.text_container}>
        <span>{count?.count}</span>
      </span>
    </div>
  )
}
