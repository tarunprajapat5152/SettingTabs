import * as React from "react"
import Svg, { Path } from "react-native-svg"

function DownArrowSvg(props) {
  return (
    <Svg
      width={10}
      height={5}
      viewBox="0 0 10 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M0 0l5 5 5-5H0z" fill="#000" />
    </Svg>
  )
}

export default DownArrowSvg