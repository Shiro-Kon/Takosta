
import React from 'react';

type PaymentOptionProps = {
  logos?: string[];
  logo?: string;
  title: string;
  description: string;
};

const PaymentOption: React.FC<PaymentOptionProps> = ({ logos, logo, title, description }) => (
  <div className="bg-white/60 shadow-lg rounded-xl p-6 text-gray-700 my-4">
    {logos ? (
      <div className="flex flex-row gap-6">
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt="Payment Option" className="w-14 h-14 object-scale-down mb-4" />
        ))}
      </div>
    ) : (
      <img src={logo} alt="Payment Option" className="w-14 h-14 object-scale-down mb-4" />
    )}
    <div className="font-extrabold text-xl md:text-2xl mb-2">{title}</div>
    <p className="font-semibold text-justify text-sm md:text-md lg:text-lg mb-4">{description}</p>
  </div>
);

export default PaymentOption;
