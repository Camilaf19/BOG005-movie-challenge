import { requestDataMovies, requestDataSearch } from './requests'
import { CardsSearch } from './CardsSearch'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Movies = () => {
  const [inputValue, setInputValue] = useState('')
  const [genderValue, setGenderValue] = useState('')
  const [dataSearch, setDataSearch] = useState([])
  const [movies, setMovies] = useState([])
  const navigate = useNavigate()

  const classBackground = !genderValue.length
    ? 'h-screen'
    : 'grid grid-cols-5 gap-3 place-items-center my-8 h-full'

  const handleSubmit = (e) => {
    e.preventDefault()
    requestDataSearch(inputValue).then((res) => {
      setDataSearch(res.Search)
    })
  }
  const handleButtons = (e) => {
    e.preventDefault()
    requestDataMovies(genderValue).then((res) => {
      setMovies(res.Search)
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
            navigate('/')
          }}
        >
          Home
        </button>
      </header>
      <main>
        {!dataSearch.length ? (
          <>
            <form
              onSubmit={handleButtons}
              className='my-3 flex justify-around'
            >
              <button
                className='w-48 h-10 bg-stone-900 rounded-md text-white font-mono font-bold shadow-lg hover:bg-orange-500'
                value='Love'
                onClick={(e) => {
                  setGenderValue(e.target.value)
                }}
              >
                Love
              </button>
              <button
                className='w-48 h-10 bg-stone-900 rounded-md text-white font-mono font-bold shadow-lg hover:bg-orange-500'
                value='Adventure'
                onClick={(e) => {
                  setGenderValue(e.target.value)
                }}
              >
                Adventure
              </button>
              <button
                className='w-48 h-10 bg-stone-900 rounded-md text-white font-mono font-bold shadow-lg hover:bg-orange-500'
                value='Comedy'
                onClick={(e) => {
                  setGenderValue(e.target.value)
                }}
              >
                Comedy
              </button>
              <button
                className='w-48 h-10 bg-stone-900 rounded-md text-white font-mono font-bold shadow-lg hover:bg-orange-500'
                value='Horror'
                onClick={(e) => {
                  setGenderValue(e.target.value)
                }}
              >
                Horror
              </button>
            </form>
            <section className={classBackground}>
              {movies.map((element) => (
                <CardsSearch
                  key={element.imdbID}
                  element={element}
                />
              ))}
            </section>
          </>
        )
          : (
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
