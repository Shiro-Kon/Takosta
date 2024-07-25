// src/Page/CheckoutPage.tsx
import React, { useState } from 'react';
import { useCart } from '../Component/CartPage/CartContext';
import { useNavigate } from 'react-router-dom';
import AnimatedElement from '../Component/AnimatedElement/AnimatedElement';
import OrderConfirmationModal from '../Component/OrderConfirmationModal/OrderConfirmationModal';

const CheckoutPage: React.FC = () => {
  const { cart, getTotalPrice, clearCart  } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    postOffice: '',
    paymentMethod: 'card',
    deliveryMethod: 'pickup'
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Подготовка данных заказа
    const orderData = {
      products: cart.map(item => ({
        name: item.product.name,
        subname: item.product.subname,
        quantity: item.quantity
      })),
      totalPrice: getTotalPrice(),
      ...formData
    };
    
   // Відкриття модального вікна із підтвердженням замовлення
 setIsModalOpen(true);

 // Логування даних у консоль (замініть це на відправку на сервер за необхідності)
 console.log('Order Data:', orderData);

 // Приклад надсилання даних на сервер (тут просто логуємо, реальний запит може бути як POST на API)
 // fetch('/api/orders', {
 // method: 'POST',
 // headers: {
 // 'Content-Type': 'application/json'
 // },
 // body: JSON.stringify(orderData)
 // })
 // .then(response => response.json())
 // .then(data => console.log('Server Response:', data))
 // .catch(error => console.error('Error:', error));
 };

 const handleModalClose = () => {
    setIsModalOpen(false);
    clearCart(); 
    navigate('/product'); // Перенаправлення на сторінку продуктів
  };

  return (
    <main className="container mx-auto py-12 px-4 lg:px-12 flex justify-center">
      <div className="w-full max-w-4xl space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <AnimatedElement direction="up" delay={0.1} className="text-3xl font-bold mb-4 text-olive-drab text-center">
            Ваше замовлення
          </AnimatedElement>
          <div className="space-y-4">
            {cart.map(item => (
              <div key={item.product.id} className="flex items-center justify-between border-b py-2">
                <div className="flex items-center">
                  <img
                    alt={item.product.name}
                    src={item.product.image}
                    className="h-14 w-14 object-cover rounded-md"
                  />
                  <div className="ml-4">
                    <p className="text-lg font-medium">{item.product.name}</p>
                    <p className="text-gray-500">{item.product.subname}</p>
                    <p className="text-gray-500">{item.quantity} шт.</p>
                  </div>
                </div>
                <p className="text-lg font-medium text-olive-drab">
                  {(item.product.price * item.quantity).toFixed(2)}₴
                </p>
              </div>
            ))}
            <div className="mt-6 border-t pt-4 text-center">
              <p className="text-lg font-bold">Разом: {getTotalPrice().toFixed(2)}₴</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <AnimatedElement direction="up" delay={0.2} className="text-3xl font-bold mb-4 text-olive-drab text-center">
            Оформлення замовлення
          </AnimatedElement>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-lg font-medium">ФІО</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-olive-drab transition"
                  required
                />
              </div>
              <div>
                <label htmlFor="phoneNumber" className="block text-lg font-medium">Номер телефону</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-olive-drab transition"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium">Електронна пошта</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-olive-drab transition"
                  required
                />
              </div>
              {formData.deliveryMethod === 'delivery' && (
                <div>
                  <label htmlFor="postOffice" className="block text-lg font-medium">Відділення Нова Пошта</label>
                  <input
                    type="text"
                    id="postOffice"
                    name="postOffice"
                    value={formData.postOffice}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-olive-drab transition"
                  />
                </div>
              )}
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="deliveryMethod" className="block text-lg font-medium">Спосіб доставки</label>
                <select
                  id="deliveryMethod"
                  name="deliveryMethod"
                  value={formData.deliveryMethod}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-olive-drab transition"
                >
                  <option value="pickup">Забрати в салоні</option>
                  <option value="delivery">Доставка на Нову Пошту</option>
                </select>
              </div>

              {formData.deliveryMethod === 'pickup' && (
                <div>
                  <label htmlFor="paymentMethod" className="block text-lg font-medium">Спосіб оплати</label>
                  <select
                    id="paymentMethod"
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-olive-drab transition"
                  >
                    <option value="card">Картка</option>
                    <option value="cash">Готівка</option>
                  </select>
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-olive-drab text-white py-3 rounded-md font-semibold hover:bg-olive-drab/80 transition"
            >
              Підтвердити замовлення
            </button>
          </form>
        </div>
      </div>

      <OrderConfirmationModal
        isOpen={isModalOpen}
        onClose={handleModalClose}  
        orderData={{
          products: cart.map(item => ({
            name: item.product.name,
            subname: item.product.subname,
            quantity: item.quantity
          })),
          totalPrice: getTotalPrice(),
          ...formData
        }}
      />
    </main>
  );
};

export default CheckoutPage;
