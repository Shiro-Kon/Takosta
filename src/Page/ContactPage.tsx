import React, { useState } from "react";
import AnimatedElement from "../Component/AnimatedElement/AnimatedElement";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <main className="pt-[50px] lg:pt-[200px] xl:pt-[60px] flex justify-center min-h-screen bg-grayish-beige text-white">
      <div className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-0 md:gap-8">
          <div className="mb-8 md:mb-0 md:mx-16">
            <AnimatedElement
              direction="up"
              delay={0.4}
              className="text-3xl md:text-5xl lg:text-7xl xl:text-6xl xxl:text-8xl font-bold font-forum mb-4 md:mb-6 lg:mb-14"
            >
              Контакти та консультація
            </AnimatedElement>
            <AnimatedElement direction="up" delay={0.7}>
              <p className="text-xl md:text-2xl lg:text-2xl xl:text-xl xxl:text-2xl mb-4 md:mb-6 lg:mb-12">
              Замовте консультацію і  косметолог підбере для вас  продукцію для догляду
              </p>
            </AnimatedElement>
            <AnimatedElement direction="up" delay={1}>
              <div className="space-y-4">
                <ContactInfo
                  icon="location"
                  text="2 ЖК “Софія”, Софіївська Борщагівка, вул.Боголюбова 36"
                />
                <ContactInfo
                  icon="phone"
                  text="+380(93)954 61 97"
                />
                <ContactInfo
                  icon="email"
                  text="takosta_ttt@gmail.com"
                />
                <ContactInfo
                  icon="telegram"
                  text="https://t.me/Tatiana_koll"
                  isLink={true}
                />
              </div>
            </AnimatedElement>
          </div>

          <div className="mb-14 md:mx-16">
            <AnimatedElement direction="up" delay={1.4}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <Input
                    name="firstName"
                    placeholder="Ім'я"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  <Input
                    name="lastName"
                    placeholder="Прізвище"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Емейл"
                  value={formData.email}
                  onChange={handleChange}
                />
                <Input
                  name="phoneNumber"
                  type="tel"
                  placeholder="Телефон"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
                <textarea
                  name="message"
                  placeholder="Повідомлення"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="bg-white/10 rounded-md p-3 w-full text-white placeholder-white/50"
                />
                <button
                  type="submit"
                  className="bg-black/30 text-white py-3 px-6 rounded-md shadow-sm duration-200 ease-out hover:bg-white hover:text-black/70 active:scale-95"
                >
                  Надіслати 
                </button>
              </form>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </main>
  );
};

const ContactInfo: React.FC<{ icon: string; text: string; isLink?: boolean }> = ({ icon, text, isLink }) => (
  <div className="flex items-center space-x-3">
    <svg className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      {icon === "location" && (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      )}
      {icon === "phone" && (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      )}
      {icon === "email" && (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      )}
      {icon === "telegram" && (
        <path d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z"/>
      )}
    </svg>
    {isLink ? (
      <a href={text} className="text-lg text-white hover:underline">
        {text}
      </a>
    ) : (
      <span className="text-lg">{text}</span>
    )}
  </div>
);

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => (
  <input
    {...props}
    className="bg-white/10 rounded-md p-3 w-full text-white placeholder-white/50"
  />
);

export default ContactForm;
