import bangladesh from '../../assets/flag-bangladesh.jpg'
import colombia from '../../assets/flag-cambodia.jpg'
import indonesia from '../../assets/flag-indonesia.jpg'
import malaysia from '../../assets/flag-malaysia.jpg'
import thailand from '../../assets/flag-thailand.jpg'
import vietnam from '../../assets/flag-vietnam.jpg'

export default function Countries() {
  return (
    <>
      <div className="container mx-auto py-20 px-2">
        <h1 className="text-3xl font-bold mb-5">Countries</h1>
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="avatar flex-col items-center gap-5">
            <div className=" w-24 rounded-full ">
              <img src={bangladesh} />
            </div>
            <p className="font-bold">Bangladesh</p>
          </div>
          <div className="avatar flex-col items-center gap-5">
            <div className=" w-24 rounded-full ">
              <img src={indonesia} />
            </div>
            <p className="font-bold">Indonesia</p>
          </div>
          <div className="avatar flex-col items-center gap-5">
            <div className=" w-24 rounded-full ">
              <img src={colombia} />
            </div>
            <p className="font-bold">Colombia</p>
          </div>
          <div className="avatar flex-col items-center gap-5">
            <div className=" w-24 rounded-full ">
              <img src={malaysia} />
            </div>
            <p className="font-bold">Malaysia</p>
          </div>
          <div className="avatar flex-col items-center gap-5">
            <div className=" w-24 rounded-full ">
              <img src={vietnam} />
            </div>
            <p className="font-bold">Vietnam</p>
          </div>
          <div className="avatar flex-col items-center gap-5">
            <div className=" w-24 rounded-full ">
              <img src={thailand} />
            </div>
            <p className="font-bold">Thailand</p>
          </div>
        </div>
      </div>
    </>
  )
}
