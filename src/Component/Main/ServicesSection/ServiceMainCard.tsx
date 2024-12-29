import React from "react";
import { BounceComponent } from "../../animation/FadeInText"; 

interface ServiceProps {
  image: string;
  buttonText: string;
  onClick: () => void;
}

const ServiceMainCard: React.FC<ServiceProps> = ({ image, buttonText, onClick }) => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.src = "/fallback-image.jpg"; 
  };

  return (
    <div className="flex flex-col items-center">
      <BounceComponent delay={200}>
        <div className="overflow-hidden transition-transform duration-500 ease-in-out hover:scale-105">
          <div className="cursor-pointer relative rounded-3xl">
            <img
              src={image}
              alt={buttonText}
              onError={handleImageError}
              className="w-[500px] h-[400px] object-cover rounded-3xl"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 max-h-[60%] text-white bg-black/50 backdrop-blur-sm p-6 text-center rounded-2xl overflow-hidden">
              <button
                onClick={onClick}
                className="text-xl md:text-xl lg:text-3xl font-light text-white my-2"
              >
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </BounceComponent>
    </div>
  );
};

export default React.memo(ServiceMainCard);
