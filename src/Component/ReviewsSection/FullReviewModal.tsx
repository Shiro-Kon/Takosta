import React, { useEffect } from 'react';
import { Review } from '../../Utils/reviewsData';


const FullReviewModal: React.FC<Review & { onClose: () => void }> = ({ name, service, fullReview, images, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-45 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div className="bg-black/40 rounded-lg max-w-5xl w-full max-h-[100vh] overflow-y-auto p-8 text-white">
        <h2 className="text-xl md:text-xl lg:text-2xl xl:text-3xl xxl:text-4xl font-semibold mb-4">{name}</h2>
        <p className="text-md lg:text-lg xl:text-xl mb-4">{service}</p>
        <p className="text-lg lg:text-xl xl:text-2xl mb-6">{fullReview}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {images.map((img, index) => (
            <img key={index} src={img} alt={`${name}'s ${service} ${index + 1}`} className="w-full h-full object-cover rounded-md" />
          ))}
        </div>
        <button
          onClick={onClose}
          className="rounded border-2 border-white/40 bg-white bg-opacity-35 backdrop-blur-md px-4 py-2 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl xll:4xl font-light text-white shadow-sm duration-200 ease-out hover:bg-white/30 hover:text-white active:scale-95 mobile-landscape:text-base"
        >
          Закрыть
        </button>
      </div>
    </div>
  );
};

export default FullReviewModal;
