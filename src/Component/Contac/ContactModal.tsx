import React from 'react';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { FaInstagram, FaTelegramPlane, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import ContactItem from './ContactItem';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onClose={onClose} className="relative z-50">
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-0 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <DialogPanel className="w-full max-w-md mx-auto bg-white/80 rounded-lg shadow-lg transform transition-transform duration-500 ease-in-out">
                <div className="relative p-6">
                  <div className="flex items-center justify-between">
                    <DialogTitle className="text-xl font-semibold font-sans text-olive-green">Контакти</DialogTitle>
                    <button
                      type="button"
                      onClick={onClose}
                      className="absolute top-3 right-3 p-1.5 text-olive-green/50 hover:text-olive-green"
                    >
                      <span className="sr-only">Закрити</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  <div className="mt-6 space-y-4">
                    <ContactItem
                      icon={<FaInstagram className="text-blue-500 text-3xl" />}
                      label="Instagram"
                      value="takosta_ua"
                      link="https://www.instagram.com/takosta_ua/"
                      delay={0.1}
                    />
                    <ContactItem
                      icon={<FaTelegramPlane className="text-blue-400 text-3xl" />}
                      label="Telegram"
                      value="Tatiana_koll"
                      link="https://t.me/Tatiana_koll"
                      delay={0.2}
                    />
                    <ContactItem
                      icon={<FaPhoneAlt className="text-green-500 text-3xl" />}
                      label="Телефон"
                      value="+380(93)954 61 97"
                      link="tel:+380 93954 61 97"
                      delay={0.3}
                    />
                    <ContactItem
                      icon={<FaEnvelope className="text-red-500 text-3xl" />}
                      label="Електронна пошта"
                      value="takosta_ttt@gmail.com"
                      link="mailto:takosta_ttt@gmail.com"
                      delay={0.4}
                    />
                    <ContactItem
                      icon={<FaMapMarkerAlt className="text-gray-600 text-3xl" />}
                      label="Адреса"
                      value="2 ЖК “Софія”, Софіївська Борщагівка, вул.Боголюбова 36"
                      link="https://maps.app.goo.gl/BzvKAwHBy8MCneyk6"
                      delay={0.5}
                    />
                  </div>
                </div>
              </DialogPanel>
            </div>
          </motion.div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
