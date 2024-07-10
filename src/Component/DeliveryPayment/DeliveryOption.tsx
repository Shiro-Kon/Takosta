
import React from 'react';

type DeliveryOptionProps = {
  logo: string;
  title: string;
  description: string;
};

const DeliveryOption: React.FC<DeliveryOptionProps> = ({ logo, title, description }) => (
  <div className="bg-sage-green/15 shadow-lg rounded-xl p-6 text-olive-drab my-4">
    <img src={logo} alt="Delivery Option" className="w-14 h-14 object-scale-down mb-4" />
    <div className="font-extrabold text-xl md:text-2xl mb-2">{title}</div>
    <p className="font-semibold text-justify text-sm md:text-md lg:text-lg mb-4">{description}</p>
  </div>
);

export default DeliveryOption;
