import Image from "next/image";
import { WordmarkInverse } from "../components/logo";

const Page = () => (
  <>
    <section className="pa0 ma0">
      <div className="foreground flex">
        <WordmarkInverse />
      </div>
      <article className="pa0 ma0 bg-white">
        <div className="center measure pa4">
          <h1>Open Multiplayer</h1>

          <p>
            An upcoming multiplayer mod for Grand Theft Auto: San Andreas that
            will be fully backwards compatible with the existing multiplayer mod
            San Andreas Multiplayer.
          </p>

          <p>
            This means the existing SA:MP client and all existing SA:MP scripts
            will work with open.mp and, in addition to this, many bugs will also
            be fixed within the server software without the need for hacks and
            workarounds.
          </p>
        </div>
      </article>

      <article className="pa0 ma0 bg-white">
        <div className="center measure">
          <h1>more text</h1>

          <p>
            XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD
            XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD
          </p>

          <p>
            XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD
            XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD
          </p>
        </div>
      </article>

      <div className="background">
        <Image
          className="fixed"
          src="/img/hero-bg.jpg"
          width={1660}
          height={560}
          layout="responsive"
        />
      </div>
    </section>

    <style jsx>{`
      section {
        display: grid;
      }
      .foreground {
        grid-row: 1/2;
        grid-column: 1/2;
        z-index: 2;
      }
      .background {
        grid-row: 1/2;
        grid-column: 1/2;
        z-index: 0;
        height: 100%;
        width: 100%;
        position: fixed;
        max-height: 80vh;
        overflow: clip;
        top: 1;
      }
      article {
        grid-column: 1/2;
        z-index: 2;
      }
    `}</style>
  </>
);

export default Page;
