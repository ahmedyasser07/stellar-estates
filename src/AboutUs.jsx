

const AboutUs = () => {

    return (
        <div className="flex flex-row gap-[40px] bg-[white] h-[800px]">
            <div className="hidden lg:block relative w-[50%]">
                <img src="./aboutUs1.jpg" className="absolute w-[350px] h-[450px] left-[80px] top-[50px] xl:left-[100px] xl:top-[50px] xl:w-[400px] xl:h-[500px]" />
                <img src="./aboutUs2.jpg" className="absolute w-[250px] h-[300px] left-[280px] top-[300px] xl:left-[310px] xl:top-[320px] xl:w-[300px] xl:h-[350px]" />
            </div>
            <div className="flex flex-col relative lg:text-left w-full text-center lg:w-[50%] gap-[50px] mt-[130px] overflow-hidden lg:pl-[60px]">
                <div className="flex flex-col gap-[30px]">
                    <h2 className="text-[#001b42] font-bold text-[30px]">About Us</h2>
                    <p className="text-[black] w-[75%] text-[27px] mx-auto lg:mx-0">
                        The commitment to excellence,
                        integrity, and client-centricity that
                        sets us apart as a leader in the
                        pursuit of exceptional real estate
                        experiences is achieved by the team
                        of in-house property consultants and
                        the work culture Stellar Estates
                        embodies.
                    </p>
                </div>
                <div className="flex flex-row justify-center gap-[20px] lg:gap-[0px] md:justify-between w-[100%] ml-[15px] lg:ml-[0px] md:w-[70%] md:mx-auto lg:mx-0">
                    <div className="flex flex-col">
                        <img src="./shield.svg" className="w-[50px] h-[50px]" />
                        <p className="text-xs md:text-base text-[black] mt-[5px] font-semibold w-[100px] text-center ml-[-25px]">
                            Property
                            Management
                        </p>
                    </div>
                    <div>
                        <img src="./card.svg" className="w-[50px] h-[50px]" />
                        <p className="text-xs md:text-base text-[black] mt-[5px] font-semibold w-[100px] text-center ml-[-25px]">
                            Financing
                            Solutions
                        </p>
                    </div>
                    <div>
                        <img src="./money.svg" className="w-[50px] h-[50px]" />
                        <p className="text-xs md:text-base text-[black] mt-[5px] font-semibold w-[100px] text-center ml-[-25px]">
                            Investment
                            Consultancy
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs