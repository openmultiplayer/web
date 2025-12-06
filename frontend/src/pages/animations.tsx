import React, { useState, useMemo, useEffect } from "react";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import Translate from '@docusaurus/Translate';
import {
  animations,
  getLibraries,
  getAnimationsByLibrary,
  getVideoPath,
} from "@site/src/data/animations";
import styles from "./animations.module.css";

const AnimationsPage = () => {
  const [selectedLibrary, setSelectedLibrary] = useState<string>("");
  const [selectedAnimation, setSelectedAnimation] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const lib = params.get("library");
      const anim = params.get("animation");

      if (lib && anim) {
        setSelectedLibrary(lib);
        setSelectedAnimation(anim);
      }
    }
  }, []);

  const libraries = useMemo(() => getLibraries(), []);
  const availableAnimations = useMemo(() => {
    if (!selectedLibrary) return [];
    return getAnimationsByLibrary(selectedLibrary);
  }, [selectedLibrary]);

  const currentAnimation = useMemo(() => {
    if (!selectedLibrary || !selectedAnimation) return null;
    return animations.find(
      (anim) =>
        anim.library === selectedLibrary && anim.name === selectedAnimation
    );
  }, [selectedLibrary, selectedAnimation]);

  const handleLibraryChange = (library: string) => {
    setSelectedLibrary(library);
    setSelectedAnimation("");

    // Update URL
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      if (library) {
        url.searchParams.set("library", library);
        url.searchParams.delete("animation");
      } else {
        url.searchParams.delete("library");
        url.searchParams.delete("animation");
      }
      window.history.pushState({}, "", url);
    }
  };

  const handleAnimationChange = (animationName: string) => {
    setSelectedAnimation(animationName);

    // Update URL
    if (typeof window !== "undefined" && selectedLibrary) {
      const url = new URL(window.location.href);
      url.searchParams.set("library", selectedLibrary);
      if (animationName) {
        url.searchParams.set("animation", animationName);
      } else {
        url.searchParams.delete("animation");
      }
      window.history.pushState({}, "", url);
    }
  };

  return (
    <Layout
      title="Animations"
      description="Interactive open.mp (SA-MP) animations viewer with video previews"
    >
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--12">
            <Heading as="h1" className="text--center margin-bottom--lg">
              <Translate id="animations.title" description="Animations page title">
                open.mp Animations Viewer
              </Translate>
            </Heading>

            <div className={styles.animationDisplay}>
              <div className={styles.controls}>
                <div className={styles.dropdownContainer}>
                  <label htmlFor="library-select" className={styles.label}>
                    <Translate id="animations.library" description="Library label">Library:</Translate>
                  </label>
                  <select
                    id="library-select"
                    value={selectedLibrary}
                    onChange={(e) => handleLibraryChange(e.target.value)}
                    className={styles.select}
                  >
                    <option value=""><Translate id="animations.selectLibrary" description="Select library option">Select a library...</Translate></option>
                    {libraries.map((library) => (
                      <option key={library} value={library}>
                        {library}
                      </option>
                    ))}
                  </select>
                </div>

                <div className={styles.dropdownContainer}>
                  <label htmlFor="animation-select" className={styles.label}>
                    <Translate id="animations.animation" description="Animation label">Animation:</Translate>
                  </label>
                  <select
                    id="animation-select"
                    value={selectedAnimation}
                    onChange={(e) => handleAnimationChange(e.target.value)}
                    className={styles.select}
                    disabled={!selectedLibrary}
                    key={selectedLibrary}
                  >
                    <option value=""><Translate id="animations.selectAnimation" description="Select animation option">Select an animation...</Translate></option>
                    {availableAnimations.map((animation) => (
                      <option key={animation.name} value={animation.name}>
                        {animation.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {currentAnimation && (
                <>
                  <div className={styles.topSection}>
                    <div className={styles.videoContainer}>
                      <div className={styles.videoWrapper}>
                        <video
                          src={getVideoPath(
                            currentAnimation.library,
                            currentAnimation.name
                          )}
                          className={styles.animationVideo}
                          controls
                          autoPlay
                          loop
                          muted
                          playsInline
                          onError={(e) => {
                            const target = e.target as HTMLVideoElement;
                            target.style.display = "none";
                            const errorDiv = document.createElement("div");
                            errorDiv.className = styles.errorMessage;
                            errorDiv.textContent = "Video not available";
                            target.parentNode?.appendChild(errorDiv);
                          }}
                        />
                      </div>
                    </div>

                    <div className={styles.animationInfo}>
                      <div className={styles.animationDetails}>
                        <div className={styles.detailItem}>
                          <strong><Translate id="animations.index" description="Index label">Index:</Translate></strong> {currentAnimation.index}
                        </div>
                        <div className={styles.detailItem}>
                          <strong><Translate id="animations.frames" description="Frames label">Frames:</Translate></strong> {currentAnimation.frames}
                        </div>
                        <div className={styles.detailItem}>
                          <strong><Translate id="animations.duration" description="Duration label">Duration:</Translate></strong> {currentAnimation.duration}{" "}
                          <Translate id="animations.seconds" description="Seconds label">seconds</Translate>
                        </div>
                        <div className={styles.detailItem}>
                          <strong><Translate id="animations.description" description="Description label">Description:</Translate></strong>{" "}
                          {currentAnimation.description}
                        </div>
                        {currentAnimation.notes && (
                          <div className={styles.detailItem}>
                            <strong><Translate id="animations.notes" description="Notes label">Notes:</Translate></strong> {currentAnimation.notes}
                          </div>
                        )}
                        <div className={styles.creditsInDetails}>
                          <p>
                            <Translate id="animations.videoCredits" description="Video credits label">Video credits:</Translate>{" "}
                            <a
                              href="https://github.com/leamir/samp-animation-videos"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              leamir
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.codeExample}>
                    <Heading as="h3"><Translate id="animations.usageExamples" description="Usage examples heading">Usage Examples:</Translate></Heading>
                    <pre className={styles.codeBlock}>
                      <code>
                        {`// For players
ApplyAnimation(playerid, "${currentAnimation.library}", "${currentAnimation.name}", 4.1, false, false, false, false, 0);

// For actors
ApplyActorAnimation(actorid, "${currentAnimation.library}", "${currentAnimation.name}", 4.1, false, false, false, false, 0);`}
                      </code>
                    </pre>
                  </div>
                </>
              )}

              {selectedLibrary && !selectedAnimation && (
                <div className={styles.placeholder}>
                  <p>
                    <Translate id="animations.selectAnimationPrompt" description="Prompt to select animation">
                      Select an animation from the dropdown above to see the preview.
                    </Translate>
                  </p>
                </div>
              )}

              {!selectedLibrary && (
                <div className={styles.placeholder}>
                  <p>
                    <Translate id="animations.browsePrompt" description="Browse animations prompt">
                      Browse and preview all available animations.
                    </Translate>
                    <br />
                    <Translate id="animations.usedByFunctions" description="Used by functions note">
                      These are used by ApplyAnimation/ApplyActorAnimation functions.
                    </Translate>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AnimationsPage;
