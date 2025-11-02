import type {JSX} from 'react'

const PageNotFound = (): JSX.Element => {
  const handleGoBack = (): void => {
    window.history.back();
  }
  
  return (
    <section className='w-full h-screen flex flex-col justify-center items-center'>
      <h2>Page Not Found</h2>
      <p className='text-gray-3!'>Sorry, the page you are looking for does not exist.</p>
      <button 
        className='w-[6rem] bg-primary hover:bg-primary/80 py-2 px-3 rounded-lg hover:shadow-lg mt-5 relative group'
        onClick={handleGoBack}
      >
        <span className='absolute left-0 top-0 flex items-center justify-center w-10 h-full group-hover:-translate-x-2 transition-transform duration-300'>
          &lt;
        </span>
        Back
      </button>  
    </section>
  )
}

export default PageNotFound;