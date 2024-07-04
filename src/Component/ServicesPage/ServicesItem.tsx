import { BeautyService } from "../../Utils/servicesData";


const ServiceItem: React.FC<{ service: BeautyService }> = ({ service }) => {
    return (
      <div className="mb-6">
        <h3 className="text-lg md:text-xl font-semibold text-gray-900">{service.name}</h3>
        {service.subname && <p className="text-sm text-gray-600 mb-1">{service.subname}</p>}
        <p className="text-base text-gray-700 mb-1">{service.priceRange}</p>
        {service.description && <p className="text-sm text-gray-500">{service.description}</p>}
      </div>
    );
  };

export default ServiceItem;
