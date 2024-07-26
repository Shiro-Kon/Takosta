import React, { useState } from 'react';
import { useCart } from '../Component/CartPage/CartContext';
import { useNavigate } from 'react-router-dom';
import AnimatedElement from '../Component/AnimatedElement/AnimatedElement';
import OrderConfirmationModal from '../Component/OrderConfirmationModal/OrderConfirmationModal';

const CheckoutPage: React.FC = () => {
  const { cart, getTotalPrice, clearCart } = useCart();
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

  const handleDeliveryMethodChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      deliveryMethod: value,
      // Clear post office field if not needed
      ...(value === 'pickup' ? { postOffice: '' } : {})
    }));
  };

  const handlePaymentMethodChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData(prevState => ({ ...prevState, paymentMethod: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const orderData = {
      products: cart.map(item => ({
        name: item.product.name,
        subname: item.product.subname,
        quantity: item.quantity
      })),
      totalPrice: getTotalPrice(),
      ...formData
    };
    
    // Open the confirmation modal
    setIsModalOpen(true);

    // Log the order data to the console
    console.log('Order Data:', orderData);

    // Example of sending data to the server (just logging here, replace with actual POST request)
    // fetch('/api/orders', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(orderData)
    // })
    // .then(response => response.json())
    // .then(data => console.log('Server Response:', data))
    // .catch(error => console.error('Error:', error));
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    clearCart(); 
    navigate('/product'); // Redirect to the products page
  };

  return (
    <main className="container mx-auto py-14 md:py-20 px-4 lg:px-12 flex justify-center">
      <div className="w-full max-w-2xl space-y-8">
        <div className="bg-white p-6 shadow-sm rounded-lg">
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

        <div className="bg-white p-6 shadow-sm rounded-lg">
          <AnimatedElement direction="up" delay={0.2} className="text-3xl font-bold mb-4 text-olive-drab text-center">
            Оформлення замовлення
          </AnimatedElement>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-lg font-medium">ПІБ</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-olive-drab"
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
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-olive-drab"
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
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-olive-drab"
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
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-olive-drab"
                  />
                </div>
              )}
            </div>

            <fieldset className="space-y-6">
              <legend className="text-lg font-medium">Спосіб доставки</legend>
              <div className="mt-4 space-y-4">
                <div className="flex items-center gap-x-3">
                  <input
                    id="pickup"
                    name="deliveryMethod"
                    type="radio"
                    value="pickup"
                    checked={formData.deliveryMethod === 'pickup'}
                    onChange={handleDeliveryMethodChange}
                    className="hidden peer"
                  />
                  <label
                    htmlFor="pickup"
                    className="flex items-center cursor-pointer p-3 border border-gray-300 rounded-md peer-checked:bg-olive-drab peer-checked:text-white"
                  >
                    <span className="w-4 h-4 border border-gray-300 rounded-full flex items-center justify-center mr-2 peer-checked:bg-white peer-checked:border-transparent">
                      <span className="block w-2 h-2 bg-olive-drab rounded-full"></span>
                    </span>
                    Забрати в салоні
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="delivery"
                    name="deliveryMethod"
                    type="radio"
                    value="delivery"
                    checked={formData.deliveryMethod === 'delivery'}
                    onChange={handleDeliveryMethodChange}
                    className="hidden peer"
                  />
                  <label
                    htmlFor="delivery"
                    className="flex items-center cursor-pointer p-3 border border-gray-300 rounded-md peer-checked:bg-olive-drab peer-checked:text-white"
                  >
                    <span className="w-4 h-4 border border-gray-300 rounded-full flex items-center justify-center mr-2 peer-checked:bg-white peer-checked:border-transparent">
                      <span className="block w-2 h-2 bg-olive-drab rounded-full"></span>
                    </span>
                    Доставка
                  </label>
                </div>
              </div>
            </fieldset>

            {formData.deliveryMethod === 'delivery' && (
              <fieldset className="space-y-6">
                <legend className="text-lg font-medium">Спосіб оплати</legend>
                <div className="mt-4 space-y-4">
                  <div className="flex items-center gap-x-3">
                    <input
                      id="card"
                      name="paymentMethod"
                      type="radio"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={handlePaymentMethodChange}
                      className="hidden peer"
                    />
                    <label
                      htmlFor="card"
                      className="flex items-center cursor-pointer p-3 border border-gray-300 rounded-md peer-checked:bg-olive-drab peer-checked:text-white"
                    >
                      <span className="w-4 h-4 border border-gray-300 rounded-full flex items-center justify-center mr-2 peer-checked:bg-white peer-checked:border-transparent">
                        <span className="block w-2 h-2 bg-olive-drab rounded-full"></span>
                      </span>
                      Оплата карткою
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="cash"
                      name="paymentMethod"
                      type="radio"
                      value="cash"
                      checked={formData.paymentMethod === 'cash'}
                      onChange={handlePaymentMethodChange}
                      className="hidden peer"
                    />
                    <label
                      htmlFor="cash"
                      className="flex items-center cursor-pointer p-3 border border-gray-300 rounded-md peer-checked:bg-olive-drab peer-checked:text-white"
                    >
                      <span className="w-4 h-4 border border-gray-300 rounded-full flex items-center justify-center mr-2 peer-checked:bg-white peer-checked:border-transparent">
                        <span className="block w-2 h-2 bg-olive-drab rounded-full"></span>
                      </span>
                      Готівкою
                    </label>
                  </div>
                </div>
              </fieldset>
            )}

            <button
              type="submit"
              className="w-full bg-olive-drab text-white py-3 px-6 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Підтвердити замовлення
            </button>
          </form>
        </div>
      </div>

      {isModalOpen && (
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
      )}
    </main>
  );
};

export default CheckoutPage;
