import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

// FadeInText Component
// Provides a smooth fade-in effect with scaling
const FadeInText: React.FC<{ children: React.ReactNode; delay?: number; duration?: number; }> = ({ children, delay = 200, duration = 500 }) => {
  const styles = useSpring({
    from: { opacity: 0, transform: 'scale(0.95)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { tension: 200, friction: 25, duration },
    delay,
    reset: true, // Ensures the animation re-triggers when element appears again
  });

  return <animated.div style={styles}>{children}</animated.div>;
};

// SlideInComponent
// Adds sliding-in animation from a specified direction with customizable duration
const SlideInComponent: React.FC<{ direction: 'left' | 'right' | 'top' | 'bottom'; children: React.ReactNode; duration?: number; }> = ({ direction, children, duration = 500  }) => {
  const translateMap = {
    left: 'translateX(-100%)',
    right: 'translateX(100%)',
    top: 'translateY(-100%)',
    bottom: 'translateY(100%)',
  };

  const styles = useSpring({
    from: { opacity: 0, transform: translateMap[direction] },
    to: { opacity: 1, transform: 'translateX(0) translateY(0)' },
    config: { mass: 1, tension: 210, friction: 20, duration },
    reset: true,
  });

  return <animated.div style={styles}>{children}</animated.div>;
};

// ScrollAnimation Component
// Triggers animation when the element is in the viewport, with configurable thresholds and offset
const ScrollAnimation: React.FC<{ children: React.ReactNode; threshold?: number; offset?: number; }> = ({ children, threshold = 0.1, offset = 20 }) => {
  const { ref, inView } = useInView({ threshold }); // Trigger when a specified percentage is visible

  const styles = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? `translateY(0)` : `translateY(${offset}px)`,
    config: { tension: 180, friction: 24 },
  });

  return (
    <animated.div ref={ref} style={styles}>
      {children}
    </animated.div>
  );
};

// BounceComponent
// Adds a bounce effect to elements
const BounceComponent: React.FC<{ children: React.ReactNode; delay?: number; }> = ({ children, delay = 200 }) => {
  const styles = useSpring({
    from: { transform: 'scale(1)' },
    to: { transform: 'scale(1.2)' },
    reset: true,
    reverse: true,
    loop: true,
    delay,
    config: { tension: 200, friction: 10 },
  });

  return <animated.div style={styles}>{children}</animated.div>;
};

export { FadeInText, SlideInComponent, ScrollAnimation, BounceComponent };
