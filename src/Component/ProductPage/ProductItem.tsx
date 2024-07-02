import React from 'react';
import AnimatedElement from '../AnimatedElement/AnimatedElement';
import { Product } from '../../Utils/Products';


const ProductItem: React.FC<{ product: Product; delay: number }> = ({ product, delay }) => {
  return (
    <AnimatedElement direction="right" delay={0.5} className="flex flex-col md:flex-row mb-12 text-wrap text-left">
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        className="w-full md:w-[350px] lg:w-[400px] xl:w-[450px] xxl:w-[550px] h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] xxl:h-[550px] object-cover mb-4 md:mb-0 md:mr-6"
      />
      <div className="flex-grow transform transition-all duration-1000 ease-out">
        <h3 className="text-4xl md:text-4xl lg:text-6xl xl:text-7xl xxl:text-8xl font-light text-white font-forum mb-2 lg:mb-6">
          {product.name} <br />
          <span className="text-soft-sand">{product.subname}</span>
        </h3>
        <p className="text-xl md:text-2xl lg:text-4xl xl:text-3xl xxl:text-4xl font-sans text-white mb-4">
          {product.description}
        </p>
        <button className="rounded border-2 border-white/50 bg-soft-sand bg-opacity-65 backdrop-blur-md px-4 py-2 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-xl xxl:text-4xl font-light text-white shadow-sm duration-200 ease-out hover:bg-black/30 hover:text-white active:scale-95 mobile-landscape:text-base">
          Детальніше
        </button>
      </div>
    </AnimatedElement>
  );
};

export default ProductItem;
