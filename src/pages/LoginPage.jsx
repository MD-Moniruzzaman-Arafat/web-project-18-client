import { useContext, useState } from 'react'
import { Link } from 'react-router'
import { AuthContext } from '../context'

export default function LoginPage() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  })

  const { signInUser, setIsRegistered } = useContext(AuthContext)

  function handleChange(event) {
    const { name, value } = event.target
    setLoginData({
      ...loginData,
      [name]: value,
    })
  }

  async function handleSubmit(event) {
    event.preventDefault()
    // Perform login logic here
    setIsRegistered(false)
    // console.log('Login Data:', loginData)
    try {
      const res = await signInUser(loginData.email, loginData.password)
      console.log('Login Response:', res)
    } catch (error) {
      console.error('Error logging in:', error)
    }
  }

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-[#EB662B] max-w-2xl mx-auto p-8 rounded-lg shadow-lg ">
          <h1 className="font-bold text-white text-3xl text-center">
            Login Page
          </h1>
          <form onSubmit={handleSubmit}>
            <fieldset className="fieldset lg:min-w-96 ">
              <legend className="fieldset-legend text-white">Email</legend>
              <input
                name="email"
                onChange={handleChange}
                value={loginData.email}
                type="email"
                className="input w-full"
                placeholder="write valid email"
              />
              <p className="label"></p>
            </fieldset>
            <fieldset className="fieldset lg:min-w-96">
              <legend className="fieldset-legend text-white">Password</legend>
              <input
                name="password"
                onChange={handleChange}
                value={loginData.password}
                type="password"
                className="input w-full"
                placeholder="write valid password"
              />
              <p className="label"></p>
            </fieldset>
            <button className="btn w-full mt-5">Login</button>
          </form>
          <p className="text-center text-white mt-5">
            <small>
              don't have an account?{' '}
              <Link
                to={'/registerPage'}
                className="border-b-1 text-black font-bold"
              >
                Register
              </Link>
            </small>
          </p>
        </div>
      </div>
    </>
  )
}
