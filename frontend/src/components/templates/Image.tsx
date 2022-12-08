/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { trim } from "lodash";
import React, { FC } from "react";

const Img: FC<
  React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
> = (props) => {
  const { src } = props;
  if (src?.startsWith("http")) {
    return <img {...props} />;
  }

  const path = trim(src, "/");

  return <img {...props} src={`https://assets.open.mp/assets/${path}`} />;
};

export default Img;
