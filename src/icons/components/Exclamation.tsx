import * as React from "react";
import { IconProps } from "../../types";
import { IconWrapper } from "../IconWrapper";

const Exclamation = (allProps: IconProps) => {
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
            d="M8 0a8.01 8.01 0 018 8 8 8 0 11-8-8zm-.014 10c-.296 0-.553.1-.77.303-.218.202-.327.471-.327.808 0 .317.109.582.326.794.218.212.475.317.771.317.297 0 .558-.103.785-.31.227-.207.34-.474.34-.8 0-.347-.116-.619-.347-.816A1.169 1.169 0 007.986 10zm1.125-5.556c0-1.333-2.222-1.333-2.222 0 0 1.334.483 4.445 1.111 4.445s1.111-3.111 1.111-4.445z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default Exclamation;
