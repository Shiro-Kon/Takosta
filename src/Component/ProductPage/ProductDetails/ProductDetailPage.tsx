
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../../../Utils/Products';


const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);

  const [activeTab, setActiveTab] = useState('description'); 

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  if (!product) {
    return <div>Товар не найден</div>;
  }

  return (
    <div className="container mx-auto py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <img src={product.image} alt={product.name} className="w-full rounded-lg shadow-lg" />
        </div>
        <div>
          <h2 className="text-3xl font-bold">{product.name}</h2>
          <p className="text-lg text-gray-600">{product.subname}</p>
          <p className="text-xl text-gray-800">Категорія: {product.category}</p>
          <p className="text-xl text-gray-800">Призначення: {product.purpose}</p>
          <p className="text-xl text-gray-800">Тип волосся: {product.hairType}</p>
          <p className="text-xl text-gray-800">Об'єм: {product.volume}</p>
          <p className="text-xl text-gray-800">Примітка: {product.note}</p>
          <p className="text-xl text-gray-800">Зроблено: {product.madeIn}</p>
          <p className="text-xl text-gray-800">Ціна: {product.price} грн</p>
          <div className="mt-4">
            <Link to="/products" className="text-blue-500 hover:underline">← Назад до продуктів</Link>
          </div>
        </div>
      </div>


      <div className="mt-8">
        <ul className="flex">
          <li className={`mr-4 cursor-pointer ${activeTab === 'description' ? 'text-blue-500' : 'text-gray-500'}`} onClick={() => handleTabClick('description')}>
            Опис
          </li>
          <li className={`mr-4 cursor-pointer ${activeTab === 'composition' ? 'text-blue-500' : 'text-gray-500'}`} onClick={() => handleTabClick('composition')}>
            Склад
          </li>
          <li className={`cursor-pointer ${activeTab === 'usage' ? 'text-blue-500' : 'text-gray-500'}`} onClick={() => handleTabClick('usage')}>
            Спосіб використання
          </li>
        </ul>


        <div className="mt-4">
          {activeTab === 'description' && <p className="text-lg text-gray-800">{product.description}</p>}
          {activeTab === 'composition' && <p className="text-lg text-gray-800">{product.composition}</p>}
          {activeTab === 'usage' && <p className="text-lg text-gray-800">{product.usage}</p>}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
