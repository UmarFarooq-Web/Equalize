import { useState, type FormEvent } from "react"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import LoginNavbar from "./LoginNavbar"
import { LoaderCircle } from "lucide-react"





type SignupForm = {
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
}

type SignupFormErrors = {
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
}

const SignupPage = () => {



    const [loading, setLoading] = useState(false)
    const [formData, setFormdata] = useState<SignupForm>({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const [formErrors, setFormErrors] = useState<SignupForm>({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
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


        setFormErrors({
            name:"",
            email:"",
            password:"",
            confirmPassword:""
        })

        if(!formData.name || formData.name.trim() == ""){
            setFormErrors((prev)=>({...prev , name:"Name is required"}))
            return
        }

        if(!formData.email || formData.email.trim() == ""){
            setFormErrors((prev)=>({...prev , email:"Email is required"}))
            return
        }

        if(!formData.password || formData.password.trim() == ""){
            setFormErrors((prev)=>({...prev , password:"Password is required"}))
            return
        }

        if(!formData.confirmPassword || formData.confirmPassword.trim() == ""){
            setFormErrors((prev)=>({...prev , confirmPassword:"Confirm Password is required"}))
            return
        }

        if(!isValidEmail(formData.email)){
            setFormErrors((prev)=>({...prev , email:"Invalid Email"}))
            return
        }

        if(formData.password !==formData.confirmPassword){
            setFormErrors((prev)=>({...prev , confirmPassword:"Password Doesn't Match"}))
            return
        }


        setLoading(true)
        try {
            //todo: Call login api
            console.log(formData)
        } catch (error) {
            console.log(error);
        } finally {
            // setLoading(false)
        }
    }


    function isValidEmail(email: string): boolean {
  const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  return emailRegex.test(email)
}




    return (
        <div className="w-full flex flex-col items-center px-[16px] sm:px-[42px]  md:px-[92px] h-[100vh]" >
            <div className="max-w-[1440px] w-full h-full flex flex-col" >
                <LoginNavbar type="Signup" />
                <div className="w-full h-full flex justify-center items-center">
                    <div className="border border-cGray-500/20 dark:border-cWhite-500/20 rounded flex flex-col items-center max-w-[450px] w-full p-3 " >
                        <h1 className=" text-xl sm:text-2xl md:text-4xl font-bold text-cBlack dark:text-cWhite-500">Welcome</h1>
                        <p className="text-cGray-500/60 text-sm  dark:text-cWhite-500/20">Create an account to continue</p>


                        <form className="w-full" onSubmit={handleSubmit} >
                            <div className="w-full mt-4 flex flex-col gap-1 " >
                                <label className="font-semibold" htmlFor="email-field">Name</label>
                                <Input name="name" onChange={handleChnage} placeholder="Enter your name" className="w-full" />
                                {formErrors.name !== "" ? <p className="text-red-500 text-sm text-end">{formErrors.name}</p> : ""}
                            </div>

                            <div className="w-full mt-4 flex flex-col gap-1 " >
                                <label className="font-semibold" htmlFor="email-field">Email</label>
                                <Input name="email" onChange={handleChnage} placeholder="you@example.com" className="w-full" />
                                {formErrors.email !== "" ? <p className="text-red-500 text-sm text-end">{formErrors.email}</p> : ""}

                            </div>

                            <div className="w-full mt-4 flex flex-col gap-1 " >
                                <label className="font-semibold" htmlFor="email-field"><span>Password</span></label>
                                <Input name="password" onChange={handleChnage} type="password" placeholder="Enter you password" className="w-full" />
                                {formErrors.password !== "" ? <p className="text-red-500 text-sm text-end">{formErrors.password}</p> : ""}

                            </div>

                            <div className="w-full mt-4 flex flex-col gap-1 " >
                                <label className="font-semibold" htmlFor="email-field"><span>Confirm Password</span></label>
                                <Input name="confirmPassword" onChange={handleChnage} type="password" placeholder="Enter you password" className="w-full" />
                                {formErrors.confirmPassword !== "" ? <p className="text-red-500 text-sm text-end">{formErrors.confirmPassword}</p> : ""}

                            </div>


                            <Button className="w-full mt-6 cursor-pointer" type="submit" >{loading ? <LoaderCircle className="text-cWhite-500 dark:text-cBlack-500 animate-spin" /> : "Create account"}</Button>
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
export default SignupPage