export default function RegisterPage() {
  return (
    <>
      <div className="flex items-center justify-center h-screen m-10">
        <div className="bg-[#EB662B] max-w-2xl mx-auto p-8 rounded-lg shadow-lg ">
          <h1 className="font-bold text-white text-3xl text-center">
            Register Page
          </h1>
          <form>
            <fieldset className="fieldset lg:min-w-96 ">
              <legend className="fieldset-legend text-white">Name</legend>
              <input
                type="name"
                className="input w-full"
                placeholder="write valid name"
              />
              <p className="label"></p>
            </fieldset>
            <fieldset className="fieldset lg:min-w-96 ">
              <legend className="fieldset-legend text-white">Email</legend>
              <input
                type="email"
                className="input w-full"
                placeholder="write valid email"
              />
              <p className="label"></p>
            </fieldset>
            <fieldset className="fieldset lg:min-w-96 ">
              <legend className="fieldset-legend text-white">PhotoUrl</legend>
              <input
                type="photoUrl"
                className="input w-full"
                placeholder="write valid photoUrl"
              />
              <p className="label"></p>
            </fieldset>
            <fieldset className="fieldset lg:min-w-96">
              <legend className="fieldset-legend text-white">Password</legend>
              <input
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
