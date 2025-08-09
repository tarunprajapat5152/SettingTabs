import * as React from "react"
import Svg, { Path } from "react-native-svg"

function CrossIconSvg(props) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1 15l7-7m0 0l7-7M8 8L1 1m7 7l7 7"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default CrossIconSvg
