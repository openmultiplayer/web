import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import Image from "@theme/ThemedImage";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

import Translate from '@docusaurus/Translate';

type FeatureItem = {
  title: ReactNode;
  Img: string;
  description: ReactNode;
  link: string;
  linkText: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: (
      <Translate id="feature.fullyBackwardsCompatible.title" description="Feature title: Fully backwards compatible">
        Fully backwards compatible with existing scripts and clients
      </Translate>
    ),
    Img: "images/assets/f1.png",
    description: (
      <Translate id="feature.fullyBackwardsCompatible.description" description="Feature description: Fully backwards compatible">
        Got an old AMX lying about? Load it up on the open.mp server straight 
        out of the box and join your friends playing on the SA:MP client. Then 
        when you want to enhance your code look in our docs.
      </Translate>
    ),
    link: "/docs",
    linkText: (
      <Translate id="feature.fullyBackwardsCompatible.linkText" description="Link text: Getting Started">
        Getting Started
      </Translate>
    ),
  },
  {
    title: (
      <Translate id="feature.scriptingSystem.title" description="Feature title: New and improved scripting system">
        New and improved scripting system
      </Translate>
    ),
    Img: "images/assets/f5.png",
    description: (
      <Translate id="feature.scriptingSystem.description" description="Feature description: New and improved scripting system">
        We've stuck with pawn, but with a new compiler engineered to make your 
        code more robust, and more functions to manipulate the server and 
        client.
      </Translate>
    ),
    link: "https://github.com/openmultiplayer/omp-stdlib/#openmp-includes",
    linkText: (
      <Translate id="feature.scriptingSystem.linkText" description="Link text: Learn about the improvements">
        Learn about the improvements
      </Translate>
    ),
  },
  {
    title: (
      <Translate id="feature.communityDevelopment.title" description="Feature title: Community driven development">
        Community driven development
      </Translate>
    ),
    Img: "images/assets/github.png",
    description: (
      <Translate id="feature.communityDevelopment.description" description="Feature description: Community driven development">
        The server is fully open source, and we welcome all contributions big 
        or small. Help write the next version, or just post about any problems you 
        find, despite our attempts to have perfect code, bugs happen and your feedback is valuable.
      </Translate>
    ),
    link: "https://github.com/openmultiplayer",
    linkText: (
      <Translate id="feature.communityDevelopment.linkText" description="Link text: Visit the GitHub organization">
        Visit the GitHub organization
      </Translate>
    ),
  },
  {
    title: (
      <Translate id="feature.cppApi.title" description="Feature title: Extensible C++ API">
        Extensible C++ API
      </Translate>
    ),
    Img: "images/assets/f4.png",
    description: (
      <Translate id="feature.cppApi.description" description="Feature description: Extensible C++ API">
        Get access to all the server features available in pawn, plus the 
        universe of C++ libraries and frameworks. Once you've mastered this why 
        not help improve the server via our open contribution process on GitHub.
      </Translate>
    ),
    link: "https://github.com/openmultiplayer/open.mp-sdk",
    linkText: (
      <Translate id="feature.cppApi.linkText" description="Link text: Check out SDK repository">
        Check out SDK repository
      </Translate>
    ),
  },
];

const Feature = ({ title, Img, description, link, linkText }: FeatureItem) => {
  return (
    <div className={styles.featureItem}>
      <div className={styles.featureImageContainer}>
        <Image
          className={styles.featureImage}
          sources={{ light: Img, dark: Img }}
          alt={`${title} illustration`}
        />
      </div>
      <div className={styles.featureContent}>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
      <div className={styles.featureFooter}>
        <Link
          className={clsx("button button--primary button--md", styles.button)}
          to={link}
        >
          {linkText}
        </Link>
      </div>
    </div>
  );
};

const HomepageFeatures = (): JSX.Element => {
  return (
    <section className={styles.featuresSection}>
      <div className="container">
        <div className={styles.featuresRow}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomepageFeatures;