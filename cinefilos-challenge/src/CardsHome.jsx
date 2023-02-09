import { useEffect, useState } from 'react'
import { requestDataMovieCardHome, requestDataSerieCardHome } from './requests'
import { useNavigate } from 'react-router-dom'
export const CardsHome = () => {
  const [movieCard, setMovieCard] = useState([])
  const [serieCard, setSerieCard] = useState([])
  const navigate = useNavigate()
  /*   const [moviesClicked, setMoviesClicked] = useState(false)
   */
  useEffect(() => {
    requestDataMovieCardHome().then((res) => {
      setMovieCard(res)
    })
    requestDataSerieCardHome().then((res) => {
      setSerieCard(res)
    })
  }, [])

  return (
    <section className=' w-full sm:px-6 lg:h-full flex justify-center'>
      <section className='sm:py-18 lg:w-3/4 lg:h-full lg:py-8 sm:px-6 flex justify-center'>
        <section className='mt-0 lg:grid lg:grid-cols-2 lg:gap-x-5 lg:max-w-full sm:h-3/4 sm:w-full'>
          <article
            onClick={() => {
              navigate('/movies')
            }}
            key={movieCard.imdbID}
            className=' lg:max-h-82 lg:max-w-52 sm:max-h-92 sm:max-w-xs m-auto transform transition hover:-translate-y-4 cursor-pointer'
          >
            <picture className=' sm:max-h-72 rounded-lg '>
              <img
                src={movieCard.Poster}
                alt='Avatar'
                className='h-full w-full object-cover object-center rounded-xl '
              />
            </picture>
            <h3 className='mt-6 text-sm text-gray-500 text-center'>
              <a href=''>Movies</a>
            </h3>
            <p className='text-xl font-semibold text-gray-900 text-center'>
              All the movies you want!
            </p>
          </article>
          <article
            onClick={() => {
              navigate('/series')
            }}
            key={serieCard.imdbID}
            className=' lg:max-h-92 lg:max-w-52 sm:max-h-92 sm:max-w-xs m-auto transform transition hover:-translate-y-4 cursor-pointer'
          >
            <picture className=' rounded-lg'>
              <img
                src={serieCard.Poster}
                alt='Avatar'
                className='h-full w-full object-cover object-center rounded-xl'
              />
            </picture>
            <h3 className='mt-6 text-sm text-gray-500 text-center'>
              <a href=''>Series</a>
            </h3>
            <p className='text-xl font-semibold text-gray-900 text-center'>
              What series are you looking for?
            </p>
          </article>
        </section>
      </section>
    </section>
  )
}
