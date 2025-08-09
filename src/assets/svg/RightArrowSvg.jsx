import * as React from "react";
import Svg, { Path } from "react-native-svg";
const RightArrowSvg = (props) => (
  <Svg
    width={16}
    height={16}
    viewBox="0 0 8 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M0.726966 13.8879C0.609388 13.8879 0.489062 13.8415 0.398827 13.7512C0.218359 13.5708 0.218359 13.2754 0.398827 13.095L6.57578 6.91802L0.489061 0.8313C0.308593 0.650831 0.308593 0.355518 0.489061 0.17505C0.66953 -0.00541878 0.964843 -0.00541878 1.14531 0.17505L7.56289 6.58989C7.74336 6.77036 7.74336 7.06567 7.56289 7.24614L1.05781 13.7512C0.964844 13.8442 0.847279 13.8879 0.726966 13.8879Z"
      fill="black"
    />
  </Svg>
);
export default RightArrowSvg;
