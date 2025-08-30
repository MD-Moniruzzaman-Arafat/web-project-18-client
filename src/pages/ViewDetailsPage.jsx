import { useLoaderData } from 'react-router'

export default function ViewDetailsPage() {
  const result = useLoaderData()
  console.log(result)
  return (
    <>
      <div className="container mx-auto p-5">
        <div className="card bg-base-100 shadow-sm">
          <figure>
            <img src={result?.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{result?.name}</h2>
            <p>{result?.description}</p>
            <p>Location: {result?.location}</p>
            <p>Cost: {result?.cost}</p>
            <p>Seasonality: {result?.seasonality}</p>
            <p>Travel Time: {result?.travelTime}</p>
            <p>Total Visitors: {result?.totalVisitors}</p>
            <p>Added By: {result?.userName}</p>
            <p>Contact: {result?.phoneNumber}</p>
            <p>Email: {result?.email}</p>
            <p>Country: {result?.country}</p>
          </div>
        </div>
      </div>
    </>
  )
}
