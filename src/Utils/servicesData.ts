export interface Service {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Стрижка",
    description: "Наша професійна команда стилістів забезпечить вам ідеальну стрижку для будь-якого типу волосся.",
    price: "300 грн",
    image: "./Images/Reviews/work1.png",
  },
  {
    id: 2,
    title: "Фарбування",
    description: "Ми пропонуємо широкий вибір кольорів і технік фарбування для найсміливіших змін.",
    price: "500 грн",
    image: "./Images/Reviews/work1.png",
  },
  {
    id: 3,
    title: "Укладка",
    description: "Укладка волосся з використанням найсучасніших засобів та інструментів.",
    price: "400 грн",
    image: "./Images/Reviews/work1.png",
  },
  {
    id: 4,
    title: "Масаж голови",
    description: "Релаксуючий масаж голови для зняття стресу та покращення кровообігу.",
    price: "200 грн",
    image: "./Images/Reviews/work1.png",
  },
 
];
