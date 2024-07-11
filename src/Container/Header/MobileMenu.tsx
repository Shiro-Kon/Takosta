import React, { useState, useEffect } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileMenuProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  activeLink: string | null;
  handleLinkClick: (to: string) => void;
  navigation: { name: string; to: string }[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  mobileMenuOpen,
  setMobileMenuOpen,
  activeLink,
  handleLinkClick,
  navigation,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      setIsAnimating(true);
    } else {
      const timeout = setTimeout(() => setIsAnimating(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [mobileMenuOpen]);

  return (
    <Dialog
      as="div"
      className="lg:hidden"
      open={mobileMenuOpen || isAnimating}
      onClose={() => setMobileMenuOpen(false)}
    >
      <div className="fixed inset-0 z-50">
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black bg-opacity-50"
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {mobileMenuOpen && (
            <DialogPanel
              as={motion.div}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed inset-y-0 right-0 z-50 w-1/2 md:w-1/3 bg-white bg-opacity-90 backdrop-blur-md"
            >
              <div className="flex items-center justify-between px-4 py-4">
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6 text-black" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 px-4">
                <div className="space-y-2 py-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      onClick={() => handleLinkClick(item.to)}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black/70 hover:text-black/40 ${
                        item.to === activeLink ? 'text-black/40' : ''
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="mt-4">
                  <Link
                    to="/basket"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    <img
                      src="./Images/Header/Basket.png"
                      alt="Кошик"
                      className="h-8"
                    />
                  </Link>
                </div>
              </div>
            </DialogPanel>
          )}
        </AnimatePresence>
      </div>
    </Dialog>
  );
};

export default MobileMenu;
