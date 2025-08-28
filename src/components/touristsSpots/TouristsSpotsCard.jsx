export default function TouristsSpotsCard({ spot }) {
  return (
    <>
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <img src={spot?.image} alt={spot?.name} className="h-50 w-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{spot?.name}</h2>
          <p>{spot?.description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    </>
  )
}
