import img1 from '../../assets/Tourists1.jpg'
import img2 from '../../assets/Tourists2.jpg'
import img3 from '../../assets/Tourists3.jpg'
import img4 from '../../assets/Tourists4.jpg'
import img5 from '../../assets/Tourists5.jpg'
import img6 from '../../assets/Tourists6.jpg'
import TouristsSpotsCard from './TouristsSpotsCard'

export default function TouristsSpots() {
  return (
    <>
      <div className="container mx-auto py-20 px-2">
        <h1 className="text-3xl font-bold mb-5">Tourists Spots</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <TouristsSpotsCard img={img1} />
          <TouristsSpotsCard img={img2} />
          <TouristsSpotsCard img={img3} />
          <TouristsSpotsCard img={img4} />
          <TouristsSpotsCard img={img5} />
          <TouristsSpotsCard img={img6} />
        </div>
      </div>
    </>
  )
}
