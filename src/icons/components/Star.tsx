import * as React from "react";
import { IconProps } from "../../types";
import { IconWrapper } from "../IconWrapper";

const Star = (allProps: IconProps) => {
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
            d="M11.756 9.619l3.02-2.61c.427-.37.206-1.096-.353-1.126l-3.889-.248a.614.614 0 01-.53-.401l-1.43-3.829a.6.6 0 00-1.134 0L6.011 5.22a.614.614 0 01-.53.401l-3.904.248c-.56.03-.78.756-.353 1.126l3.02 2.594a.668.668 0 01.206.649l-.987 3.967c-.133.556.442 1.004.913.695l3.285-2.208a.556.556 0 01.648 0l3.3 2.208c.47.309 1.046-.139.913-.695l-.987-3.953a.652.652 0 01.222-.632z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default Star;
