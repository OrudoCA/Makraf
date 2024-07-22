import style from './style.module.scss'
interface ButtonProps {
  text: string
  svg: string
  path: string
}
export const Button = ({ text, svg, path }: ButtonProps) => {
  return (
    <a className={style.container} href={path}>
      <span className={style.text_container}>
        <p>{text}</p>
      </span>
      {svg == 'mmc' && (
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
      {svg == 'zip' && (
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
      {svg == 'mrpack' && (
        <svg
          width="67"
          height="67"
          viewBox="0 0 67 67"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.1991 29.2451C26.6363 28.5038 32.8978 24.9648 33.7725 24.9648C34.6472 24.9648 40.9101 28.5037 41.3474 29.2451C41.7846 29.9864 41.7847 37.0645 41.3474 37.8058C40.9103 38.5472 34.6471 42.0862 33.7725 42.0862L33.7711 42.084V42.0862C32.8964 42.0862 26.6348 38.5473 26.1975 37.8059C25.7601 37.0647 25.7602 29.9866 26.1975 29.2452L26.2 29.2466L26.1991 29.2451Z"
            fill="url(#paint0_linear_1536_213)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M66.6955 33.5255C66.6955 51.7099 51.9541 66.4513 33.7696 66.4513C15.5852 66.4513 0.84375 51.7099 0.84375 33.5255C0.84375 15.341 15.5852 0.599609 33.7696 0.599609C51.9541 0.599609 66.6955 15.341 66.6955 33.5255ZM33.7698 16.404C32.0206 16.404 19.4958 23.482 18.6213 24.9648C17.7467 26.4476 17.7464 40.6034 18.621 42.0862C19.4956 43.569 32.0209 50.6469 33.7698 50.6469C34.6444 50.6469 38.2134 48.8777 41.6725 46.9228C45.1316 44.968 48.4811 42.8275 48.9183 42.0862C49.3556 41.3448 49.574 37.4352 49.574 33.5255C49.574 29.6158 49.356 25.7061 48.9186 24.9648C48.4813 24.2234 45.1318 22.0826 41.6727 20.1279C38.2135 18.173 34.6443 16.404 33.7698 16.404Z"
            fill="url(#paint1_linear_1536_213)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1536_213"
              x1="33.7696"
              y1="0.599609"
              x2="33.7696"
              y2="66.4513"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D56D4D" />
              <stop offset="1" stopColor="#C44C4F" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_1536_213"
              x1="33.7696"
              y1="0.599609"
              x2="33.7696"
              y2="66.4513"
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
