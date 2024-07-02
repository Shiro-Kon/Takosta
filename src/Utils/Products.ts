export interface Product {
    id: number;
    name: string;
    subname: string;
    category: string;
    description: string;
    image: string;
  }
  
  export const products: Product[] = [
    {
      id: 1,
      name: "Shampoo",
      subname: "Repair",
      category: "Очищення",
      description: "Відновлюючий шампунь для пошкодженого волосся",
      image: "./Images/CarouselProduct/IMG-1.png"
    },
    {
      id: 2,
      name: "Shampoo",
      subname:"Trietment",
      category: "Очищення",
      description: "Лікувальний шампунь для всіх типів волосся",
      image: "./Images/CarouselProduct/IMG-2.png"
    },
    {
      id: 3,
      name: "Condicioner",
      subname:"For all hair types",
      category: "Зволоження",
      description: "Кондиціонер для всіх типів волосся",
      image: "./Images/CarouselProduct/IMG-3.png"    },
    {
      id: 4,
      name: "NEKTAR",
      subname:"Hair Oil",
      category: "Зволоження",
      description: "Олія для волосся",
      image: "./Images/CarouselProduct/IMG-4.png"    },
    {
      id: 5,
      name: "LIQUID",
      subname:"SILK",
      category: "Відновлення",
      description: "Рідкий шовк для відновлення волосся",
      image: "./Images/CarouselProduct/IMG-5.png"    },
   
  ];