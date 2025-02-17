import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import Image from "@theme/ThemedImage";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

type FeatureItem = {
  title: string;
  Img: string;
  description: ReactNode;
  link: string;
  linkText: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Fully backwards compatible with existing scripts and clients",
    Img: "images/assets/f1.png",
    description: (
      <>
        Got an old AMX lying about? Load it up on the open.mp server straight
        out of the box and join your friends playing on the SA:MP client. Then
        when you want to enhance your code try our...
      </>
    ),
    link: "/docs",
    linkText: "Getting Started",
  },
  {
    title: "New and improved scripting system",
    Img: "images/assets/f5.png",
    description: (
      <>
        We've stuck with pawn, but with a new compiler engineered to make your
        code more robust, and more functions to manipulate the server and
        client. If that's still not enough there's an...
      </>
    ),
    link: "https://github.com/openmultiplayer/omp-stdlib/#openmp-includes",
    linkText: "Learn about the improvements",
  },
  {
    title: "Community driven development",
    Img: "images/assets/f2.png",
    description: (
      <>
        The server is fully open source, and we welcome all contributions big or
        small. Help write the next version, or just post about any problems you
        find; despite our attempts to have...
      </>
    ),
    link: "https://github.com/openmultiplayer/open.mp",
    linkText: "Visit the GitHub repo",
  },
  {
    title: "Extensible C++ API",
    Img: "images/assets/f4.png",
    description: (
      <>
        Get access to all the server features available in pawn, plus the
        universe of C++ libraries and frameworks. Once you've mastered this why
        not help improve the server via our...
      </>
    ),
    link: "https://github.com/openmultiplayer/open.mp-sdk",
    linkText: "Check out SDK repository",
  },
];

function Feature({ title, Img, description, link, linkText }: FeatureItem) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: 500,
        flexGrow: 1,
      }}
    >
      <div className="text--center">
        <Image
          className={styles.featureSvg}
          sources={{ light: Img, dark: Img }}
        />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", flex: 1 }} />
      <Link
        style={{ alignSelf: "center" }}
        className={clsx("button button--primary button--md", styles.button)}
        to={link}
      >
        {linkText}
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container" style={{}}>
        <div className="row" style={{ justifyContent: "space-around" }}>
          {FeatureList.filter((_, index) => index < 2).map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div
          className="row margin-top--lg"
          style={{ justifyContent: "space-around" }}
        >
          {FeatureList.filter((_, index) => index >= 2).map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
