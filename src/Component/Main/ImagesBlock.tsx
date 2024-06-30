import React from 'react';
import ImagesBlockArry, { ImagesBlockData } from '../../Utils/ImagesBlockArry';
import AnimatedElement from '../AnimatedElement/AnimatedElement';

const ImagesBlock: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {ImagesBlockArry.map((item: ImagesBlockData) => (
          <AnimatedElement direction="left" delay={0.2} 
            key={item.id} 
            className="relative overflow-hidden"
          >
            <img 
              src={item.image} 
              alt={`Product ${item.id}`}
              className="w-full h-full object-cover"
            />
          </AnimatedElement>
        ))}
      </div>
    </div>
  );
};

export default ImagesBlock;
