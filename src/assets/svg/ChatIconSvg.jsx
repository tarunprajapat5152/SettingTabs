import * as React from 'react';
import Svg, {Mask, Path, G} from 'react-native-svg';
const ChatIconSvg = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Mask
      id="a"
      width={20}
      height={19}
      x={2}
      y={2}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'luminance',
      }}>
      <Path
        fill="#fff"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 19.5V4c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1H5.5L3 19.5Z"
      />
      <Path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 7h8M8 10h8M8 13h4"
      />
    </Mask>
    <G mask="url(#a)">
      <Path fill="#268F8C" d="M24 0H0v24h24V0Z" />
    </G>
  </Svg>
);
export default ChatIconSvg;
