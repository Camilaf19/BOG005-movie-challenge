/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */
import { useState } from 'react'
import { requestDataSearch } from './requests'
import { CardsSearch } from './CardsSearch'
import { CardsHome } from './CardsHome'
import { Outlet, Link } from 'react-router-dom'
export const Home = () => {
  const [inputValue, setInputValue] = useState('')
  const [dataSearch, setDataSearch] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    requestDataSearch(inputValue).then((res) => {
      setDataSearch(res.Search)
    })
  }

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
        <form action='submit'>
          <input
            type='text'
            placeholder='Search movie or serie...'
            onChange={(e) => setInputValue(e.target.value)}
            className='input-search'
          />
          <button
            type='submit'
            name='inputValue'
            onClick={handleSubmit}
          >
            S
          </button>
        </form>
        <nav className='nav-link'>
          <ul className='ul-link'>
            <li>
              <Link
                className='li-link'
                to='/'
              >
                Home
              </Link>
            </li>
            {/*  <li>
              <Link
                className='li-link'
                to='/movies'
              >
                Movies
              </Link>
            </li>
            <li>
              <Link
                className='li-link'
                to='/series'
              >
                Series
              </Link>
            </li> */}
          </ul>
        </nav>
        <Outlet />
      </header>
      <main className='background-home'>
        {!dataSearch.length ? (
          <CardsHome />
        ) : (
          <section className=' grid grid-cols-4 gap-1 place-items-center mt-8 h-screen'>
            {dataSearch.map((element) => (
              <CardsSearch
                key={element.imdbID}
                element={element}
              />
            ))}
          </section>
        )}
      </main>
      <footer className='footer-app'>
        <p>Cinemaniáticos.com © 2023</p>
      </footer>
    </>
  )
}
