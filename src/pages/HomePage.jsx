import Carousel from '../components/carousel/Carousel'
import Countries from '../components/countries/Countries'
import TouristsSpots from '../components/touristsSpots/TouristsSpots'
import WhyChooseTour from '../components/whyChooseTour/WhyChooseTour'

export default function HomePage() {
  return (
    <>
      <Carousel />
      <WhyChooseTour />
      <Countries />
      <TouristsSpots />
    </>
  )
}
