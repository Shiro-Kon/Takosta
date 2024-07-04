// BeautyServices.ts

export interface BeautyService {
  id: number;
  name: string;
  subname?: string;
  category: string;
  priceRange: string;
  description?: string;
}

export const beautyServices: BeautyService[] = [
  {
      id: 1,
      name: "Укладання пряме",
      category: "Укладання",
      priceRange: "450-700 грн",
  },
  {
      id: 2,
      name: "Накрутка волосся",
      category: "Укладання",
      priceRange: "600-900 грн",
  },
  {
      id: 3,
      name: "Вечірня укладка",
      category: "Укладання",
      priceRange: "900-1500 грн",
  },
  {
      id: 4,
      name: "Афрокудрі",
      category: "Укладання",
      priceRange: "800-1300 грн",
  },
  {
      id: 5,
      name: "Плетіння",
      category: "Укладання",
      priceRange: "450-900 грн",
  },
  {
      id: 6,
      name: "Жіноча стрижка",
      category: "Стрижки",
      priceRange: "900-1300 грн",
      description: "*додатково за дуже густе волосся 350 грн",
  },
  {
      id: 7,
      name: "Стрижка кінчиків",
      category: "Стрижки",
      priceRange: "600-850 грн",
      description: "*(без миття волосся)",
  },
  {
      id: 8,
      name: "Стрижка чілки",
      category: "Стрижки",
      priceRange: "400 грн",
      description: "*(без миття волосся)",
  },
  {
      id: 9,
      name: "Стрижка чоловіча",
      category: "Стрижки",
      priceRange: "600-1000 грн",
      description: "*(ціна залежить від складності стрижки)",
  },
  {
      id: 10,
      name: "Фарбування коренів",
      category: "Забарвлення волосся",
      priceRange: "900-1400 грн",
  },
  {
      id: 11,
      name: "Фарбування в один тон / Тонування",
      category: "Забарвлення волосся",
      priceRange: "1300-2400 грн",
  },
  {
      id: 12,
      name: "Мелирование / Колорирование",
      category: "Забарвлення волосся",
      priceRange: "3000-4700 грн",
  },
  {
      id: 13,
      name: "AirTouch / Вихід із чорного",
      category: "Забарвлення волосся",
      priceRange: "5200-7800 грн",
      description: "*фарбник оплачується окремо. Кількість фарбника залежить від густоти, довжини волосся та складності фарбування (1 г – 11 грн)",
  },
  
]
