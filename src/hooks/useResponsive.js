import { useState, useEffect } from 'react';

const useResponsive = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return {
    isMobile: width <= 640,
    isTablet: width > 640 && width <= 768,
    isDesktop: width > 768,
  };
};

export default useResponsive;
