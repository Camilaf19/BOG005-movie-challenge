export const Pagination = ({ handleSubmitPagination, handleClick, pages }) => {
  return (
    <form
      onSubmit={(e) => handleSubmitPagination(e)}
      className='flex justify-center mb-4 gap-2'
    >
      {pages.map((page, index) => {
        return (
          <button
            className='w-8 h-8 bg-stone-900 rounded-md text-white font-mono font-semibold shadow-lg hover:bg-orange-500'
            onClick={() => handleClick(page)}
            key={index}
          >
            {page}
          </button>
        )
      })}
    </form>
  )
}
