import * as React from "react";
import { IconProps } from "../../types";
import { IconWrapper } from "../IconWrapper";

const Bell = (allProps: IconProps) => {
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
          <g clipPath="url(#prefix__clip0_4_12)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.72 2.754c1.257 1.319 1.685 3.335.845 5.45 0 0-1.5 3.285-.607 4.656.042.049.489.597.285 1.187-.206.598-1.17.749-2.042.373l-9.456-4.075c-.872-.376-1.375-1.159-1.13-1.743.252-.604 1.066-.638 1.15-.641h.005c1.58-.263 3.019-3.567 3.019-3.567.971-1.95 2.83-3.097 4.713-3.059l.007-.026c.02-.08.04-.16.074-.237a1.792 1.792 0 012.36-.92 1.789 1.789 0 01.92 2.358c-.033.079-.077.145-.122.213l-.02.031zM6.055 15.849a1.79 1.79 0 01-.921-2.361 1.77 1.77 0 01.448-.61l2.98 1.306c.003.249-.04.502-.147.744a1.79 1.79 0 01-2.36.92z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="prefix__clip0_4_12">
              <path fill="#fff" d="M0 0h16v16H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  );
};

export default Bell;
