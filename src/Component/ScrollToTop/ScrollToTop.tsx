import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0; 
      document.documentElement.scrollTop = 0; 
    };

    scrollToTop();
    setTimeout(scrollToTop, 100);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
