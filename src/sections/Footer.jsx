import { footerLogo } from "../assets/images"
import { socialMedia } from '../constants'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <footer className="justify-center">
      <div className="max-lg:flex-col">
        <img src={footerLogo} alt="nike" width={150} height={46} className=""/>
        <p className=" mt-10 font-montserrat text-white-400 max sm:max-w-sm">
          Get shoes ready for the new term at your nearest Nike store. Find
          Your perfect Size In Store. Get Rewards
        </p>
        <div className="flex gap-3 mt-5">
        {socialMedia.map((socialMedia) => (
          <img src={socialMedia.src} alt="" width={30}  className="bg-white rounded-full px-2 py-2 cursor-pointer"/>
        ))}
        </div>

      </div>

      <div>
        <div className="flex mt-10">
          
          {footerLinks.map((footerLink) => (
            <div className="w-full justify-content">
              <span className="">
                {footerLink.title}
              </span>
              
              <div className="mt-2">
                {footerLink.links.map((link) => (
                  <p className="text-slate-gray">
                    {link.name}
                  </p>
                ))}
              </div>
              
            </div>
            
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer