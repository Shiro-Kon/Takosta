import { useState, useEffect } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import MobileMenu from "./MobileMenu";

const navigation = [
  { name: "Головна", to: "/" },
  { name: "Продукція", to: "/product" },
  { name: "Доставка та оплата", to: "/delivery-payment" },
  { name: "Послуги", to: "/services" },
  { name: "Контакти", to: "/contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const location = useLocation();

  const handleLinkClick = (to: string) => {
    setActiveLink(to);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black bg-opacity-15 backdrop-blur-md font-sans">
      <nav
        className="flex items-center justify-between py-2 xxl:py-4 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">TAKOSTA</span>
            <img
              className="h-8 md:h-10 w-auto"
              src="./Images/Header/TAKOSTA_header.svg"
              alt="TAKOSTA Logo"
            />
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

        <div className="hidden lg:flex gap-x-4 xl:gap-x-6 xxl:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              onClick={() => handleLinkClick(item.to)}
              className={`relative text-base sm:text-lg md:text-xl lg:text-xl xxl:text-2xl font-light text-white transition-colors duration-300 hover:text-white/60 pb-1 ${
                item.to === activeLink ? "text-white" : "text-white/80"
              }`}
            >
              {item.name}

              {item.to === activeLink && (
                <span
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/40 transform translate-y-1 transition-transform duration-300 rounded-full"
                  style={{
                    transformOrigin: "left center",
                    transform: "scaleX(1)",
                  }}
                />
              )}

              <span
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/40 transform translate-y-1/2 transition-transform duration-300 rounded-full"
                style={{
                  transformOrigin: "left center",
                  transform: item.to === activeLink ? "scaleX(1)" : "scaleX(0)",
                }}
              />
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            to="/basket"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            <img
              src="./Images/Header/Basket.png"
              alt="Кошик"
              className="h-8 invert"
            />
          </Link>
        </div>
      </nav>
      <MobileMenu
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        activeLink={activeLink}
        handleLinkClick={handleLinkClick}
        navigation={navigation}
      />
    </header>
  );
};

export default Header;
