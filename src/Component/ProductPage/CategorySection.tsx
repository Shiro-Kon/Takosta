import React from 'react';
import AnimatedElement from '../AnimatedElement/AnimatedElement';
import ProductItem from './ProductItem';
import { Product } from '../../Utils/Products';


const CategorySection: React.FC<{ category: string; products: Product[] }> = ({
  category,
  products,
}) => {
  return (
    <AnimatedElement direction="right" className="my-8 ">
      <div className='flex justify-center'>
      <h2 className="text-5xl md:text-7xl lg:text-8xl  xxl:text-9xl font-light font-pushkin  text-soft-sand my-12 md:my-16 ">
        {category}
      </h2>
      </div>
      {products.map((product, index) => (
        <ProductItem key={product.id} product={product} delay={index * 0.2} />
      ))}
    </AnimatedElement>
  );
};

export default CategorySection;
