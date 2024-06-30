import CategorySection from "../Component/ProductPage/CategorySection";
import { Product, products } from "../Utils/Products";


const ProductPage: React.FC = () => {
  return (
    <div className="min-h-screen p-8 pt-24">
      <div className="max-w-6xl mx-auto overflow-hidden">
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
