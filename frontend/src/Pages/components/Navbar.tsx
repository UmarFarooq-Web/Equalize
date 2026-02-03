import { CircleEqual } from "lucide-react"
import GetStartedButton from "../HomePage/GetStartedButton"

const Navbar = () => {
  return (
      <div className="max-w-[1440px] flex justify-between items-center w-full py-[10px] border-b border-cBlack dark:border-cGray-500 " >
        <div className="flex gap-1 items-center font-bold text-2xl">
          <CircleEqual size={40} className="text-cBlack dark:text-cWhite-500" />
          <span className="text-cBlack dark:text-cWhite-500 " >Equlize</span>
        </div>

        <div className=' hidden sm:flex items-center justify-center gap-10' >
          <a href="#work" className='text-cBlack dark:text-cWhite-500 hover:underline' >How it work</a>
          <a href="#security" className='text-cBlack dark:text-cWhite-500 hover:underline' >Security</a>
          <a href="#testimonials" className='text-cBlack dark:text-cWhite-500 hover:underline' >Testimonials</a>
          <a href="#faq" className='text-cBlack dark:text-cWhite-500 hover:underline' >FAQ</a>
        </div>

        <div>
          <GetStartedButton />
        </div>
        
      </div>
  )
}
export default Navbar