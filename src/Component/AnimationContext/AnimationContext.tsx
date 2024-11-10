import React, { createContext, useContext, useState, useEffect } from 'react';

interface AnimationContextType {
  startAnimation: boolean;
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

export const useAnimation = () => {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error("useAnimation must be used within an AnimationProvider");
  }
  return context;
};

export const AnimationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimationContext.Provider value={{ startAnimation }}>
      {children}
    </AnimationContext.Provider>
  );
};
