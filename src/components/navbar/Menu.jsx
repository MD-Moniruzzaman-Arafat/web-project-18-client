import { Link } from 'react-router'

export default function Menu() {
  return (
    <>
      <li>
        <Link to={'/'}>Home</Link>
      </li>
      <li>
        <Link to={'/allTouristsSpotPage'}>All Tourists Spot</Link>
      </li>
      <li>
        <Link to={'/addTouristsSpotPage'}>Add Tourists Spot</Link>
      </li>
      <li>
        <Link to={'/myListPage'}>My List</Link>
      </li>
    </>
  )
}
