
export interface CarouselProductsData {
  id: string;
  image: string;
  title: string;
  description: string;
  price: string;
  link: string;
}

  
  const CarouselProducts: CarouselProductsData[] = [
    {
      id: '1',
      image: './Images/CarouselProduct/carouselProducts1.png',
      title: 'Shampoo Repair 1',
      description: 'Активний ріст, збільшення густини та зволоження. 1',
      price: '100 ',
      link: '/',
    },
    {
      id: '2',
      image: './Images/CarouselProduct/carouselProducts2.png',
      title: 'Shampoo Repair 2',
      description: 'Активний ріст, збільшення густини та зволоження. 2 ',
      price: '200 ',
      link: '/',
    },
    {
      id: '3',
      image: './Images/CarouselProduct/carouselProducts3.png',
      title: 'Shampoo Repair 3',
      description: 'Активний ріст, збільшення густини та зволоження. 3',
      price: '300 ',
      link: '/',
    },
    
  ];
  
  export default CarouselProducts;