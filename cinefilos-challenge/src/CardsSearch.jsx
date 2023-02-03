export const CardsSearch = ({ element }) => {
  return (
    <article className='object-cover w-52 h-80 shadow-xl rounded-md '>
      <img
        className='w-full h-3/4 rounded-t-md'
        src={element.Poster}
        alt='Poster'
      />
      <article className='bg-yellow-400 w-full h-1/5 flex flex-col justify-center items-center rounded-b-md'>
        <h2 className='text-white font-bold font-sans'>{element.Title}</h2>
        <button className='text-orange-700 font-extrabold font-sans text-xl'>
          +
        </button>
      </article>
    </article>
  )
}
