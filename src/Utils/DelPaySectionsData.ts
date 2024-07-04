type DeliveryContent = {
    type: 'delivery';
    logo: string;
    title: string;
    description: string;
  };
  
  type PaymentContent = {
    type: 'payment';
    logos?: string[];
    logo?: string;
    title: string;
    description: string;
  };
  
  type TextContent = {
    type: 'text';
    text: string;
  };
  
  type SectionContent = DeliveryContent | PaymentContent | TextContent;
  
  type Section = {
    title: string;
    content: SectionContent[];
  };


const  DelPaySectionsData:Section[] = [
    {
      title: 'Способи доставки',
      content: [
        {
        
          type: 'delivery',
          logo: './Images/Nova/Nova.svg',
          title: 'Нова Пошта на склад',
          description: 'Безкоштовна доставка від будь-якої суми. Відправка протягом 1-10 робочих днів, при накладеному платежі, повернення коштів оплачує клієнт. В період акцій термін доставки та очікування може бути продовженим.',
        },
        {
          type: 'delivery',
          logo: './Images/Nova/Nova.svg',
          title: 'Нова Пошта кур’єром',
          description: 'Безкоштовна доставка від будь-якої суми. Відправка протягом 1-10 робочих днів, при накладеному платежі, повернення коштів оплачує клієнт. В період акцій термін доставки та очікування може бути продовженим.',
        },
      ],
    },
    {
      title: 'Способи оплати',
      content: [
        {
          type: 'payment',
          logos: ['./Images/Nova/A.svg', './Images/Nova/G.svg'],
          title: 'Оплата онлайн',
          description: 'Оплатіть онлайн своє замовлення безпосередньо на сайті',
        },
        {
          type: 'payment',
          logo: './Images/Nova/Nova.svg',
          title: 'При отриманні',
          description: 'Оформіть замовлення і оплатіть його при отриманні.',
        },
      ],
    },
    {
      title: 'Терміни та оплата доставки',
      content: [
        {
          type: 'text',
          text: 'Відправка відбувається компанією Нова пошта протягом 1-10 робочих днів. Комісія за накладений платіж оплачується отримувачем.',
        },
      ],
    },
    {
      title: 'Обмін та повернення',
      content: [
        {
          type: 'text',
          text: 'Згідно постанови Кабінета Міністрів України від 19 березня 1994 р. № 172- парфюмерно-косметичні вироби обміну та поверненню не підлягають. Якщо упакування товару не пошкоджено (не відкрито), ви можете повернути товар протягом 14 днів після покупки. Якщо упакування пошкоджено, або товар використовувався - ви не можете його повернути.',
        },
      ],
    },
    {
      title: 'Доставка по світу',
      content: [
        {
          type: 'text',
          text: 'Відправка вашого замовлення за кордон відбувається після повної оплати клієнтом компанією Укрпошта (або за необхідності іншою компанією міжнародної доставки) в будь-яку країну та місто світу. Доставка оплачується клієнтом.',
        },
      ],
    },
  ];
  
  export default DelPaySectionsData;
  