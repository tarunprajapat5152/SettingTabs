import * as React from "react"
import Svg, { Path } from "react-native-svg"

function AttachmentIconSvg(props) {
  return (
    <Svg
      width={28}
      height={31}
      viewBox="0 0 28 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M3.088 16.279L14.227 5.14a5.774 5.774 0 118.166 8.168L9.03 26.675a2.627 2.627 0 11-3.715-3.715l11.88-11.88a1.575 1.575 0 00-2.226-2.226l-11.88 11.88a5.777 5.777 0 008.17 8.169l13.361-13.367A8.925 8.925 0 0012 2.916L.861 14.05a1.575 1.575 0 002.226 2.226"
        fill="#268F8C"
      />
    </Svg>
  )
}

export default AttachmentIconSvg