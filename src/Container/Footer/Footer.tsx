import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="static inset-x-0 bottom-0 z-50 bg-light-gray-green ">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:basis-1/3 flex justify-center lg:justify-start">
          <img src="./Images/Footer/Footer.png" alt="" className="max-w-full h-auto" />
        </div>
        <div className="lg:basis-2/3 flex flex-col justify-around gap-6 text-almost-white font-normal text-xl lg:text-2xl py-10 lg:py-14">
          <div className="flex justify-center lg:justify-start">
            <img src="./Images/TAKOSTA_logo.PNG" alt="TAKOSTA Logo" className="h-20 w-auto" />
          </div>
          <div className="grid gap-4 grid-cols-1">
            <div className="grid gap-1.5 ml-4 text-center lg:text-left">
              <h1 className="mb-6 mt-2 text-3xl lg:text-4xl">Контакти</h1>
              <p>+380(93)954 61 97</p>
              <p>takosta_ttt@gmail.com</p>
            </div>
            <div className="grid gap-1.5 ml-4 text-center lg:text-left">
              <h1 className="mb-6 mt-2 text-3xl lg:text-4xl">Telegram</h1>
              <Link to="https://t.me/Tatiana_koll">
                <p>tatiana_koll_</p>
              </Link>
            </div>
            <div className="grid gap-1.5 ml-4 text-center lg:text-left">
              <h1 className="mb-6 mt-2 text-3xl lg:text-4xl">Адреса</h1>
              <p>ЖК “Софія” Софіївська Борщагівка вул.Боголюбова 36</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
