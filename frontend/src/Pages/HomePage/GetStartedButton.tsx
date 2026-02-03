import { useNavigate } from "react-router-dom"
import { Button } from "../../components/ui/button"

const GetStartedButton = () => {
    const navigate = useNavigate()
    return (
        <Button onClick={() => navigate("/signup")} className='cursor-pointer' >
            Get Started
        </Button>
    )
}
export default GetStartedButton