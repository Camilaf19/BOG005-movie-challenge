export const CardsSearch = ({ element, getDetails }) => {
  return (
    <article className='relative object-cover w-52 h-80 shadow-xl rounded-md '>
      <img
        className='w-full h-72 rounded-md'
        src={element.Poster}
        alt='Poster'
      />
      <article className='bg-yellow-400 absolute bottom-0 w-full lg:h-20 flex flex-col justify-center items-center rounded-b-md truncate'>
        <h2 className='text-white font-bold font-sans'>{element.Title}</h2>
        <button
          className='text-orange-700 font-extrabold font-sans text-xl hover:text-white'
          onClick={() => getDetails(element.imdbID)}
        >
          +
        </button>
      </article>
    </article>
  )
}
