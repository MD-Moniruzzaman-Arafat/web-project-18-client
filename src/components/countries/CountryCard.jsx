export default function CountryCard({ country }) {
  return (
    <>
      <div className="avatar flex-col items-center gap-5">
        <div className=" w-24 rounded-full ">
          <img src={country.img} />
        </div>
        <p className="font-bold">{country.name}</p>
      </div>
    </>
  )
}
