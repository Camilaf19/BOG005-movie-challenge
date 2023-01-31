/* import { useEffect, useState } from 'react'
import { requestData } from './requests' */
import { Outlet, Link } from 'react-router-dom'
export const Home = () => {
  /*  const [data, setData] = useState([])

  useEffect(() => {
    requestData().then((res) => {
      console.log(res)
      setData(res)
    })
  }, []) */

  return (
    <>
      <header className='header-app'>
        <section className='container-logo-title'>
          <img
            className='logo-app'
            src='https://images.vexels.com/media/users/3/220739/isolated/preview/364a8081b080c3b1b1af9abb49ecf40e-icono-plano-de-entradas-de-cine-clasico.png'
            alt='logo'
          />
          <h1 className='title-app'>Cinemaniáticos</h1>
        </section>
        {/*  <div>
        {data.map((movie, index) => (
          <h1 key={index}>{movie}</h1>
        ))}
      </div> */}
        <input
          type='text'
          placeholder='Search movie or serie...'
          className='input-search'
        />
        <nav className='nav-link'>
          <ul className='ul-link'>
            <li>
              <Link className='li-link' to='/'>
                Home
              </Link>
            </li>
            <li>
              <Link className='li-link' to='/movies'>
                Movies
              </Link>
            </li>
            <li>
              <Link className='li-link' to='/series'>
                Series
              </Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </header>

      <main className='background-home'>
        <section>
          <button>Hi</button>
        </section>
      </main>
    </>
  )
}
