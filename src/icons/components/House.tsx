import * as React from "react";
import { IconProps } from "../../types";
import { IconWrapper } from "../IconWrapper";

const House = (allProps: IconProps) => {
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
            d="M15.825 6.504l-2.361-2.098V.866c0-.158-.12-.287-.265-.287l-2.1-.001c-.146 0-.266.13-.266.288V2.07L8.903.354a1.331 1.331 0 00-1.807 0L3.571 3.487.176 6.504a.537.537 0 00-.147.574c.068.21.243.343.448.343H1.87v7.406c0 .645.485 1.173 1.078 1.173h10.1c.594 0 1.08-.527 1.08-1.173V7.422h1.394c.205 0 .38-.134.448-.343a.538.538 0 00-.147-.575z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default House;
