import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.scrollTo) {
      window.scrollTo({
        top: 0,
        
      });
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;