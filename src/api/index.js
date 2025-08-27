async function allCountry() {
  const response = await fetch('http://localhost:3000/countrys')
  const data = await response.json()
  return data
}

export { allCountry }
