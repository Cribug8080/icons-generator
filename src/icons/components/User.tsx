import * as React from "react";
import { IconProps } from "../../types";
import { IconWrapper } from "../IconWrapper";

const User = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      icon={
        <svg
          width="inherit"
          height="inherit"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M7.195 16H8.862C11.75 16 14 15.862 14 12.861c0-2.67-1.777-4.928-4.25-5.673C11 6.582 11.833 5.26 11.833 3.8 11.833 1.707 10.14 0 8 0 5.889 0 4.167 1.68 4.167 3.8A3.79 3.79 0 006.25 7.188C3.805 7.93 2 10.189 2 12.86 2.056 15.862 4.307 16 7.195 16z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default User;
