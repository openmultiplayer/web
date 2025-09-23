import React, { useState, useMemo, useEffect } from "react";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
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
  };

  const handleAnimationChange = (animationName: string) => {
    setSelectedAnimation(animationName);
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
              open.mp Animations Viewer
            </Heading>

            <div className={styles.animationDisplay}>
              <div className={styles.controls}>
                <div className={styles.dropdownContainer}>
                  <label htmlFor="library-select" className={styles.label}>
                    Library:
                  </label>
                  <select
                    id="library-select"
                    value={selectedLibrary}
                    onChange={(e) => handleLibraryChange(e.target.value)}
                    className={styles.select}
                  >
                    <option value="">Select a library...</option>
                    {libraries.map((library) => (
                      <option key={library} value={library}>
                        {library}
                      </option>
                    ))}
                  </select>
                </div>

                <div className={styles.dropdownContainer}>
                  <label htmlFor="animation-select" className={styles.label}>
                    Animation:
                  </label>
                  <select
                    id="animation-select"
                    value={selectedAnimation}
                    onChange={(e) => handleAnimationChange(e.target.value)}
                    className={styles.select}
                    disabled={!selectedLibrary}
                  >
                    <option value="">Select an animation...</option>
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
                          <strong>Index:</strong> {currentAnimation.index}
                        </div>
                        <div className={styles.detailItem}>
                          <strong>Frames:</strong> {currentAnimation.frames}
                        </div>
                        <div className={styles.detailItem}>
                          <strong>Duration:</strong> {currentAnimation.duration}{" "}
                          seconds
                        </div>
                        <div className={styles.detailItem}>
                          <strong>Description:</strong>{" "}
                          {currentAnimation.description}
                        </div>
                        {currentAnimation.notes && (
                          <div className={styles.detailItem}>
                            <strong>Notes:</strong> {currentAnimation.notes}
                          </div>
                        )}
                        <div className={styles.creditsInDetails}>
                          <p>
                            Video credits:{" "}
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
                    <Heading as="h3">Usage Examples:</Heading>
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
                    Select an animation from the dropdown above to see the
                    preview.
                  </p>
                </div>
              )}

              {!selectedLibrary && (
                <div className={styles.placeholder}>
                  <p>
                    Browse and preview all available animations.
                    <br />
                    These are used by ApplyAnimation/ApplyActorAnimation
                    functions.
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
