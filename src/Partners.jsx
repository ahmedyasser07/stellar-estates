import Logo from "./Logo"


const Partners = () => {
    const logos_1 = ['Emaar.png', 'Ewan.png', 'Hyde Park.png', 'khaled sabry.png', 'Lavista.png', 'mabany edris.png', 'marakez.png', 'memaar almorshedy.png']
    const logos_2 = ['Mountain View.png', 'Ora.png', 'Orascom.png', 'Palm Hills.png', 'People & Places.png', 'Sodic.png', 'taj misr.png', 'Tatweer.png']
    return (
        <div className="flex flex-row justify-center bg-[#001b42] h-[400px] md:h-[500px]">
            <div className="flex flex-col mt-[50px] pb-[50px] text-center">
                <div className="mb-[20px]">
                    <h2 className="text-[28px] font-bold">Our Trusted Partners</h2>
                    <span className="text-[13px] text-wrap mx-auto w-[65%]">
                        We collaborate with some of the most reputable real estate developers
                        and financial institutions.
                    </span>
                </div>
                <div id='first row' className="h-[400px]  overflow-hidden">
                    <div className="flex flex-row flex-wrap justify-center gap-[20px] md: gap-[50px] lg:gap-[75px] xl:gap-[100px] mt-[30px]">
                        {
                            [...logos_1,...logos_2].map(logo => (
                                <div className="w-8 h-8 md:w-14 md:h-14">
                                    <img className="w-8 h-8 md:w-14 md:h-14" src={`./logos/${logo}`} alt="Your Image" />
                                </div>
                            ))
                        }
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Partners