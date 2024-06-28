export interface Review {
    id: string;
    name: string;
    service: string;
    shortReview: string;
    fullReview: string;
    images: string[];
  }
  
  const reviews: Review[] = [
    {
      id: '1',
      name: 'Анна',
      service: 'Покраска волосся',
      shortReview: 'Чудовий результат! Колір саме такий, як я хотіла.',
      fullReview: 'Я дуже задоволена результатом. Майстер уважно вислухав мої побажання та підібрав ідеальний відтінок. Волосся виглядає здоровим і блискучим. Обов`язково повернуся знову!',
      images: ['./Images/Reviews/work1.png', './Images/Reviews/work1.png'],
    },
    {
      id: '2',
      name: 'Анна',
      service: 'Покраска волосся',
      shortReview: 'Чудовий результат! Колір саме такий, як я хотіла.',
      fullReview: 'Я дуже задоволена результатом. Майстер уважно вислухав мої побажання та підібрав ідеальний відтінок. Волосся виглядає здоровим і блискучим. Обов`язково повернуся знову!',
      images: ['./Images/Reviews/work1.png', './Images/Reviews/work1.png'],
    },
    {
      id: '3',
      name: 'Анна',
      service: 'Покраска волосся',
      shortReview: 'Чудовий результат! Колір саме такий, як я хотіла.',
      fullReview: 'Я дуже задоволена результатом. Майстер уважно вислухав мої побажання та підібрав ідеальний відтінок. Волосся виглядає здоровим і блискучим. Обов`язково повернуся знову!',
      images: ['./Images/Reviews/work1.png', './Images/Reviews/work1.png'],
    },
    {
      id: '4',
      name: 'Анна',
      service: 'Покраска волосся',
      shortReview: 'Чудовий результат! Колір саме такий, як я хотіла.',
      fullReview: 'Я дуже задоволена результатом. Майстер уважно вислухав мої побажання та підібрав ідеальний відтінок. Волосся виглядає здоровим і блискучим. Обов`язково повернуся знову!',
      images: ['./Images/Reviews/work1.png', './Images/Reviews/work1.png'],
    },
  ];
  
  export default reviews;
  