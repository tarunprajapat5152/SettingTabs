import * as React from "react"
import Svg, { Path } from "react-native-svg"

function RightCircleIconSvg(props) {
  return (
    <Svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M11.052 13.829l1.414 1.414L16.71 11l-4.243-4.243-1.414 1.415L12.88 10H5.343v2h7.537l-1.828 1.829z"
        fill="#268F8C"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.778 18.778c4.296-4.296 4.296-11.26 0-15.556-4.296-4.296-11.26-4.296-15.556 0-4.296 4.296-4.296 11.26 0 15.556 4.296 4.296 11.26 4.296 15.556 0zm-1.414-1.414A9 9 0 104.636 4.636a9 9 0 0012.728 12.728z"
        fill="#268F8C"
      />
    </Svg>
  )
}

export default RightCircleIconSvg
