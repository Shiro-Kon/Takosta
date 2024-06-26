import React from "react";
import { Link } from "react-router-dom";
import { footerSections } from "../../Utils/FooterData";

const Footer = () => {
  return (
    <footer className="bg-light-gray-green flex flex-col w-full border-t-2 border-black/20  ">
      <div className="bg-black/10 ">
        <div className="flex flex-col md:flex-row w-full justify-around items-start overflow-hidden ">
          <div className="lg:flex-1 text-white">
            <img
              src="./Images/Footer/Footer.png"
              alt="Footer"
              loading="lazy"
              className="md:h-[400px] lg:h-[500px] xl:h-[600px] xxl:h-[700px] md:w-[200px] lg:w-[300px] xl:w-[400px] xxl:w-[600px] object-cover hidden lg:block"
            />
          </div>
          {footerSections.map((section, index) => (
            <div key={index} className="flex-1 mt-4 mb-8 mx-8 md:mx-16 lg:mb-0 lg:mx-0 text-white  ">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl xxl:text-6xl mb-4 xl:mb-6">{section.title}</h3>
              {section.links ? (
                section.links.map((link, linkIndex) => (
                  <p key={linkIndex} className="text-base text-lg md:text-xl lg:text-2xl xl:text-3xl xxl:text-4xl my-2">
                    <Link
                      to={link.to}
                      className="text-white no-underline hover:underline"
                    >
                      {link.name}
                    </Link>
                  </p>
                ))
              ) : (
                section.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-base text-lg md:text-xl lg:text-2xl xl:text-3xl xxl:text-4xl my-2">
                    {detail.startsWith("Telegram") ? (
                      <a
                        href={detail.split(": ")[1]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white no-underline hover:underline"
                      >
                        {detail}
                      </a>
                    ) : (
                      detail
                    )}
                  </p>
                ))
              )}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
