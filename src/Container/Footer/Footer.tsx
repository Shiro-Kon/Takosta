import React from 'react';
import { footerSections } from '../../Utils/FooterData';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/25 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {footerSections.map((section, index) => (
            <div key={index} className="text-white">
              <div className="font-semibold mb-2">{section.title}</div>
              {section.details ? (
                section.details.map((item, idx) => (
                  <div key={idx} className="mb-1">
                    {item.type === 'tel' ? (
                      <a href={`tel:${item.contact}`} className=" sm:text-sm md:text-lg">
                        {item.contact}
                      </a>
                    ) : item.type === 'email' ? (
                      <a href={`mailto:${item.contact}`} className=" sm:text-sm md:text-lg">
                        {item.contact}
                      </a>
                    ) : item.type === 'link' ? (
                      <a href={item.contact} className=" sm:text-sm md:text-lg">
                        {item.contact}
                      </a>
                    ) : (
                      <span className=" sm:text-sm md:text-lg">{item.contact}</span>
                    )}
                  </div>
                ))
              ) : (
                section.links.map((link, idx) => (
                  <div key={idx} className="mb-1">
                    <a href={link.url} className="text-white/80 sm:text-sm md:text-lg">
                      {link.name}
                    </a>
                  </div>
                ))
              )}
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <div className="text-white  sm:text-sm md:text-lg ">
            TAKOSTA professional cosmetics
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
