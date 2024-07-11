import React from 'react';
import { Review } from '../../../Utils/reviewsData';


const ReviewCard: React.FC<Review & { onClick: () => void }> = ({ name, service, fullReview, onClick }) => {
  return (
    <div
    onClick={onClick}
      className="bg-black bg-opacity-45 backdrop-blur-md rounded-lg shadow-md p-8 transition-all duration-300 hover:shadow-lg cursor-pointer text-white"
    >
      <h3 className="text-xl md:text-xl lg:text-2xl xl:text-3xl xxl:text-4xl font-semibold mb-2">{name}</h3>
      <p className="text-md lg:text-lg xl:text-xl text-white/70 mb-4">{service}</p>
      <p className="mb-4 text-lg lg:text-xl xl:text-2xl text-ellipsis">{fullReview}</p>
      <button  className="text-white hover:text-white/40 transition-colors duration-300 text-sm lg:text-lg xl:text-xl">
        Читать полностью
      </button>
    </div>
  );
};

export default ReviewCard;
