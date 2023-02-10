/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */
import { useState } from 'react'
import { requestDataSearch, requestDataDetails } from './requests'
import { CardsSearch } from './CardsSearch'
import { CardsHome } from './CardsHome'
import { Pagination } from './Pagination'
import { Modal } from './Modal'

export const Home = () => {
  const [inputValue, setInputValue] = useState('')
  const [dataSearch, setDataSearch] = useState([])
  const [totalResults, setTotalResults] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [details, setDetails] = useState({})
  const [show, setShow] = useState(false)
  const hideModal = () => setShow(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    requestDataSearch(inputValue, currentPage).then((res) => {
      setDataSearch(res.Search)
      setTotalResults(res.totalResults)
    })
  }

  const handleClick = (page) => setCurrentPage(page)

  const handleSubmitPagination = (e) => {
    e.preventDefault()
    requestDataSearch(inputValue, currentPage).then((res) => {
      setDataSearch(res.Search)
    })
  }

  const totalResultsCut = parseInt(totalResults)
  const pages = []
  const limitPages = Math.ceil(totalResultsCut / 10)

  for (let i = 1; i <= limitPages; i++) {
    pages.push(i)
  }

  const pagesLimit = pages.length > 15 ? pages.slice(0, 15) : pages

  const getDetails = (id) => {
    requestDataDetails(id).then((res) => {
      setDetails(res)
      setShow(true)
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
          <section className='relative'>
            <section className='grid lg:grid-cols-5  sm:grid-cols-3 gap-3 place-items-center my-8 h-full'>
              {dataSearch.map((element) => (
                <CardsSearch
                  key={element.imdbID}
                  element={element}
                  getDetails={getDetails}
                />
              ))}
            </section>
            <Pagination
              handleClick={handleClick}
              handleSubmitPagination={handleSubmitPagination}
              pages={pagesLimit}
            />
            <section >
              {show ? (
                <Modal
                  hideModal={hideModal}
                  details={details}
                />
              ) : (
                <div className='hidden'>h</div>
              )}
            </section>
          </section>
        )}
      </main>
      <footer className='footer-app'>
        <p>Cinemaniáticos.com © 2023</p>
      </footer>
    </>
  )
}
