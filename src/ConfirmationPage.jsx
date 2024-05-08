import { useNavigate } from "react-router-dom"
import Header from "./Header"



const ConfirmationPage = () => {
    const navigate = useNavigate()
    return (
        <div>
            <Header/>
            <div className="relative bg-center bg-no-repeat bg-cover w-full "
                style={{ backgroundImage: 'url(./background.jpg)' }}>
                <div className="w-[70%] absolute inset-0 md:w-[900px]" style={{ background: 'linear-gradient(to right, #001b42, transparent)' }}></div>
                <div className="flex flex-col justify-center align-center text-left h-[440px] w-[90%] md:w-[40%] pl-[100px] pt-[0px] z-[3] relative ">
                    <h1 className="font-semibold lg:font-[3.2em]">Thank you for contacting us</h1>
                    <p className="text-md">
                        Someone from our team will be in touch soon.
                    </p>
                </div>
                <button
                    onClick={() => {navigate('/')}}
                    className="relative w-[200px] xs:w-[250px] sm:w-[250px] lg:w-[300px] z-[5] mb-[50px] mx-auto text-[white] bg-[#001b42]"
                >
                    Back to home page
                </button>
            </div>
        </div>
    )
}


export default ConfirmationPage