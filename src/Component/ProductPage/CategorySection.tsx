import React from 'react';
import AnimatedElement from '../AnimatedElement/AnimatedElement';
import ProductItem from './ProductItem';
import { Product } from '../../Utils/Products';


const CategorySection: React.FC<{ category: string; products: Product[] }> = ({
  category,
  products,
}) => {
  return (
    <AnimatedElement direction="right" className="my-8">
      <h2 className="text-5xl md:text-7xl lg:text-8xl xl:text-8xl font-light font-pushkin mb-6 text-soft-sand md:mb-8 ml-6 ">
        {category}
      </h2>
      {products.map((product, index) => (
        <ProductItem key={product.id} product={product} delay={index * 0.2} />
      ))}
    </AnimatedElement>
  );
};

export default CategorySection;
