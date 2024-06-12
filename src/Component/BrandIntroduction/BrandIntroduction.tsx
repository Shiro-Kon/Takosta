import "./BrandIntroduction.scss";

type Props = {};

const BrandIntroduction = (props: Props) => {
  return (
    <div className="mx-auto px-4 py-16 bg-light-gray-green">
      <h2 className="text-[85px] font-forum text-center mb-8 text-white">
        <span className="font-pushkin text-[140px] text-soft-sand mr-4">
          Привіт ,
        </span>
        це бренд
        <div className="relative flex justify-center items-center ">
          <svg className="absolute   scale-150 w-[400px] h-[200px] ">
            <path
              d="M 160,70 C 300,30 360,130 150,150 C 30,160 110,55 200,50"
              fill="none"
              stroke="#B89A60"
              strokeWidth="3"
            />
          </svg>
          <div className="z-20">TAKOSTA</div>
        </div>
      </h2>
      <div className=" mx-auto py-10 px-12 max-w-[80%] text-4xl leading-relaxed text-center text-white font-sans">
  <p>Вітає вас у світі краси та догляду!</p>
  <p>У всі віки прекрасна половина людства вигадувала щось незвичайне, щоб турбуватися про свою красу…</p>
  <p>Наша місія - робити ваше волосся сильним, здоровим і блискучим, даруючи вам впевненість у собі кожен день.</p>
  <p>Дозвольте собі доторкнутися до справжньої магії…</p>
  <p>TAKOSTA об’єднує в собі високу якість та індивідульний підхід, щоб кожна красуня мала змогу насолоджуватися красою та здоров’ям свого волосся.</p>
  <p>Висока якість та професійний підхід - ось основні принципи, на яких ґрунтується наша продукція. Ми обираємо тільки найкращі інгредієнти, щоб забезпечити найкращі результати для вашого волосся та шкіри голови.</p>
  <p>Приєднуйтесь до нас у подорожі до краси і дбайте про себе разом з ТМ «TAKOSTA».</p>
</div>
    </div>
  );
};

export default BrandIntroduction;
