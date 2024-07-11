import React from 'react';
import AnimatedElement from '../AnimatedElement/AnimatedElement';
import { Product } from '../../Utils/Products';


const ProductItem: React.FC<{ product: Product; delay: number }> = ({ product, delay }) => {
  return (
    <AnimatedElement direction="right" delay={0.5} className="flex flex-col md:flex-row mb-12 text-wrap text-left sm:px-6">
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        className="w-full md:w-[300px] lg:w-[400px] xl:w-[450px] xxl:w-[550px] h-[300px] md:h-[300px] lg:h-[400px] xl:h-[450px] xxl:h-[550px] object-cover mb-4 md:mb-0 md:mr-6 lg:mr-12 rounded-[50px]  shadow-black/20  shadow-lg"
      />
      <div className="flex-grow sm:mt-4">
        <h3 className="text-4xl md:text-4xl lg:text-6xl xl:text-7xl xxl:text-8xl font-light text-sage-green md:text-sage-green font-forum mb-2 lg:mb-6">
          {product.name} <br className='hidden md:block'/>
          <span className="text-olive-green">{product.subname}</span>
        </h3>
        <p className="text-xl md:text-md lg:text-2xl xl:text-3xl xxl:text-5xl font-sans text-olive-drab my-4 xl:my-6">
          {product.description}z
        </p>
        <button className="rounded bg-olive-drab/50 backdrop-blur-sm px-4 py-3 text-lg md:text-sm lg:text-xl xl:text-xl xxl:text-3xl font-light text-white shadow-sm duration-200 ease-out hover:bg-olive-drab/60 hover:text-white active:scale-95 mobile-landscape:text-base">
          Детальніше
        </button>
      </div>
    </AnimatedElement>
  );
};

export default ProductItem;
