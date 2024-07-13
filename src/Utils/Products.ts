export interface Product {
  id: string;
  name: string;
  subname: string;
  category: string;
  description: string;
  shirtDescription: string;
  image: string;
  price: number;
  purpose: string; // Призначення
  hairType: string; // Тип волосся
  volume: string; // Обем
  note: string; // Примітка
  madeIn: string; // Зроблено
  composition: string; // Склад
  usage: string; // Спосіб використання
  link: string;
  productGroup: string;
}

export const products: Product[] = [
  {
    id: "Shampoo Repair",
    name: "Shampoo",
    subname: "Repair",
    category: "Очищення",
    productGroup: "Шампунь",
    description:
      "Шампунь створений для сухого, пошкодженого, пористого, середнього та товстого волосся. Дбайливо та делікатно очищає волосся та шкіру голови.  Глибоко проникає в структуру волосся, насичуючи їх необхідними мікроелементами, живить, зволожує та відновлює пошкоджені ділянки волосся.",
    image: "/Images/CarouselProduct/Shampoo-Repair.png",
    price: 380,
    purpose: "Очищення, пом'якшення, відновлення",
    hairType: "Для сухого, пошкодженого, пористого, середнього та товстого",
    volume: "300 мл",
    note: "не тестується на тваринах",
    madeIn: "Україна",
    composition:
      "Ingredients (INCI): Aqua, Cocamidopropyl Betaine, Disodium Laureth Sulfosuccinate, Sodium Lauroyl Sarcosinate, Cocamide DEA, Styrene/Acrylates Copolymer, Hydrolyzed Almond Protein, Chamomilla Recutita (Camomile) Extract, Betula Pendula Extract, Collagen, Elastin, Hydrolyzed Keratin, Ascorbic Acid, Sodium Сhloride, Orbignya Oleifera (Babassu) Seed Oil, Benzyl Alcohol, Benzoic Acid, Dehydroacetic Acid, Parfume, Amyl Сinnamal, Benzyl Вenzoate, Benzyl Salicylate, Citral, Citronellol, Coumarin, Eugenol, Geraniol, Hexyl Сinnamal, Hydroxycitronellal, Butylphenyl Мethylpropional, Limonene, Linalool.",
    usage: "Спосіб використання: 1-2 натиска вспінити в долонях та нанести вологе волосся, за необхідності повторити. Протипоказання: індивідуальна чутливість до компонентів.",
    shirtDescription: "Шампунь створений для сухого, пошкодженого, пористого, середнього та товстого волосся.",
     link: '/',
  },
  {
    id: "Shampoo Trietment",
    name: "Shampoo",
    subname: "Trietment",
    category: "Очищення",
    productGroup: "Шампунь",
    description:
      "Шампунь створений тонкого та середнього, нормального та схильного до жирності волосся. Дбайливо та делікатно очищає волосся та шкіру голови.  Розгладжує кутикулу, робить його міцнішим, зберігаючи при цьому мʼякість і наділяючи чудовим блиском, перешкоджає його швидкому забрудненню.",
    image: "/Images/CarouselProduct/Shampoo-Trietment.png",
    price: 380,

    purpose: "очищення, живлення",
    hairType: "тонкого та середнього, нормального та схильного до жирності волосся.",
    volume: "300мл",
    note: "не тестується на тваринах",
    madeIn: "Україна",
    composition:
      "Ingredients (INCI): Aqua, Cocamidopropyl Betaine, Sodium Lauroyl Sarcosinate, Disodium Laureth Sulfosuccinate, Glycerin, Cocamide DEA, Glycol Distearate, Styrene/Acrylates Copolymer, Panthenol, Hydrolyzed Keratin, Hydrolyzed Soja Protein, Triticum Аestivum Extract, Capsicum Annuum Extract, Propolis Extract, Apis Мellifera (Royal Jelly) Extract, Chamomilla Recutita (Camomile) Extract, Ascorbic Acid, Sodium Сhloride, Benzyl Alcohol, Benzoic Acid, Dehydroacetic Acid, Parfume, Cinnamal, Citral, Citronellol, Coumarin, Eugenol, Geraniol, Hexyl Cinnamal, Limonene, Linalool.",
    usage: "Спосіб використання: 1-2 натиска вспінити в долонях та нанести вологе волосся, за необхідності повторити.  Протипоказання: індивідуальна чутливість до компонентів.",
    shirtDescription: "Шампунь створений для сухого, пошкодженого, пористого, середнього та товстого волосся.",
     link: '/',
  },
  {
    id: "Condicioner For all hair types",
    name: "Condicioner",
    subname: "For all hair types",
    category: "Зволоження",
    productGroup: "Кондиціонер",
    description:
      "Живить, відновлює, пом'якшує та розгладжує волосся, полегшує розчісування, надає м’якість, еластичність та блиск локонам.",
    image: "/Images/CarouselProduct/Conditioner-For-All-Hair-Types.png",
    price: 380,
    purpose: "Живлення, відновлення",
    hairType: "для всіх типів волосся",
    volume: "250 мл",
    note: "не тестується на тваринах",
    madeIn: "Україна",
    composition:
      "Ingredients (INCI): Aqua, Gardenia Tahitensis (Monoi De Tahiti) Oil, Myristyl Alcohol, Cetrimonium Chloride, Cetearyl Alcohol, Glyceryl Monostearate, Glyceryl Stearate, Stearamidopropyl Dimethylamine, Myristyl Lactate, Behentrimonium Chloride, Ethylhexyl Cocoate, Lanolin, Hydrolyzed Keratin, Glycerin, Honey Extract, Humulus Lupulus Conus Еxtract, Calendula Оfficinalis Flower Extract, Hydrolyzed Silk Protein, Hydrolyzed Wheat Bran Protein, Benzyl Alcohol, Benzoic Acid, Dehydroacetic Acid, Parfume, Cinnamal, Citral, Citronellol, Coumarin, Eugenol, Geraniol, Hexyl Cinnamal, Limonene, Linalool.",
    usage: "Спосіб використання: кондиціонер нанести вологе волосся, після шампуню, потримати 2-3 хвилини, обережно розчешіть гребінцем, змити.  Протипоказання: індивідуальна чутливість до компонентів.",
    shirtDescription: "Живить, відновлює, пом'якшує та розгладжує волосся.",
     link: '/',
  },
  {
    id: "Nektar Hair Oil",
    name: "Nektar",
    subname: "Hair Oil",
    productGroup: "Кондиціонер",
    category: "Зволоження",
    description:
      "Згладжувальна і зволожуюча олія. Забезпечує захист від впливу зовнішніх подразників і попереджає руйнування кутикули. Активні компоненти роблять волосся шовковистим і м'яким. Ніжна олія швидко проникає в кутикулу, надаючи поживну і регенеруючу дію, полегшує розчісування, оберігає при гарячому укладанні.",
    image: "/Images/CarouselProduct/Nektar-Hair-Oil.png",
    price: 380,
    purpose: "Очищення, пом'якшення, відновлення",
    hairType: "Для сухого",
    volume: "250 мл",
    note: "не тестується на тваринах",
    madeIn: "Україна",
    composition:
      "Вода, SLES, кокамідопропілбетаїн, екстракт алое, ароматизатор",
    usage: "Нанести на вологе волосся, спінити, змити водою.",
    shirtDescription: "Шампунь створений для сухого, пошкодженого, пористого, середнього та товстого волосся.",
     link: '/',
  },
  {
    id: "Nektar Hair Oil Small",
    name: "Nektar",
    subname: "Hair Oil Small",
    productGroup: "Кондиціонер",
    category: "Зволоження",
    description:
      "Згладжувальна і зволожуюча олія. Забезпечує захист від впливу зовнішніх подразників і попереджає руйнування кутикули. Активні компоненти роблять волосся шовковистим і м'яким. Ніжна олія швидко проникає в кутикулу, надаючи поживну і регенеруючу дію, полегшує розчісування, оберігає при гарячому укладанні.",
    image: "/Images/CarouselProduct/Nektar-Hair-Oil-Small.png",
    price: 380,
    purpose: "Очищення, пом'якшення, відновлення",
    hairType: "Для сухого",
    volume: "250 мл",
    note: "не тестується на тваринах",
    madeIn: "Україна",
    composition:
      "Вода, SLES, кокамідопропілбетаїн, екстракт алое, ароматизатор",
    usage: "Нанести на вологе волосся, спінити, змити водою.",
    shirtDescription: "Шампунь створений для сухого, пошкодженого, пористого, середнього та товстого волосся.",
     link: '/',
  },
  {
    id: "Express Conditioner",
    name: "Express",
    subname: "Conditioner",
    productGroup: "Кондиціонер",
    category: "Зволоження",
    description:
      "З екстрактом аргани та протеїнами шовку для всіх типів волосся, революційне рішення для догляду за волоссям, створене для живлення, зволоження та слухняності ваших пасм. Ця унікальна формула поєднує в собі зручність спрею з перевагами традиційного кондиціонера, що робить його обов'язковим доповненням до щоденного",
    image: "/Images/CarouselProduct/Express-Conditioner.png",
    price: 380,
    purpose: "Очищення, пом'якшення, відновлення",
    hairType: "Для сухого",
    volume: "250 мл",
    note: "не тестується на тваринах",
    madeIn: "Україна",
    composition:
      "Вода, SLES, кокамідопропілбетаїн, екстракт алое, ароматизатор",
    usage: "Нанести на вологе волосся, спінити, змити водою.",
    shirtDescription: "Шампунь створений для сухого, пошкодженого, пористого, середнього та товстого волосся.",
     link: '/',
  },
  {
    id: "Liquid Silk",
    name: "Liquid",
    subname: "Silk",
    productGroup: "Кондиціонер",
    category: "Відновлення",
    description:
      "Робить волосся блискучим та гладким, не обтяжує і не склеює локони. Легка формула, збагачена протеїнами пшениці, додатково пожвавлює пасма, а антистатичні властивості ламелярної води зменшують пухнастість.",
    image: "/Images/CarouselProduct/Liquid-Silk.png",
    price: 380,
    purpose: "Очищення, пом'якшення, відновлення",
    hairType: "Для сухого",
    volume: "250 мл",
    note: "не тестується на тваринах",
    madeIn: "Україна",
    composition:
      "Вода, SLES, кокамідопропілбетаїн, екстракт алое, ароматизатор",
    usage: "Нанести на вологе волосся, спінити, змити водою.",
    shirtDescription: "Шампунь створений для сухого, пошкодженого, пористого, середнього та товстого волосся.",
     link: '/',
  },

  {
    id: "Набір Перший",
    name: "Набір",
    subname: "Перший",
    productGroup: "Кондиціонер",
    category: "Комплексні набори!",
    description:
      "Активний ріст, збільшення густини та зволоження. Твій бездоганний помічник у догляді вже тут. Догляд з високим вмістом Ніацинаміду, Органічного Сквалану та Арганового масла, поєднаний із делікатними густими пінами Кокосової Пальми і Кондиціонуючими органічними агентами з Оливкових дерев",
    image: "/Images/CarouselProduct/Комплексні-набори-1.png",
    price: 380,
    purpose: "Очищення, пом'якшення, відновлення",
    hairType: "Для сухого",
    volume: "250 мл",
    note: "не тестується на тваринах",
    madeIn: "Україна",
    composition:
      "Вода, SLES, кокамідопропілбетаїн, екстракт алое, ароматизатор",
    usage: "Нанести на вологе волосся, спінити, змити водою.",
    shirtDescription: "Шампунь створений для сухого, пошкодженого, пористого, середнього та товстого волосся.",
     link: '/',
  },
  {
    id: "Набір Другий",
    name: "Набір",
    subname: "Другий",
    productGroup: "Кондиціонер",
    category: "Комплексні набори!",
    description:
      "Активний ріст, збільшення густини та зволоження. Твій бездоганний помічник у догляді вже тут. Догляд з високим вмістом Ніацинаміду, Органічного Сквалану та Арганового масла, поєднаний із делікатними густими пінами Кокосової Пальми і Кондиціонуючими органічними агентами з Оливкових дерев",
    image: "/Images/CarouselProduct/Комплексні-набори-2.png",
    price: 380,
    purpose: "Очищення, пом'якшення, відновлення",
    hairType: "Для сухого",
    volume: "250 мл",
    note: "не тестується на тваринах",
    madeIn: "Україна",
    composition:
      "Вода, SLES, кокамідопропілбетаїн, екстракт алое, ароматизатор",
    usage: "Нанести на вологе волосся, спінити, змити водою.",
    shirtDescription: "Шампунь створений для сухого, пошкодженого, пористого, середнього та товстого волосся.",
     link: '/',
  },
  {
    id: "Набір Третій",
    name: "Набір",
    subname: "Третій",
    productGroup: "Кондиціонер",
    category: "Комплексні набори!",
    description:
      "Активний ріст, збільшення густини та зволоження. Твій бездоганний помічник у догляді вже тут. Догляд з високим вмістом Ніацинаміду, Органічного Сквалану та Арганового масла, поєднаний із делікатними густими пінами Кокосової Пальми і Кондиціонуючими органічними агентами з Оливкових дерев",
    image: "/Images/CarouselProduct/Комплексні-набори-3.png",
    price: 380,
    purpose: "Очищення, пом'якшення, відновлення",
    hairType: "Для сухого",
    volume: "250 мл",
    note: "не тестується на тваринах",
    madeIn: "Україна",
    composition:
      "Вода, SLES, кокамідопропілбетаїн, екстракт алое, ароматизатор",
    usage: "Нанести на вологе волосся, спінити, змити водою.",
    shirtDescription: "Шампунь створений для сухого, пошкодженого, пористого, середнього та товстого волосся.",
     link: '/',
  },
  {
    id: "Набір Четвертий",
    name: "Набір",
    subname: "Четвертий",
    productGroup: "Кондиціонер",
    category: "Комплексні набори!",
    description:
      "Активний ріст, збільшення густини та зволоження. Твій бездоганний помічник у догляді вже тут. Догляд з високим вмістом Ніацинаміду, Органічного Сквалану та Арганового масла, поєднаний із делікатними густими пінами Кокосової Пальми і Кондиціонуючими органічними агентами з Оливкових дерев",
    image: "/Images/CarouselProduct/Комплексні-набори-4.png",
    price: 380,
    purpose: "Очищення, пом'якшення, відновлення",
    hairType: "Для сухого",
    volume: "250 мл",
    note: "не тестується на тваринах",
    madeIn: "Україна",
    composition:
      "Вода, SLES, кокамідопропілбетаїн, екстракт алое, ароматизатор",
    usage: "Нанести на вологе волосся, спінити, змити водою.",
    shirtDescription: "Шампунь створений для сухого, пошкодженого, пористого, середнього та товстого волосся.",
     link: '/',
  },
];
