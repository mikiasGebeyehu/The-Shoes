import React from 'react'

const Subscribe = () => {
  return (
    <section className='flex gap-10 justify-center max-lg:flex-col'>
      <h3 className='font-bold  text-3xl max-w-sm font-palanquin '>
        Sign Up for <span className='text-coral-red'>Update</span> & Newsletter
      </h3>

      <div className='justify-center text-center mt-2'>
        <div className='justify-center text-center rounded-full gap-5 lg:max-w-md  flex  border-2 p-2 text-[10px]'>
          <input type="email" placeholder='mikiasgebebeyehumgs@gmail.com' className='input w-[280px] text-[10px]'/>
          <button className="bg-coral-red px-2 text-white rounded-full p-1 ">Sign UP</button>
        </div>
      </div>
      
    </section>
  )
}

export default Subscribe