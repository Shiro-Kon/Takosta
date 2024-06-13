import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Головна", to: "/" },
  { name: "Продукція", to: "/product" },
  { name: "Доставка та оплата", to: "/delivery-payment" },
  { name: "Послуги", to: "/services" },
  { name: "Контакти", to: "/contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-light-gray-green font-sans">
      <nav className="flex items-center justify-between py-4 px-6 md:px-8 lg:px-6" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">TAKOSTA</span>
            <img className="h-12 w-auto" src="./Images/TAKOSTA_header.svg" alt="TAKOSTA Logo" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex md:gap-x-4 xl:gap-x-8 xxl:gap-x-14">
          {navigation.map((item) => (
            <Link key={item.name} to={item.to} className="md:text-xl xl:text-3xl font-light text-white hover:text-gray-300">
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link to="/basket" className="text-sm font-semibold leading-6 text-gray-900">
            <img src="./Images/Basket.svg" alt="Кошик" className="h-10" />
          </Link>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden " open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0  z-50  overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">TAKOSTA</span>
              <img className="h-12 w-auto" src="./Images/TAKOSTA_header.svg" alt="TAKOSTA Logo" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 "
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6 text-black" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link to="/" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Header;
