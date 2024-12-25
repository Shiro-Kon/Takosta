import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useMemo } from "react";

// Типы направления анимации
type Direction = "up" | "down" | "left" | "right" | "visibility";

// Универсальная функция для получения вариантов анимации
const getVariants = (direction: Direction) => {
  const baseVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  switch (direction) {
    case "up":
      return { ...baseVariants, hidden: { ...baseVariants.hidden, y: 100 }, visible: { ...baseVariants.visible, y: 0 } };
    case "down":
      return { ...baseVariants, hidden: { ...baseVariants.hidden, y: -100 }, visible: { ...baseVariants.visible, y: 0 } };
    case "left":
      return { ...baseVariants, hidden: { ...baseVariants.hidden, x: -100 }, visible: { ...baseVariants.visible, x: 0 } };
    case "right":
      return { ...baseVariants, hidden: { ...baseVariants.hidden, x: 100 }, visible: { ...baseVariants.visible, x: 0 } };
    default:
      return baseVariants;
  }
};

// Компонент для анимации
const AnimatedElement: React.FC<{
  className?: string;
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
}> = React.memo(({ className = "", children, direction = "up", delay = 0, duration = 0.5 }) => {
  // Подключение Intersection Observer
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Мемоизация вариантов анимации
  const variants = useMemo(() => getVariants(direction), [direction]);

  // Возвращаем JSX с оптимизациями
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{
        duration: Math.max(0.1, duration), // Минимальная длительность
        ease: "easeOut",
        delay: Math.max(0, delay), // Минимальная задержка
      }}
    >
      {children || <div>Контент отсутствует</div>} {/* Обработка пустого children */}
    </motion.div>
  );
});

export default AnimatedElement;
