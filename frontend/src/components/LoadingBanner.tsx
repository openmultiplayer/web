import React from "react";
import Translate from "@docusaurus/Translate";

const LoadingBanner = () => {
  return (
    <section className="loading-banner">
      <div className="loading-banner-spinner"></div>
      <h2 className="loading-banner-heading">
        <Translate
          id="loadingBanner.followingTrain"
          description="Loading banner: Following the damn train"
        >
          Following the damn train...
        </Translate>
      </h2>
    </section>
  );
};

export default LoadingBanner;
