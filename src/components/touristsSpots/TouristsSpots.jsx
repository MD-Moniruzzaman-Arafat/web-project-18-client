import { useLoaderData } from 'react-router'
import TouristsSpotsCard from './TouristsSpotsCard'

export default function TouristsSpots() {
  const result = useLoaderData()
  console.log(result)
  return (
    <>
      <div className="container mx-auto py-20 px-2">
        <h1 className="text-3xl font-bold mb-5">Tourists Spots</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {result.map((spot) => (
            <TouristsSpotsCard key={spot?._id} spot={spot} />
          ))}
        </div>
      </div>
    </>
  )
}
