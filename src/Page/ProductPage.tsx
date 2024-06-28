import { Product, products } from "../Utils/Products";
import AnimatedElement from "../Component/AnimatedElement/AnimatedElement";

const ProductPage: React.FC = () => {
  return (
    <div className="min-h-screen p-8 pt-24">
      <div className="max-w-6xl mx-auto">
        {Object.entries(groupProductsByCategory()).map(([category, items]) => (
          <CategorySection
            key={category}
            category={category}
            products={items}
          />
        ))}
      </div>
    </div>
  );
};

const CategorySection: React.FC<{ category: string; products: Product[] }> = ({
  category,
  products,
}) => {
  return (
    <AnimatedElement direction="right"  className="my-14">
      <h2 className="text-5xl md:text-7xl lg:text-8xl xl:text-8xl font-light mb-6 text-white md:mb-14">
        {category}
      </h2>
      {products.map((product, index) => (
        <ProductItem key={product.id} product={product} delay={index * 0.2}/>
      ))}
    </AnimatedElement>
  );
};

const ProductItem: React.FC<{ product: Product; delay: number }> = ({ product, delay }) => {
  return (
    <AnimatedElement direction="right" className="flex flex-col md:flex-row mb-12 text-wrap text-left">
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        className="w-full md:w-[350px] lg:w-[400px] xl:w-[450px] xxl:w-[550px] h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] xxl:h-[550px] object-cover mb-4 md:mb-0 md:mr-6"
      />
      <div className="flex-grow transform transition-all duration-1000 ease-out">
        <h3 className="text-4xl md:text-4xl lg:text-6xl xl:text-8xl font-light text-white font-forum mb-2 lg:mb-">
          {product.name} <br />
          <span className="text-soft-sand">{product.subname}</span>
        </h3>
        <p className="text-xl md:text-2xl lg:text-4xl xl:text-4xl font-sans text-white mb-4">
          {product.description}
        </p>
        <button className="rounded border-2 border-white/50 bg-black bg-opacity-15 backdrop-blur-md px-4 py-2 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl xll:4xl font-light text-white shadow-sm duration-200 ease-out hover:bg-black/30 hover:text-white active:scale-95 mobile-landscape:text-base">
          Детальніше
        </button>
      </div>
    </AnimatedElement>
  );
};

function groupProductsByCategory(): Record<string, Product[]> {
  return products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {} as Record<string, Product[]>);
}

export default ProductPage;
