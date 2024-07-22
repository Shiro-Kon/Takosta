import React from 'react';
import { Link } from 'react-router-dom';


const CartPage: React.FC = () => {
 

  return (
    <main className="container mx-auto py-8 px-4">
      <Link to="/" className="text-blue-600 hover:underline">Вернуться назад</Link>
     
    </main>
  );
};

export default CartPage;


