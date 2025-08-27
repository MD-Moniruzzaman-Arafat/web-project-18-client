import { useState } from 'react'

export default function AddTouristsSpotPage() {
  const [formData, setFormData] = useState({
    image: '',
    name: '',
    country: '',
    location: '',
    description: '',
    cost: '',
    seasonality: '',
    travelTime: '',
    totalVisitors: '',
    email: '',
    userName: '',
    phoneNumber: '',
  })

  function handleChange(event) {
    const { name, value } = event.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    // Handle form submission logic here
    console.log('Form Data:', formData)
    // You can send the formData to your backend or perform other actions
    try {
      // You can send the formData to your backend or perform other actions
      const res = await fetch('http://localhost:3000/TouristsSpot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      console.log('Response from server:', data)
      // Optionally, reset the form after successful submission
      setFormData({
        image: '',
        name: '',
        country: '',
        location: '',
        description: '',
        cost: '',
        seasonality: '',
        travelTime: '',
        totalVisitors: '',
        email: '',
        userName: '',
        phoneNumber: '',
      })
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  return (
    <>
      <div className="flex items-center justify-center h-auto m-5">
        <div className="bg-[#EB662B] max-w-5xl mx-auto p-8 rounded-lg shadow-lg ">
          <h1 className="font-bold text-white text-3xl text-center">
            Add Tourists Spot Page
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <fieldset className="fieldset lg:min-w-96 ">
                <legend className="fieldset-legend text-white">image</legend>
                <input
                  name="image"
                  onChange={handleChange}
                  value={formData.image}
                  type="text"
                  className="input w-full"
                  placeholder="write valid image"
                />
                <p className="label"></p>
              </fieldset>
              <fieldset className="fieldset lg:min-w-96 ">
                <legend className="fieldset-legend text-white">
                  tourists spot name
                </legend>
                <input
                  name="name"
                  onChange={handleChange}
                  value={formData.name}
                  type="text"
                  className="input w-full"
                  placeholder="write valid tourists spot name"
                />
                <p className="label"></p>
              </fieldset>
              <fieldset className="fieldset lg:min-w-96 ">
                <legend className="fieldset-legend text-white">
                  country Name
                </legend>
                <input
                  name="country"
                  onChange={handleChange}
                  value={formData.country}
                  type="text"
                  className="input w-full"
                  placeholder="write valid country Name"
                />
                <p className="label"></p>
              </fieldset>
              <fieldset className="fieldset lg:min-w-96">
                <legend className="fieldset-legend text-white">location</legend>
                <input
                  name="location"
                  onChange={handleChange}
                  value={formData.location}
                  type="text"
                  className="input w-full"
                  placeholder="write valid location"
                />
                <p className="label"></p>
              </fieldset>
              <fieldset className="fieldset lg:min-w-96">
                <legend className="fieldset-legend text-white">
                  short description
                </legend>
                <input
                  name="description"
                  onChange={handleChange}
                  value={formData.description}
                  type="text"
                  className="input w-full"
                  placeholder="write valid short description"
                />
                <p className="label"></p>
              </fieldset>
              <fieldset className="fieldset lg:min-w-96">
                <legend className="fieldset-legend text-white">
                  average cost
                </legend>
                <input
                  name="cost"
                  onChange={handleChange}
                  value={formData.cost}
                  type="text"
                  className="input w-full"
                  placeholder="write valid average cost"
                />
                <p className="label"></p>
              </fieldset>
              <fieldset className="fieldset lg:min-w-96">
                <legend className="fieldset-legend text-white">
                  seasonality
                </legend>
                <input
                  name="seasonality"
                  onChange={handleChange}
                  value={formData.seasonality}
                  type="text"
                  className="input w-full"
                  placeholder="write valid seasonality"
                />
                <p className="label"></p>
              </fieldset>
              <fieldset className="fieldset lg:min-w-96">
                <legend className="fieldset-legend text-white">
                  travel time
                </legend>
                <input
                  name="travelTime"
                  onChange={handleChange}
                  value={formData.travelTime}
                  type="text"
                  className="input w-full"
                  placeholder="write valid travel time"
                />
                <p className="label"></p>
              </fieldset>
              <fieldset className="fieldset lg:min-w-96">
                <legend className="fieldset-legend text-white">
                  total Visitors Per Year
                </legend>
                <input
                  name="totalVisitors"
                  onChange={handleChange}
                  value={formData.totalVisitors}
                  type="text"
                  className="input w-full"
                  placeholder="write valid total Visitors Per Year"
                />
                <p className="label"></p>
              </fieldset>
              <fieldset className="fieldset lg:min-w-96">
                <legend className="fieldset-legend text-white">
                  User Email
                </legend>
                <input
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                  type="email"
                  className="input w-full"
                  placeholder="write valid User Email"
                />
                <p className="label"></p>
              </fieldset>
              <fieldset className="fieldset lg:min-w-96">
                <legend className="fieldset-legend text-white">
                  User Name
                </legend>
                <input
                  name="userName"
                  onChange={handleChange}
                  value={formData.userName}
                  type="text"
                  className="input w-full"
                  placeholder="write valid user name"
                />
                <p className="label"></p>
              </fieldset>
              <fieldset className="fieldset lg:min-w-96">
                <legend className="fieldset-legend text-white">
                  Phone Number
                </legend>
                <input
                  name="phoneNumber"
                  onChange={handleChange}
                  value={formData.phoneNumber}
                  type="text"
                  className="input w-full"
                  placeholder="write valid phone number"
                />
                <p className="label"></p>
              </fieldset>
            </div>

            <button className="btn w-full mt-5">Add Tourists Spot</button>
          </form>
        </div>
      </div>
    </>
  )
}
