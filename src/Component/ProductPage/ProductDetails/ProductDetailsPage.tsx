import {  useNavigate, useLocation, useParams } from 'react-router-dom';
import { useState } from 'react';
import { Product, products } from '../../../Utils/Products';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedElement from '../../AnimatedElement/AnimatedElement';
import { useCart } from '../../CartPage/CartContext';

const ProductDetailsPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { productId } = useParams<{ productId: string }>();
  const product = products.find((p) => p.id === productId);
  const [activeTab, setActiveTab] = useState<'description' | 'composition' | 'usage'>('description');
  const { addToCart } = useCart();

  if (!product) {
    return <div>Продукт не найден</div>;
  }

  const tabContent = {
    description: product.description,
    composition: product.composition,
    usage: product.usage
  };

  return (
    <main className="container mx-auto py-16 md:py-20 xxl:py-24 px-4 md:px-6 lg:px-8 xl:max-w-6xl xxl:max-w-7xl min-h-screen overflow-hidden">
      <AnimatedElement direction="right" delay={0.2}>
        <button onClick={() => navigate("/product", { state: { scrollPosition: location.state?.scrollPosition || 0 } })}>
          <h1 className='text-sm md:text-sm lg:text-md xl:text-lg font-light text-sage-green ml-6 md:ml-8 font-sans mb-6 sm:text-center border-b-[1px] border-sage-green '>
            Повернутися до продуктів
          </h1>
        </button>
      </AnimatedElement>
      <div className="flex flex-col md:flex-row gap-12 cursor-default">
        <div className="md:w-1/2">
          <AnimatedElement direction="right" delay={0.2}>
            <img 
              src={product.image} 
              alt={`${product.name} ${product.subname}`} 
              className="w-full h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] object-cover rounded-[30px] shadow-black/20 shadow-lg"
            />
          </AnimatedElement>
        </div>
        <div className="md:w-1/2">
          <AnimatedElement direction="right" delay={0.3}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-sage-green font-forum mb-6">
              {product.name} <span className="text-olive-green">{product.subname}</span>
            </h1>
            <div className="space-y-3 text-sm md:text-sm lg:text-md xl:text-lg text-olive-drab mb-8">
              <p>Група товару: {product.productGroup}</p>
              <p>Призначення: {product.purpose}</p>
              <p>Тип волосся: {product.hairType}</p>
              <p>Об'єм: {product.volume}</p>
              <p>Примітка: {product.note}</p>
              <p>Зроблено в {product.madeIn}</p>
            </div>
          </AnimatedElement>
          <AnimatedElement direction="right" delay={0.3}>
            <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-olive-green mb-8">
              {product.price.toFixed(2)}₴
            </p>
          </AnimatedElement>
          <AnimatedElement direction="right" delay={0.4}>
            <button 
              className="rounded bg-olive-drab/50 backdrop-blur-sm px-4 py-2 text-sm md:text-md lg:text-lg xl:text-xl font-semibold text-white shadow-sm transition duration-300 ease-out hover:bg-olive-drab/60 hover:text-white active:scale-95"
              onClick={() => addToCart(product)}
            >
              Додати в кошик
            </button>
          </AnimatedElement>
        </div>
      </div>
      <div className="mt-16 max-w-6xl xl:max-w-6xl">
        <AnimatedElement direction="right" delay={0.5}>
          <div className="border-b border-olive-drab/30">
            <nav className="flex space-x-4 md:space-x-8 lg:space-x-12">
              {['description', 'composition', 'usage'].map((tab) => (
                <button
                  key={tab}
                  className={`pb-2 text-md md:text-lg lg:text-xl font-medium ${
                    activeTab === tab ? 'text-olive-drab border-b-2 border-olive-drab' : 'text-olive-drab/70'
                  }`}
                  onClick={() => setActiveTab(tab as 'description' | 'composition' | 'usage')}
                >
                  {tab === 'description' ? 'Опис' : tab === 'composition' ? 'Склад' : 'Застосування'}
                </button>
              ))}
            </nav>
          </div>
        </AnimatedElement>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-8 text-sm md:text-md lg:text-lg xl:text-xl text-olive-drab/80 cursor-default"
          >
            <AnimatedElement direction="right" delay={0.6}>
              <p>{tabContent[activeTab]}</p>
            </AnimatedElement>
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
};

export default ProductDetailsPage;
