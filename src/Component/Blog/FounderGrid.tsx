import AnimatedElement from "../AnimatedElement/AnimatedElement";

const founderData = [
  {
    id: 1,
    alt: "Takosta_1",
    image: "../Images/Tanya/Takosta1.jpg",
  },
  {
    id: 2,
    alt: "Takosta_2",
    image: "../Images/Tanya/Takosta2.jpg",
  },
  {
    id: 3,
    alt: "Takosta_3",
    image: "../Images/Tanya/Takosta3.jpg",
  },
 
];

const FounderGrid = () => {
  return (
    <section className="mx-auto w-[90%] ">
      <h2 className=" font-forum text-center mb-8 xl:mb-8 px-4">
        <AnimatedElement direction="up" delay={0.2}>
          <span className="font-pushkin text-5xl md:text-7xl  text-olive-green mr-4">
           Засновниця бренду
          </span>
        </AnimatedElement>

        
      </h2>
      <AnimatedElement
          direction="up"
          delay={0.3}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 duration-300"
        >
        {founderData.map((founder) => (
          <div
            key={founder.id}
            className="   overflow-hidden  rounded-3xl"
          >
            <div className="w-[500px] h-[500px] lg:w-[500px] lg:h-[600px] object-cover rounded-3xl overflow-hidden">
              {founder.image ? (
                <img
                  src={founder.image}
                  alt={`Фото ${founder.alt}`}
                  className="rounded-3xl"
                />
              ) : (
                <div className=""></div>
              )}
            </div>

          </div>
        ))}
      </AnimatedElement>
    </section>
  );
};

export default FounderGrid;
