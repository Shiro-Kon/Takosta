import React, { useState, useEffect } from 'react';

interface Review {
  id: string;
  name: string;
  service: string;
  shortReview: string;
  fullReview: string;
  images: string[];
}

const reviews: Review[] = [
  {
    id: '1',
    name: 'Анна',
    service: 'Окрашивание волос',
    shortReview: 'Прекрасный результат! Цвет именно такой, как я хотела.',
    fullReview: 'Я очень довольна результатом. Мастер внимательно выслушал мои пожелания и подобрал идеальный оттенок. Волосы выглядят здоровыми и блестящими. Обязательно вернусь снова!',
    images: ['./Images/Reviews/work1.png', './Images/Reviews/work1.png'],
  },
  {
    id: '2',
    name: 'Анна',
    service: 'Окрашивание волос',
    shortReview: 'Прекрасный результат! Цвет именно такой, как я хотела.',
    fullReview: 'Я очень довольна результатом. Мастер внимательно выслушал мои пожелания и подобрал идеальный оттенок. Волосы выглядят здоровыми и блестящими. Обязательно вернусь снова!',
    images: ['./Images/Reviews/work1.png', './Images/Reviews/work1.png'],
  },
  {
    id: '3',
    name: 'Анна',
    service: 'Окрашивание волос',
    shortReview: 'Прекрасный результат! Цвет именно такой, как я хотела.',
    fullReview: 'Я очень довольна результатом. Мастер внимательно выслушал мои пожелания и подобрал идеальный оттенок. Волосы выглядят здоровыми и блестящими. Обязательно вернусь снова!',
    images: ['./Images/Reviews/work1.png', './Images/Reviews/work1.png'],
  },
  {
    id: '4',
    name: 'Анна',
    service: 'Окрашивание волос',
    shortReview: 'Прекрасный результат! Цвет именно такой, как я хотела.',
    fullReview: 'Я очень довольна результатом. Мастер внимательно выслушал мои пожелания и подобрал идеальный оттенок. Волосы выглядят здоровыми и блестящими. Обязательно вернусь снова!',
    images: ['./Images/Reviews/work1.png', './Images/Reviews/work1.png'],
  },
 
];

const ReviewCard: React.FC<Review & { onClick: () => void }> = ({ name, service, shortReview, onClick }) => {
  return (
    <div
      className="bg-black bg-opacity-45 backdrop-blur-md rounded-lg shadow-md p-8 transition-all duration-300 hover:shadow-lg cursor-pointer text-white"
    >
      <h3 className="text-xl md:text-xl lg:text-2xl xl:text-3xl xxl:text-4xl font-semibold mb-2">{name}</h3>
      <p className="text-md lg:text-lg xl:text-xl text-white/70 mb-4">{service}</p>
      <p className="mb-4 text-lg lg:text-xl xl:text-2xl">{shortReview}</p>
      <button onClick={onClick} className="text-white hover:text-white/40 transition-colors duration-300 text-sm lg:text-lg xl:text-xl">
        Читать полностью
      </button>
    </div>
  );
};

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

const ReviewsSection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);
  const [animateReviews, setAnimateReviews] = useState(false);

  useEffect(() => {
    setAnimateReviews(true);
    const timer = setTimeout(() => setAnimateReviews(false), 500);
    return () => clearTimeout(timer);
  }, [currentPage]);

  const getReviewsPerPage = () => {
    if (window.innerWidth < 768) return 1; 
    if (window.innerWidth < 1024) return 2; 
    return 3; 
  };

  const [reviewsPerPage, setReviewsPerPage] = useState(getReviewsPerPage());

  useEffect(() => {
    const handleResize = () => {
      setReviewsPerPage(getReviewsPerPage());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const pageCount = Math.ceil(reviews.length / reviewsPerPage);

  const displayedReviews = reviews.slice(
    currentPage * reviewsPerPage,
    (currentPage + 1) * reviewsPerPage
  );

  return (
    <div className="relative py-20 ">
      <img
        src="./Images/Reviews/Reviews.png"
        alt="Background"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-25 backdrop-blur-md z-10" />
      <div className="container mx-auto px-4 relative z-20">
        <h2 className="text-4xl md:text-2xl lg:text-4xl xl:text-5xl xxl:text-6xl font-light text-center text-white mb-12">Отзывы наших клиентов</h2>
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 ${animateReviews ? 'animate-fade-in' : ''}`}>
          {displayedReviews.map((review) => (
            <ReviewCard key={review.id} {...review} onClick={() => setSelectedReview(review)} />
          ))}
        </div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
            disabled={currentPage === 0}
            className="rounded border-2 border-white/50 bg-black bg-opacity-15 backdrop-blur-md px-4 py-2 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl xll:4xl font-light text-white shadow-sm duration-200 ease-out hover:bg-black/30 hover:text-white active:scale-95 mobile-landscape:text-base disabled:bg-white/50"
          >
            Предыдущие
          </button>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, pageCount - 1))}
            disabled={currentPage === pageCount - 1}
            className="rounded border-2 border-white/50 bg-black bg-opacity-15 backdrop-blur-md px-4 py-2 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl xll:4xl font-light text-white shadow-sm duration-200 ease-out hover:bg-black/30 hover:text-white active:scale-95 mobile-landscape:text-base disabled:bg-white/50"
          >
            Следующие
          </button>
        </div>
      </div>
      {selectedReview && (
        <FullReviewModal {...selectedReview} onClose={() => setSelectedReview(null)} />
      )}
    </div>
  );
};

export default ReviewsSection;
