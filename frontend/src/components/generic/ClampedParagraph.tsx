import { FC } from "react";

type Props = {
  lines?: number;
};

const ClampedParagraph: FC<Props> = ({ children, lines = 1 }) => {
  return (
    <>
      <p>{children}</p>

      <style jsx>{`
        p {
          margin: 0.1em;
          text-overflow: ellipsis;
          overflow: hidden;

          display: -webkit-box;
          -webkit-line-clamp: ${lines};
          -webkit-box-orient: vertical;
          max-lines: ${lines};
          line-clamp: ${lines};
        }
      `}</style>
    </>
  );
};

export default ClampedParagraph;
