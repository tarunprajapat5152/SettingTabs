import * as React from "react"
import Svg, { Circle } from "react-native-svg"

function RadioCheckIconSvg(props) {
  return (
    <Svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={9} cy={9} r={8} stroke="#268F8C" strokeWidth={2} />
      <Circle cx={9} cy={9} r={4} fill="#268F8C" />
    </Svg>
  )
}

export default RadioCheckIconSvg