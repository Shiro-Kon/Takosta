import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

interface AnimationContextType {
  startAnimation: boolean;
  triggerAnimation: () => void;
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

  const triggerAnimation = useCallback(() => {
    setStartAnimation(true);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimationContext.Provider value={{ startAnimation, triggerAnimation }}>
      {children}
    </AnimationContext.Provider>
  );
};
