import { useEffect } from 'react';

// Utility function to disable scrolling
const disableScroll = () => {
  document.body.style.overflow = 'hidden';
};

// Utility function to enable scrolling
const enableScroll = () => {
  document.body.style.overflow = 'auto';
};

const ScrollLock = ({ isActive }) => {
  useEffect(() => {
    if (isActive) {
      disableScroll();
    } else {
      enableScroll();
    }

    // Cleanup function to enable scroll when component unmounts
    return () => enableScroll();
  }, [isActive]);

  return null;
};

export default ScrollLock;
