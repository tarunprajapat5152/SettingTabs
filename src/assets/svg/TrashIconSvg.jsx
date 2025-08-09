import * as React from "react"
import Svg, { Path } from "react-native-svg"

function TrashIconSvg(props) {
  return (
    <Svg
      width={16}
      height={18}
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M3 18c-.55 0-1.02-.196-1.412-.587A1.93 1.93 0 011 16V3H0V1h5V0h6v1h5v2h-1v13c0 .55-.196 1.021-.587 1.413A1.92 1.92 0 0113 18H3zm2-4h2V5H5v9zm4 0h2V5H9v9z"
        fill="#FA493F"
      />
    </Svg>
  )
}

export default TrashIconSvg