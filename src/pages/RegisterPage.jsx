import { useContext, useState } from 'react'
import { AuthContext } from '../context'

export default function RegisterPage() {
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    photoUrl: '',
    password: '',
  })

  const { createUser } = useContext(AuthContext)

  // handle change function
  function handleChange(event) {
    const { name, value } = event.target
    setRegisterData({
      ...registerData,
      [name]: value,
    })
  }

  // handle submit function
  async function handleSubmit(event) {
    event.preventDefault()
    // Perform registration logic here
    try {
      const response = await createUser(
        registerData.email,
        registerData.password
      )
      console.log(response)
    } catch (error) {
      console.error('Error registering user:', error)
    }
    console.log('Register Data:', registerData)
  }

  return (
    <>
      <div className="flex items-center justify-center h-screen m-10">
        <div className="bg-[#EB662B] max-w-2xl mx-auto p-8 rounded-lg shadow-lg ">
          <h1 className="font-bold text-white text-3xl text-center">
            Register Page
          </h1>
          <form onSubmit={handleSubmit}>
            <fieldset className="fieldset lg:min-w-96 ">
              <legend className="fieldset-legend text-white">Name</legend>
              <input
                name="name"
                onChange={handleChange}
                value={registerData.name}
                type="text"
                className="input w-full"
                placeholder="write valid name"
              />
              <p className="label"></p>
            </fieldset>
            <fieldset className="fieldset lg:min-w-96 ">
              <legend className="fieldset-legend text-white">Email</legend>
              <input
                name="email"
                onChange={handleChange}
                value={registerData.email}
                type="email"
                className="input w-full"
                placeholder="write valid email"
              />
              <p className="label"></p>
            </fieldset>
            <fieldset className="fieldset lg:min-w-96 ">
              <legend className="fieldset-legend text-white">PhotoUrl</legend>
              <input
                name="photoUrl"
                onChange={handleChange}
                value={registerData.photoUrl}
                type="text"
                className="input w-full"
                placeholder="write valid photoUrl"
              />
              <p className="label"></p>
            </fieldset>
            <fieldset className="fieldset lg:min-w-96">
              <legend className="fieldset-legend text-white">Password</legend>
              <input
                name="password"
                onChange={handleChange}
                value={registerData.password}
                type="password"
                className="input w-full"
                placeholder="write valid password"
              />
              <p className="label"></p>
            </fieldset>
            <button className="btn w-full mt-5">Register</button>
          </form>
          <p className="text-center text-white mt-5">
            <small>
              don't have an account?{' '}
              <a href="/loginPage" className="border-b-1 text-black font-bold">
                Login
              </a>
            </small>
          </p>
        </div>
      </div>
    </>
  )
}
