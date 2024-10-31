import { shoe8 } from '../assets/images'

const SuperQuality = () => {
  return (
    <section className='flex gap-10 justify-center item-center justify-center max-sm:flex-col w-full max-lg:flex-col'>
      <div className='justify-center item-center'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          We Provide You 
          <span className='text-coral-red'> Super</span> <span className='text-coral-red'>quality </span>Shoes
        </h2>
        <p className='mt-5 info-text lg:max-w-lg'>
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className='mt-6 info-text lg:max-w-lg'>
        Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className='mt-8'>
          <button className='bg-coral-red p-1 rounded-full hover:bg-full-red pl-5 pr-5 lg:max-w-lg'>View details</button>
        </div>
      </div>
   
      <div className=' flex justify-center items-center'>
      <img src={shoe8} alt="shoe8" width={570} height={522}/>
      </div>
    </section>
  
  )
}

export default SuperQuality
