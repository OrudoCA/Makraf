import style from './style.module.scss'
interface ButtonProps {
  text: string
  zip: boolean
  path: string
}
export const Button = ({ text, zip, path }: ButtonProps) => {
  return (
    <a className={style.container} href={path}>
      <span className={style.text_container}>
        <p>{text}</p>
      </span>
      {!zip && (
        <svg
          width="67"
          height="67"
          viewBox="0 0 67 67"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.8373 30.628V25.4916H30.9737V30.628H25.8373Z"
            fill="url(#paint0_linear_1454_85)"
            id="svg_red"
          />
          <path
            d="M36.1101 30.628V33.1962H38.6783V40.9009H36.1101V38.3326H30.9737V40.9009H28.4055V33.1962H30.9737V30.628H36.1101Z"
            fill="url(#paint0_linear_1454_85)"
            id="svg_red"
          />
          <path
            d="M36.1101 30.628V25.4916H41.2466V30.628H36.1101Z"
            fill="url(#paint0_linear_1454_85)"
            id="svg_red"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M66.797 33.5255C66.797 51.7099 52.0556 66.4513 33.8712 66.4513C15.6867 66.4513 0.945312 51.7099 0.945312 33.5255C0.945312 15.341 15.6867 0.599609 33.8712 0.599609C52.0556 0.599609 66.797 15.341 66.797 33.5255ZM43.8148 20.3551H23.269C22.5879 20.3551 21.9347 20.6257 21.453 21.1073C20.9714 21.589 20.7008 22.2422 20.7008 22.9233V43.4691C20.7008 44.1502 20.9714 44.8035 21.453 45.2851C21.9347 45.7667 22.5879 46.0373 23.269 46.0373H43.8148C44.4959 46.0373 45.1492 45.7667 45.6308 45.2851C46.1124 44.8035 46.383 44.1502 46.383 43.4691V22.9233C46.383 22.2422 46.1124 21.589 45.6308 21.1073C45.1492 20.6257 44.4959 20.3551 43.8148 20.3551Z"
            fill="url(#paint0_linear_1454_85)"
            id="svg_red"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1454_85"
              x1="33.8712"
              y1="0.599609"
              x2="33.8712"
              y2="66.4513"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D56D4D" />
              <stop offset="1" stopColor="#C44C4F" />
            </linearGradient>
          </defs>
        </svg>
      )}
      {zip && (
        <svg
          width="43"
          height="44"
          viewBox="0 0 43 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.291 22.0611H27.3054V20.0788H25.291V18.0966H23.2767V20.0788H25.291V22.0611Z"
            fill="url(#paint0_linear_1454_40)"
            id="svg_red"
          />
          <path
            d="M25.291 24.0433V22.0611H23.2767V24.0433H25.291Z"
            fill="url(#paint0_linear_1454_40)"
            id="svg_red"
          />
          <path
            d="M25.291 26.0256H27.3054V24.0433H25.291V26.0256Z"
            fill="url(#paint0_linear_1454_40)"
            id="svg_red"
          />
          <path
            d="M25.291 26.0256H23.2767V28.0078H25.291V26.0256Z"
            fill="url(#paint0_linear_1454_40)"
            id="svg_red"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.4766 43.7051C33.3119 43.7051 42.9063 34.1107 42.9063 22.2754C42.9063 10.4401 33.3119 0.845703 21.4766 0.845703C9.64127 0.845703 0.046875 10.4401 0.046875 22.2754C0.046875 34.1107 9.64127 43.7051 21.4766 43.7051ZM21.2623 16.1144H29.3198C30.4277 16.1144 31.3342 17.0064 31.3342 18.0966V28.0078C31.3342 29.0981 30.4277 29.9901 29.3198 29.9901H13.2047C12.0968 29.9901 11.1903 29.0981 11.1903 28.0078L11.2004 16.1144C11.2004 15.0241 12.0968 14.1321 13.2047 14.1321H19.2479L21.2623 16.1144Z"
            fill="url(#paint0_linear_1454_40)"
            id="svg_red"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1454_40"
              x1="21.4766"
              y1="0.845703"
              x2="21.4766"
              y2="43.7051"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D56D4D" />
              <stop offset="1" stopColor="#C44C4F" />
            </linearGradient>
          </defs>
        </svg>
      )}
    </a>
  )
}
