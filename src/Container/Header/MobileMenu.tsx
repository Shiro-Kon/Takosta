import React, { useState, useEffect } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../../Component/CartPage/CartContext';

interface MobileMenuProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  activeLink: string | null;
  handleLinkClick: (to: string) => void;
  navigation: { name: string; to: string }[];
  openCart: () => void; // Функція для відкриття кошика
  openContact: () => void; // Функція для відкриття контактного модального вікна
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  mobileMenuOpen,
  setMobileMenuOpen,
  activeLink,
  handleLinkClick,
  navigation,
  openCart,
  openContact,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const location = useLocation();
  const { getTotalQuantity } = useCart(); // Отримуємо загальну кількість товарів у кошику

  useEffect(() => {
    if (mobileMenuOpen) {
      setIsAnimating(true);
    } else {
      const timeout = setTimeout(() => setIsAnimating(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <Dialog as="div" className="lg:hidden" open={mobileMenuOpen || isAnimating} onClose={() => setMobileMenuOpen(false)}>
      <div className="fixed inset-0 z-50">
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black bg-opacity-50"
              onClick={() => setMobileMenuOpen(false)}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.5 }}
              className="fixed inset-y-0 right-0 z-50 w-1/2 md:w-1/3 bg-white bg-opacity-90 backdrop-blur-md"
            >
              <div className="flex justify-left px-6 py-6">
                <button type="button" className="-m-2.5 rounded-md p-2.5" onClick={() => setMobileMenuOpen(false)}>
                  <span className="sr-only">Закрити меню</span>
                  <XMarkIcon className="h-6 w-6 text-black" aria-hidden="true" />
                </button>
              </div>
              <nav className="flex flex-col items-start space-y-4 mt-6 ml-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    onClick={() => {
                      handleLinkClick(item.to);
                      closeMenu();
                    }}
                    className={`relative text-base font-light text-black transition-colors duration-300 pb-1 ${
                      item.to === activeLink ? 'text-black' : 'text-black/80'
                    }`}
                  >
                    {item.name}
                    {item.to === activeLink && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-black/40 transform translate-y-1 transition-transform duration-300 rounded-full" style={{ transformOrigin: 'left center', transform: 'scaleX(1)' }} />
                    )}
                  </Link>
                ))}
                <button
                  onClick={() => {
                    openContact();
                    closeMenu(); 
                  }}
                  className="relative text-base font-light text-black transition-colors duration-300 pb-1"
                >
                  Контакти
                </button>
                <button
                  onClick={() => {
                    openCart();
                    closeMenu(); 
                  }}
                  className="relative flex items-center text-sm font-semibold leading-6 text-gray-900 mt-6"
                >
                  <img src="/Images/Header/Basket.png" alt="Кошик" className="h-6 w-auto" />
                  {getTotalQuantity() > 0 && (
                    <span className="absolute -top-2 -right-2 flex h-3 w-3 items-center justify-center rounded-full bg-black/50 text-white text-[10px] text-white ">
                      {getTotalQuantity()}
                    </span>
                  )}
                </button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Dialog>
  );
};

export default MobileMenu;
