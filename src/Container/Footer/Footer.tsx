import { Link } from "react-router-dom";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="static inset-x-0 bottom-0 z-50 bg-light-gray-green ">
      <div className="flex flex-row">
        <div className="basis-1/3">
          <img src="./Images/Footer/Footer.png" alt="" />
        </div>
        <div className="basis-1/2 flex flex-col flex-wrap justify-around  gap-6 text-almost-white font-normal text-2xl py-14">
          <img
            src="./Images/TAKOSTA_logo.PNG"
            alt=""
            className="h-[80px] w-[250px] "
          />
          <div className="grid gap-4 grid-cols-1">
            <div className="grid gap-1.5 ml-4">
              <h1 className="mb-6 mt-2 text-4xl -ml-4">Контакти</h1>
              <p>+380(93)954 61 97</p>
              <p>takosta_ttt@gmail/com</p>
            </div>
            <div className="grid gap-1.5 ml-4">
              <h1 className="mb-6 mt-2 text-4xl -ml-4">Telegram</h1>
              <Link to="https://t.me/Tatiana_koll">
                <p>tatiana_koll_</p>
              </Link>
            </div>
            <div className="grid gap-1.5 ml-4">
              <h1 className="mb-6 mt-2 text-4xl -ml-4">Адреса</h1>
              <p>ЖК “Софія” Софіївська Борщагівка вул.Боголюбова 36</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
