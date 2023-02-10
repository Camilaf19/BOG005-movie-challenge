export const Modal = ({ details, hideModal }) => {
  return (
    <section className='absolute inset-y-24 inset-x-1/4 w-2/4 lg:h-9/12 sm:h-6/12 bg-slate-900 rounded-lg shadow-2xl shadow-stone-900'>
      <h3 className='text-white font-bold font-sans text-xl text-center my-2'>
        {details.Title}
      </h3>
      <section className='flex flex-col justify-center my-2 lg:h-10/12 sm:h-7/12'>
        <img
          className='w-60 h-80 m-auto'
          src={details.Poster}
          alt='Poster'
        />
        <p className='text-white font-semibold font-sans text-center mt-4'>
          <b>Actors:</b> {details.Actors}
        </p>
        <p className='text-white font-semibold font-sans text-center'>
          <b>Genre:</b> {details.Genre}
        </p>
        <p className='text-white font-semibold font-sans text-center'>
          <b>Director:</b> {details.Director}
        </p>
        <p className='text-white font-semibold font-sans text-center mb-2'>
          <b>Released:</b> {details.Released}
        </p>
        <button
          className='absolute top-0 right-0 m-auto w-12 h-10 bg-stone-900 rounded-md text-white font-mono font-bold shadow-lg hover:bg-white hover:text-stone-900 '
          onClick={() => hideModal()}
        >
          X
        </button>
      </section>
    </section>
  )
}
