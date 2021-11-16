/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
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
  return <img src={`https://assets.open.mp/assets/${props.src}`} {...props} />;
};

export default Img;
