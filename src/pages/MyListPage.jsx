import { useContext } from 'react'
import { useLoaderData } from 'react-router'
import TouristsSpotsCard from '../components/touristsSpots/TouristsSpotsCard'
import { AuthContext } from '../context'

export default function MyListPage() {
  // const [myList, setMyList] = useState([])
  const data = useLoaderData()
  const { currentUser } = useContext(AuthContext)
  const filteredList = data.filter(
    (item) => item.user_email === currentUser.email
  )
  // setMyList(filteredList)
  console.log(filteredList)
  console.log(currentUser.email)

  return (
    <>
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold mb-6">My List</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredList.map((list) => (
            <TouristsSpotsCard key={list._id} spot={list} />
          ))}
        </div>
      </div>
    </>
  )
}
