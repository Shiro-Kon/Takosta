import React, { useState } from "react";
import AnimatedElement from "../Component/AnimatedElement/AnimatedElement";

const DeliveryPaymentPage: React.FC = () => {
  const [sections, setSections] = useState({
    delivery: false,
    payment: false,
    terms: false,
    returns: false,
    worldwide: false,
  });

  const toggleSection = (section: keyof typeof sections) => {
    setSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <main className="pt-[50px] lg:pt-[200px] xl:pt-[60px] flex justify-center min-h-screen bg-light-gray-green text-white">
      <div className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-0 md:gap-8">
          <div className="mb-8 md:mb-0 md:mx-16">
            <AnimatedElement
              direction="up"
              delay={0.4}
              className="text-3xl md:text-5xl lg:text-7xl xl:text-7xl xxl:text-8xl text-soft-sand  font-bold font-pushkin mb-4 md:mb-6 lg:mb-4"
            >
              Доставка та оплата
            </AnimatedElement>
            <AnimatedElement direction="up" delay={0.7}>
              <p className="text-xl md:text-2xl lg:text-2xl xl:text-xl xxl:text-2xl mb-4 md:mb-6 lg:mb-4">
                У нас є 2 способи доставки та 3 способи оплати, ви можете
                скористатись найбільш зручним для вас.
              </p>
            </AnimatedElement>
            <AnimatedElement direction="up" delay={1}>
              <p className="text-xl md:text-2xl lg:text-2xl xl:text-xl xxl:text-2xl font-bold mb-4">
                ЗВЕРНІТЬ УВАГУ! Посилка зберігається на відділенні 5 днів.
              </p>
            </AnimatedElement>
          </div>

          <div className="mb-14 md:mx-16">
          <AnimatedElement direction="up"  delay={1.4}>
            <Section
              title="Способи доставки"
              isOpen={sections.delivery}
              toggleSection={() => toggleSection('delivery')}
            >
              <DeliveryOptions />
            </Section>

            <Section
              title="Способи оплати"
              isOpen={sections.payment}
              toggleSection={() => toggleSection('payment')}
            >
              <PaymentOptions />
            </Section>

            <Section
              title="Терміни та оплата доставки"
              isOpen={sections.terms}
              toggleSection={() => toggleSection('terms')}
            >
              <Terms />
            </Section>

            <Section
              title="Обмін та повернення"
              isOpen={sections.returns}
              toggleSection={() => toggleSection('returns')}
            >
              <Returns />
            </Section>

            <Section
              title="Доставка по світу"
              isOpen={sections.worldwide}
              toggleSection={() => toggleSection('worldwide')}
            >
              <WorldwideDelivery />
            </Section>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </main>
  );
};

type SectionProps = {
  title: string;
  isOpen: boolean;
  toggleSection: () => void;
  children: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({
  title,
  isOpen,
  toggleSection,
  children,
}) => (
  
  <div className="mb-6">
    <div
      className="cursor-pointer font-medium text-white flex justify-between items-center text-2xl md:text-3xl xl:text-2xl xxl:text-5xl select-none"
      onClick={toggleSection}
    >
      {title}
      <span className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
        ▼
      </span>
    </div>
    <div
      className={`mt-6 pl-4 border-l-2 border-gray-300 overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[1000px]" : "max-h-0"}`}
    >
      {children}
    </div>
  </div>
);

const DeliveryOptions: React.FC = () => (
  <div className="grid gap-10">
    <DeliveryOption
      logo="./Images/Nova/Nova.svg"
      title="Нова Пошта на склад"
      description="Безкоштовна доставка від будь-якої суми. Відправка протягом 1-10 робочих днів, при накладеному платежі, повернення коштів оплачує клієнт. В період акцій термін доставки та очікування може бути продовженим."
    />
    <DeliveryOption
      logo="./Images/Nova/Nova.svg"
      title="Нова Пошта кур’єром"
      description="Безкоштовна доставка від будь-якої суми. Відправка протягом 1-10 робочих днів, при накладеному платежі, повернення коштів оплачує клієнт. В період акцій термін доставки та очікування може бути продовженим."
    />
  </div>
);

const DeliveryOption: React.FC<{ logo: string; title: string; description: string }> = ({
  logo,
  title,
  description,
}) => (
  <div className="bg-white shadow-lg rounded-lg p-6 text-gray-700">
    <img src={logo} alt="Delivery Option" className="w-14 h-14 object-scale-down mb-4" />
    <div className="font-bold text-lg mb-2">{title}</div>
    <p className="text-lg mb-4">{description}</p>
  </div>
);

const PaymentOptions: React.FC = () => (
  <div className="grid gap-10">
    <PaymentOption
      logos={["./Images/Nova/A.svg", "./Images/Nova/G.svg"]}
      title="Оплата онлайн"
      description="Оплатіть онлайн своє замовлення безпосередньо на сайті"
    />
    <PaymentOption
      logo="./Images/Nova/Nova.svg"
      title="При отриманні"
      description="Оформіть замовлення і оплатіть його при отриманні."
    />
  </div>
);

const PaymentOption: React.FC<{ logos?: string[]; logo?: string; title: string; description: string }> = ({
  logos,
  logo,
  title,
  description,
}) => (
  <div className="bg-white shadow-lg rounded-lg p-6 text-gray-700">
    {logos ? (
      <div className="flex flex-row gap-6">
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt="Payment Option" className="w-14 h-14 object-scale-down mb-4" />
        ))}
      </div>
    ) : (
      <img src={logo} alt="Payment Option" className="w-14 h-14 object-scale-down mb-4" />
    )}
    <div className="font-bold text-lg mb-2">{title}</div>
    <p className="text-lg mb-4">{description}</p>
  </div>
);

const Terms: React.FC = () => (
  <div>
    <p>Відправка відбувається компанією Нова пошта протягом 1-10 робочих днів.</p>
    <p>Комісія за накладений платіж оплачується отримувачем.</p>
  </div>
);

const Returns: React.FC = () => (
  <div>
    <p>
      Згідно постанови Кабінета Міністрів України від 19 березня 1994 р. № 172- парфюмерно-косметичні вироби обміну та
      поверненню не підлягають.
    </p>
    <p>Якщо упакування товару не пошкоджено (не відкрито), ви можете повернути товар протягом 14 днів після покупки.</p>
    <p>Якщо упакування пошкоджено, або товар використовувався - ви не можете його повернути.</p>
  </div>
);

const WorldwideDelivery: React.FC = () => (
  <div>
    <p>
      Відправка вашого замовлення за кордон відбувається після повної оплати клієнтом компанією Укрпошта (або за необхідності
      іншою компанією міжнародної доставки) в будь-яку країну та місто світу.
    </p>
    <p>Доставка оплачується клієнтом.</p>
  </div>
);

export default DeliveryPaymentPage;
