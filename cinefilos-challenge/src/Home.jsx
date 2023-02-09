/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */
import { useState } from 'react'
import { requestDataSearch } from './requests'
import { CardsSearch } from './CardsSearch'
import { CardsHome } from './CardsHome'

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
        <form
          action='submit'
          className='relative'
        >
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
            <img
              className='w-4 h-4 absolute inset-y-0 right-0  transform translate-y-2 -translate-x-2'
              src='https://cdn-icons-png.flaticon.com/512/25/25313.png'
              alt='search'
            />
          </button>
        </form>
        <button
          className='text-white font-bold text-lg'
          onClick={() => {
            setDataSearch([])
          }}
        >
          Home
        </button>
      </header>
      <main className='background-home'>
        {!dataSearch.length ? (
          <section id='cards-home'>
            <CardsHome />
          </section>
        ) : (
          <section className='grid grid-cols-5 gap-3 place-items-center my-8 h-full'>
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
