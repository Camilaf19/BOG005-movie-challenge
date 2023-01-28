import { useEffect, useState } from 'react'
import { requestData } from './requests'
import { Outlet, Link } from 'react-router-dom'
export const Home = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    requestData().then((res) => {
      console.log(res)
      setData(res)
    })
  }, [])

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/movies'>Movies</Link>
          </li>
          <li>
            <Link to='/series'>Series</Link>
          </li>
        </ul>
      </nav>

      <Outlet />

      <div>
        {data.map((movie, index) => (
          <h1 key={index}>{movie}</h1>
        ))}
      </div>
    </>
  )
}
