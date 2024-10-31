import {offer} from "../assets/images"
import { arrowRight } from '../assets/icons'

const SpecialOffer = () => {
  return (
    <section className="max-container flex justify-between gap-10 max-xl:flex-col-reverse">
      
      <div className="">
        <img src={offer} alt="shoes" width={773} height={687} className="w-full object-contain"/>
      </div>

      <div className="flex-col">
        <h2 className="text-4xl font-palanquin font-bold">
          <span className="text-coral-red">Special</span> Offer</h2>
        <p className="py-5 info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>

        <div className="mt-6  flex gap-9">
          <button className="justify-center text-center flex gap-2 bg-coral-red px-5 py-1 rounded-full text-white">Shop now <img src={arrowRight} alt="arrow" className="mt-1"/> </button>
          <button className="border-2 justify-center text-center flex gap-2 px-5 py-1 rounded-full text-slate-gray">Learn more </button>
        </div>
      </div>
    </section>
    
  )
}

export default SpecialOffer
