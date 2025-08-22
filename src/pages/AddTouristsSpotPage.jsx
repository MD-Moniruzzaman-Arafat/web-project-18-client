export default function AddTouristsSpotPage() {
  return (
    <>
      <div className="flex items-center justify-center h-auto m-5">
        <div className="bg-[#EB662B] max-w-5xl mx-auto p-8 rounded-lg shadow-lg ">
          <h1 className="font-bold text-white text-3xl text-center">
            Add Tourists Spot Page
          </h1>
          <form>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <fieldset className="fieldset lg:min-w-96 ">
                <legend className="fieldset-legend text-white">image</legend>
                <input
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
                  type="text"
                  className="input w-full"
                  placeholder="write valid country Name"
                />
                <p className="label"></p>
              </fieldset>
              <fieldset className="fieldset lg:min-w-96">
                <legend className="fieldset-legend text-white">location</legend>
                <input
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
