import * as React from "react";
import { IconProps } from "../../types";
import { IconWrapper } from "../IconWrapper";

const Group = (allProps: IconProps) => {
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.5 0A1.5 1.5 0 000 1.5v4A1.5 1.5 0 001.5 7h4A1.5 1.5 0 007 5.5v-4A1.5 1.5 0 005.5 0h-4zm0 9A1.5 1.5 0 000 10.5v4A1.5 1.5 0 001.5 16h4A1.5 1.5 0 007 14.5v-4A1.5 1.5 0 005.5 9h-4zM9 10.5A1.5 1.5 0 0110.5 9h4a1.5 1.5 0 011.5 1.5v4a1.5 1.5 0 01-1.5 1.5h-4A1.5 1.5 0 019 14.5v-4zM10.5 0A1.5 1.5 0 009 1.5v4A1.5 1.5 0 0010.5 7h4A1.5 1.5 0 0016 5.5v-4A1.5 1.5 0 0014.5 0h-4z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default Group;
