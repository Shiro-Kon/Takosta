import GalleryWork from "../Component/ServicesPage/WorksSlider"
import ServicePriceList from "../Component/ServicesPage/ServicePriceList"
import WorksSlider from "../Component/ServicesPage/WorksSlider"


type Props = {}

const ServicesPage = (props: Props) => {
  return (
    <>
    <ServicePriceList/>
    <WorksSlider />
    </>
  )
}

export default ServicesPage