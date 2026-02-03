import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

const MainLayout = () => {
  return (
    <div className="flex flex-col items-center bg-cWhite-500 dark:bg-cBlack w-full px-[16px] sm:px-[42px]  md:px-[92px]" >
      <Navbar />
      <div className="max-w-[1440px] flex justify-between items-center w-full " >
        <Outlet />
      </div>
    </div>
  )
}
export default MainLayout