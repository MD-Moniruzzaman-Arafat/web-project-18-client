async function allCountry() {
  const response = await fetch('http://localhost:3000/countrys')
  const data = await response.json()
  return data
}

async function allTouristSpots() {
  const response = await fetch('http://localhost:3000/TouristsSpot')
  const data = await response.json()
  return data
}

export { allCountry, allTouristSpots }
