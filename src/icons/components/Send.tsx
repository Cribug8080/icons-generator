import * as React from "react";
import { IconProps } from "../../types";
import { IconWrapper } from "../IconWrapper";

const Send = (allProps: IconProps) => {
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
            d="M11.181 6.053a.376.376 0 00-.034-.5.365.365 0 00-.495-.015l-6.614 5.694L.545 9.864a.857.857 0 01-.543-.748.859.859 0 01.445-.811l14.5-8.218a.707.707 0 01.733.033c.22.148.342.406.317.671l-1.272 13.415a.89.89 0 01-.416.675.869.869 0 01-.784.066l-4.251-1.665-2.67 2.53a.684.684 0 01-.746.13.7.7 0 01-.413-.645V13.31l5.736-7.257z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default Send;
