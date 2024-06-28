import React, { useState, useEffect } from 'react';
import reviews, { Review } from '../../Utils/reviewsData';
import ReviewCard from './ReviewCard';
import FullReviewModal from './FullReviewModal';
import AnimatedElement from '../AnimatedElement/AnimatedElement';


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
    <div className="relative py-20">
      <img
        src="./Images/Reviews/Reviews.png"
        alt="Background"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-25 backdrop-blur-md z-10" />
      <div className="container mx-auto px-4 relative z-20">
        <AnimatedElement direction="up" delay={0.2} className="text-4xl md:text-2xl lg:text-4xl xl:text-5xl xxl:text-6xl font-light text-center text-white mb-12">Відгуки наших клієнтів</AnimatedElement>
        <AnimatedElement direction="visibility" delay={0.4} className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 ${animateReviews ? 'animate-fade-in' : ''}`}>
          {displayedReviews.map((review) => (
            <ReviewCard key={review.id} {...review} onClick={() => setSelectedReview(review)} />
          ))}
        </AnimatedElement >
        <AnimatedElement direction="up" delay={0.7} className="flex justify-center space-x-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
            disabled={currentPage === 0}
            className="rounded border-2 border-white/50 bg-black bg-opacity-15 backdrop-blur-md px-4 py-2 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl xll:4xl font-light text-white shadow-sm duration-200 ease-out hover:bg-black/30 hover:text-white active:scale-95 mobile-landscape:text-base disabled:bg-white/50"
          >
            Попередні
          </button>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, pageCount - 1))}
            disabled={currentPage === pageCount - 1}
            className="rounded border-2 border-white/50 bg-black bg-opacity-15 backdrop-blur-md px-4 py-2 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl xll:4xl font-light text-white shadow-sm duration-200 ease-out hover:bg-black/30 hover:text-white active:scale-95 mobile-landscape:text-base disabled:bg-white/50"
          >
            Наступні
          </button>
        </AnimatedElement>
      </div>
      {selectedReview && (
        <FullReviewModal {...selectedReview} onClose={() => setSelectedReview(null)} />
      )}
    </div>
  );
};

export default ReviewsSection;
