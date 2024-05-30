import { useNavigate } from "react-router-dom";
import Header from "./Header";

const ConfirmationPage = () => {
    const navigate = useNavigate();
    return (
        <div className="w-full h-screen flex flex-col justify-between">
            <Header />
            <div className="relative flex-grow bg-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url(./background.jpg)' }}>
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #001b42, transparent)' }}></div>
                <div className="flex flex-col justify-center items-center text-center h-full w-full z-10 relative">
                    <h1 className="font-semibold text-3xl lg:text-5xl text-white">Thank you for contacting us</h1>
                    <p className="text-md text-white mt-4">
                        Someone from our team will be in touch soon.
                    </p>
                    <button
                        onClick={() => { navigate('/') }}
                        className="mt-8 px-6 py-3text-[white] bg-[#001b42] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        Back to home page
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationPage;
