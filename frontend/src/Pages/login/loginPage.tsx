import { useState, type FormEvent } from "react"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import LoginNavbar from "./LoginNavbar"
import { LoaderCircle } from "lucide-react"


type LoginForm = {
    email: string,
    password: string
}

const LoginPage = () => {
    const [loading, setLoading] = useState(false)
    const [formData, setFormdata] = useState<LoginForm>({
        email: "",
        password: ""
    })




    const handleChnage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormdata((pre) => ({
            ...pre,
            [name]: value
        }))
    }


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true)
        try {
            //todo: Call login api
            console.log(formData)
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }




    return (
        <div className="w-full flex flex-col items-center px-[16px] sm:px-[42px]  md:px-[92px] h-[100vh]" >
            <div className="max-w-[1440px] w-full h-full flex flex-col" >
                <LoginNavbar type="Login" />
                <div className="w-full h-full flex justify-center items-center relative">
                    <div className="border border-cGray-500/20 dark:border-cWhite-500/20 rounded flex flex-col items-center max-w-[450px] w-full p-3 " >
                        <h1 className=" text-xl sm:text-2xl md:text-4xl font-bold text-cBlack dark:text-cWhite-500">Welcome Back</h1>
                        <p className="text-cGray-500/60 text-sm  dark:text-cWhite-500/20">Login to your account to continue</p>


                        <form onSubmit={handleSubmit} className="w-full" noValidate >
                            <div className="w-full mt-4 flex flex-col gap-1 " >
                                <label className="font-semibold" htmlFor="email-field">Email</label>
                                <Input onChange={handleChnage} name="email" placeholder="you@example.com" className="w-full" />
                            </div>
                            <div className="w-full mt-4 flex flex-col gap-1 " >
                                <label className="font-semibold" htmlFor="email-field"><span>Password</span></label>
                                <Input onChange={handleChnage} name="password" type="password" placeholder="Enter you password" className="w-full" />
                            </div>

                            <Button className="w-full mt-6 cursor-pointer flex justify-center items-center" type="submit" disabled={loading} >{loading ? <LoaderCircle className="text-cWhite-500 dark:text-cBlack-500 animate-spin" /> : "Login"}</Button>
                        </form>


                        <div className="text-sm text-cGray-500/50 dark:text-cWhite-500/20 text-center mt-4" >
                            By continuing, you agree to our Terms of Service and Privacy Policy.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LoginPage