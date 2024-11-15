import { useEffect, useState } from 'react';
import { IconButton } from '@chakra-ui/react';
import { ArrowUpIcon } from '@chakra-ui/icons';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    isVisible && (
      <IconButton
        position="fixed"
        bottom="20px"
        right="20px"
        colorScheme="teal"
        icon={<ArrowUpIcon />}
        onClick={scrollToTop}
        aria-label="Scroll to top"
        size="lg"
        boxShadow="lg"
        zIndex="1000"
      />
    )
  );
};

export default ScrollToTopButton;
