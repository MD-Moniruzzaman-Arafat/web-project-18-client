import { useEffect, useState } from 'react'
import { allCountry } from '../../api'
import CountryCard from './CountryCard'

export default function Countries() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    const fetchCountries = async () => {
      const data = await allCountry()
      setCountries(data)
    }
    fetchCountries()
  }, [])
  return (
    <>
      <div className="container mx-auto py-20 px-2">
        <h1 className="text-3xl font-bold mb-10">Southeast Asia Country</h1>
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-4">
          {countries.map((country) => (
            <CountryCard key={country._id} country={country} />
          ))}
        </div>
      </div>
    </>
  )
}
