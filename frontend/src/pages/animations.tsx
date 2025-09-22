import React, { useState, useMemo } from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import { animations, getLibraries, getAnimationsByLibrary, getGifPath, type Animation } from '@site/src/data/animations';
import styles from './animations.module.css';

const AnimationsPage: React.FC = () => {
  const [selectedLibrary, setSelectedLibrary] = useState<string>('');
  const [selectedAnimation, setSelectedAnimation] = useState<string>('');

  const libraries = useMemo(() => getLibraries(), []);
  const availableAnimations = useMemo(() => {
    if (!selectedLibrary) return [];
    return getAnimationsByLibrary(selectedLibrary);
  }, [selectedLibrary]);

  const currentAnimation = useMemo(() => {
    if (!selectedLibrary || !selectedAnimation) return null;
    return animations.find(anim => anim.library === selectedLibrary && anim.name === selectedAnimation);
  }, [selectedLibrary, selectedAnimation]);

  const handleLibraryChange = (library: string) => {
    setSelectedLibrary(library);
    setSelectedAnimation(''); // Reset animation selection
  };

  const handleAnimationChange = (animationName: string) => {
    setSelectedAnimation(animationName);
  };

  return (
    <Layout
      title="SA-MP / open.mp Animations"
      description="Interactive SA-MP and open.mp animations viewer with GIF previews"
    >
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--12">
            <Heading as="h1" className="text--center margin-bottom--lg">
              SA-MP / open.mp Animations Viewer
            </Heading>
            
            <div className={styles.description}>
              <p>
                Browse and preview all available animations.
                <br />
                These animations are used by the{' '}
                <code>ApplyAnimation/ApplyActorAnimation</code> function in scripting.
              </p>
              <div className={styles.notes}>
                <strong>Notes:</strong>
                <ul>
                  <li>Some animations may not be usable</li>
                  <li>Animations suffixed with <code>_O</code> are for objects and won't work on players</li>
                </ul>
              </div>
            </div>

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
              <div className={styles.animationDisplay}>
                <div className={styles.animationInfo}>
                  <Heading as="h2" className={styles.animationTitle}>
                    {currentAnimation.library} - {currentAnimation.name}
                  </Heading>
                  
                  <div className={styles.animationDetails}>
                    <div className={styles.detailItem}>
                      <strong>Index:</strong> {currentAnimation.index}
                    </div>
                    <div className={styles.detailItem}>
                      <strong>Frames:</strong> {currentAnimation.frames}
                    </div>
                    <div className={styles.detailItem}>
                      <strong>Duration:</strong> {currentAnimation.duration} seconds
                    </div>
                    <div className={styles.detailItem}>
                      <strong>Description:</strong> {currentAnimation.description}
                    </div>
                    {currentAnimation.notes && (
                      <div className={styles.detailItem}>
                        <strong>Notes:</strong> {currentAnimation.notes}
                      </div>
                    )}
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
                </div>

                <div className={styles.gifContainer}>
                  <Heading as="h3">Preview:</Heading>
                  <div className={styles.gifWrapper}>
                    <img
                      src={getGifPath(currentAnimation.library, currentAnimation.name)}
                      alt={`${currentAnimation.library} - ${currentAnimation.name} animation`}
                      className={styles.animationGif}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const errorDiv = document.createElement('div');
                        errorDiv.className = styles.errorMessage;
                        errorDiv.textContent = 'GIF not available';
                        target.parentNode?.appendChild(errorDiv);
                      }}
                    />
                  </div>
                </div>
              </div>
            )}

            {selectedLibrary && !selectedAnimation && (
              <div className={styles.placeholder}>
                <p>Select an animation from the dropdown above to see the preview.</p>
              </div>
            )}

            {!selectedLibrary && (
              <div className={styles.placeholder}>
                <p>Select a library from the dropdown above to browse animations.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AnimationsPage;
