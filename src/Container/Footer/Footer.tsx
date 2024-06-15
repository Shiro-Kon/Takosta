import { Link } from "react-router-dom";
import { footerSections } from "../../Utils/FooterData";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-light-gray-green flex flex-col items-center w-full pr-8">
      <div className="flex flex-col md:flex-row w-full justify-around items-start md:items-center px-4 md:px-0 overflow-hidden">
        <div className="flex-1 mb-8 md:mb-0 text-white">
          <img
            src="./Images/Footer/Footer.png"
            alt="Footer"
            className="h-96 sm:h-380 md:h-700 lg:h-[500px] xl:h-[600px] xxl:h-[700px] lg:w-[300px] xl:w-[400px] xxl:w-[600px] object-cover hidden lg:flex"
          />
        </div>
        {footerSections.map((section, index) => (
          <div key={index} className="flex-1 mb-8 md:mb-0 text-white">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl xxl:text-6xl mb-2">{section.title}</h3>
            {section.links ? (
              section.links.map((link, linkIndex) => (
                <p key={linkIndex} className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl xxl:text-5xl my-2">
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
                <p key={detailIndex} className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl xxl:text-3xl my-2">
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
    </footer>
  );
};

export default Footer;
