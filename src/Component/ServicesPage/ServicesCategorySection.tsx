import { BeautyService } from "../../Utils/servicesData";
import ServiceItem from "./ServicesItem";


const ServiceCategorySection: React.FC<{ category: string; services: BeautyService[] }> = ({
  category,
  services,
}) => {
  return (
    <div className="my-8">
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">{category}</h2>
      {services.map((service) => (
        <ServiceItem key={service.id} service={service} />
      ))}
    </div>
  );
};

export default ServiceCategorySection;
