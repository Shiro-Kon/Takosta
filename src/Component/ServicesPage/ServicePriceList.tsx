import { BeautyService, beautyServices } from "../../Utils/servicesData";
import ServiceCategorySection from "./ServicesCategorySection";


const ServicePriceList: React.FC = () => {

    const groupedServices: { [key: string]: BeautyService[] } = {};
    beautyServices.forEach((service) => {
      if (!groupedServices[service.category]) {
        groupedServices[service.category] = [];
      }
      groupedServices[service.category].push(service);
    });
  
    return (
      <div className="container mx-auto w-4/5 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(groupedServices).map(([category, services]) => (
            <ServiceCategorySection key={category} category={category} services={services} />
          ))}
        </div>
      </div>
    );
  };

export default ServicePriceList;
