import { Heading, Spinner } from "@chakra-ui/react";
import React, { FC } from "react";

const LoadingBanner: FC = () => {
  return (
    <section>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="purple.500"
        size="xl"
      />
      <Heading fontStyle="italic" size="lg">
        Following the damn train...
      </Heading>

      <style jsx>{`
        section {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100%;
          gap: 1em;
        }
      `}</style>
    </section>
  );
};

export default LoadingBanner;
