

const Footer = () => {
    return(
        <div className="bg-[white] flex flex-col justify-center xs:flex-row xs:justify-evenly h-[30px]">
            <div className="flex flex-col justify-center">
                <p className="text-[black] text-xs my-auto font-semibold">Stellar Estates – All rights reserved</p>
            </div>

            <div className="flex flex-row justify-center gap-[10px]">
                <p className="text-[black] text-xs my-auto font-bold">Follow Us</p>
                <img src="./icons/facebook.svg" className="w-[15px] h-[15px] my-auto"/>
                <img src="./icons/X.svg" className="w-[15px] h-[15px] my-auto"/>
                <img src="./icons/instagram.svg" className="w-[15px] h-[15px] my-auto"/>
                <img src="./icons/linkedin.svg" className="w-[15px] h-[15px] my-auto"/>
            </div>
        </div>
    )
}

export default Footer