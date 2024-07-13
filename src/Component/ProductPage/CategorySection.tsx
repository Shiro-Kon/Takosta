import React from 'react';
import AnimatedElement from '../AnimatedElement/AnimatedElement';
import ProductItem from './ProductItem';
import { Product } from '../../Utils/Products';


const CategorySection: React.FC<{ category: string; products: Product[] }> = ({
  category,
  products,
}) => {
  return (
    <AnimatedElement direction="right" className="my-12 px-2">
      <div className="flex flex-col items-center my-8 md:my-24">
  <h2 className="text-5xl md:text-7xl lg:text-8xl xxl:text-9xl font-light font-pushkin text-olive-green text-center">
    {category}
  </h2>
  <div className="h-[2px] md:h-1 bg-olive-green/50 w-[90%] mt-2 md:mt-4"></div>
</div>

      {products.map((product, index) => (
        <ProductItem key={product.id} product={product} delay={index * 0.2} />
      ))}
    </AnimatedElement>
  );
};

export default CategorySection;
