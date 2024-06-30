import React from 'react';
import AnimatedElement from '../AnimatedElement/AnimatedElement';
import ProductItem from './ProductItem';
import { Product } from '../../Utils/Products';


const CategorySection: React.FC<{ category: string; products: Product[] }> = ({
  category,
  products,
}) => {
  return (
    <AnimatedElement direction="right" className="my-14">
      <h2 className="text-5xl md:text-7xl lg:text-8xl xl:text-8xl font-light font-forum mb-6 text-white md:mb-14">
        {category}
      </h2>
      {products.map((product, index) => (
        <ProductItem key={product.id} product={product} delay={index * 0.2} />
      ))}
    </AnimatedElement>
  );
};

export default CategorySection;
