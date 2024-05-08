

const Hero = () => {
    return (
        <div className="relative bg-center bg-no-repeat bg-cover w-full "
        style={{ backgroundImage: 'url(./background.jpg)'}}>
            <div className="w-[60%] absolute inset-0 md:w-[800px]" style={{ background: 'linear-gradient(to right, #001b42, transparent)' }}></div>
            <div className="flex flex-col justify-center align-center text-left h-[550px] w-[90%] md:w-[40%] pl-[100px] pt-[0px] z-[3] relative ">
                <h1 className="font-semibold text-[white]">Your Dream Home Awaits.</h1>
                <p>
                    Discover the perfect home that suits your lifestyle.
                    Let us guide you through our extensive portfolio of
                    residential properties.
                </p>
            </div>
        </div>
    )
}

export default Hero