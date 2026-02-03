import { CircleEqual } from "lucide-react"
import { Button } from "../../components/ui/button"
import { useNavigate } from "react-router-dom";

type NavbarProps = {
    type: "Login" | "Signup";
}


const LoginNavbar = (props:NavbarProps) => {

    const navigate = useNavigate()

    const navigateUrl = props.type === "Login" ? "/auth/signup" : "/auth/login"

  return (
    <div className="flex justify-between py-[10px] border-b border-cBlack dark:border-cGray-500">
        <div className="flex gap-1 items-center font-bold text-2xl">
          <CircleEqual size={40} className="text-cBlack dark:text-cWhite-500" />
          <span className="text-cBlack dark:text-cWhite-500 " >Equlize</span>
        </div>
        <div className="flex items-center gap-1" >
            <span className="text-cGray-500 dark:text-cWhite-500 hidden sm:block " >{props.type === "Login" ? "Don't have an account?" : "Already have an account?"}</span>
            <Button onClick={()=>navigate(navigateUrl)} className="cursor-pointer" >{props.type === "Login" ? "Signup" : "Login"}</Button>
        </div>
    </div>
  )
}
export default LoginNavbar