import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const RatingIconSvg = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      fill="#FBC21F"
      d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14Zm-3.42 14-.95-4.08 3.16-2.73-4.17-.36L12 6l-1.62 3.84-4.17.36 3.16 2.73L8.42 17 12 14.84 15.58 17Z"
    />
  </Svg>
);

export default RatingIconSvg;
