import { FormControl, FormControlLabel, FormLabel, RadioGroup, Radio, Slider, useMediaQuery } from "@mui/material";

import { useState } from "react"


const GetInTouch = () => {
    const [data, setData] = useState({})
    const [selectedOption, setSelectedOption] = useState('');
    const [sliderValue, setSliderValue] = useState(0);
    const [message , setMessage] = useState('')

    // Function to handle changes in the slider value
    const handleSliderChange = (event, newValue) => {
        console.log(newValue)
        setData({...data,'budget':newValue})
        setSliderValue(newValue);
    };
    const [moneyValue, setMoneyValue] = useState(100); // Initial value
    const moneyOptions = ['0m', '5m', '10m', '15m', '20m', '25m', '30m', '35m', '40m', '45m', '50m', '55m', '60m', '65m', '70m', '75m', '80m', '85m', '90m', '95m', '100m'];
    const isSmallScreen = useMediaQuery('(max-width:800px)');

    const handleMoneyChange = (event) => {
        setMoneyValue(parseInt(event.target.value));
    };

    const formatNumberWithCommas = (number) => {
        return number.toLocaleString(); // Use JavaScript's toLocaleString() method
    };

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };
    return (
        <div className="relative bg-center bg-no-repeat bg-cover text-[black] flex flex-col justify-center md:px-[100px] py-[100px] xl:px-[170px]" style={{ backgroundImage: 'url(./aboutUs1.jpg)' }}>

            <div className="relative z-[3] bg-[white] rounded-lg h-[1500px] md:h-[1350px] w-[90%] md:w-[80%] px-[50px] py-[50px] mx-auto">
                <div className="">
                    <div className="pb-[20px]">
                        <h2 className="font-bold text-[30px] text-left">Get In Touch</h2>
                        <p className="text-left text-[14px]">Our property consultant will get in contact with you.</p>
                    </div>
                    <div>
                        <div>
                            <div className="flex flex-col lg:flex-row gap-[20px] mb-[20px]">
                                <div className="flex flex-col gap-[10px]">
                                    <p className="text-left font-bold">First Name</p>
                                    <input
                                        type="text"
                                        name="first_name"
                                        value={data.first_name}
                                        placeholder="First Name" className="w-[200px] xs:w-[270px] sm:w-[300px] md:w-[370px] lg:w-[280px] xl:w-[300px] 2xl:w-[370px] h-[50px] rounded-lg border-[2px] border-solid bg-[white] pl-[10px] focus:outline-none"
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="flex flex-col gap-[10px]">
                                    <p className="text-left font-bold">Last Name</p>
                                    <input
                                        type="text"
                                        name="last_name"
                                        value={data.last_name}
                                        placeholder="Last Name" className="w-[200px] xs:w-[270px] sm:w-[300px] md:w-[370px] lg:w-[280px] xl:w-[300px] 2xl:w-[370px] h-[50px] rounded-lg border-[2px] border-solid bg-[white] pl-[10px] focus:outline-none"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-[10px]">
                            <p className="text-left font-bold">Phone Number</p>
                            <input
                                type="text"
                                name="phone_number"
                                value={data.phone_number}
                                placeholder="Number" className="w-[200px] xs:w-[270px] sm:w-[300px] md:w-[370px] lg:w-[580px] xl:w-[620px] 2xl:w-[760px] h-[50px] rounded-lg border-[2px] border-solid bg-[white] pl-[10px] focus:outline-none mr-auto"
                            />
                        </div>

                        <div className="flex flex-col mt-[20px]">
                            <p className="text-left font-bold">Intrested In</p>
                            <div className="mr-auto ml-[10px]">
                                <FormControl>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="buying"
                                        name="intrested_in"
                                        onChange={handleInputChange}
                                    >
                                        <FormControlLabel value="buying" control={<Radio style={{ color: 'black', marginTop: '0px' }} />} label="Buying" />
                                        <FormControlLabel value="selling" control={<Radio style={{ color: 'black' }} />} label="Selling" />
                                        <FormControlLabel value="renting" control={<Radio style={{ color: 'black' }} />} label="Renting" />
                                    </RadioGroup>
                                </FormControl>
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <p className="text-left font-bold">Area</p>
                        <input
                            type="text"
                            name="area"
                            onChange={handleInputChange}
                            value={data.area}
                            placeholder="180 m" className="w-[200px] xs:w-[270px] sm:w-[300px] md:w-[370px] lg:w-[580px] xl:w-[620px] 2xl:w-[760px] h-[50px] rounded-lg border-[2px] border-solid bg-[white]   focus:outline-none pl-[10px]"
                        />
                    </div>
                    <div className="mt-[20px]">
                        <p className="text-left font-bold">Budget</p>
                        <p className="text-[grey] text-4xl text-left my-[10px] font-bold">EGP {formatNumberWithCommas(sliderValue * 1000000)}</p>

                        <div className="hidden lg:flex lg:flex-row gap-[5px] xl:gap-[9px] 2xl:gap-[15px] ml-[-7px]">
                            {
                                moneyOptions.map(value => (
                                    <div className="flex flex-col">
                                        <p className="text-xs">{value}</p>
                                        <div className="w-2 h-2 rounded-full bg-gray-300 ml-[5px] my-[5px] mx-auto"></div>
                                    </div>
                                ))
                            }

                        </div>
                        <Slider
                            aria-label="Small steps"
                            defaultValue={0}
                            value={sliderValue}
                            onChange={handleSliderChange}
                            getAriaValueText={""}
                            step={5}
                            min={0}
                            max={100}
                            valueLabelDisplay={isSmallScreen ? "auto" : "off"}
                            style={{ color: '#001b42', height: "10px", marginTop: '-10px' }}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-bold text-left mb-[20px]">Tell us what you’re looking for, and we will tailor a plan for you.</label>
                        <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value) }
                            placeholder="" className="w-[200px] xs:w-[250px] sm:w-[300px] md:w-[370px] lg:w-[550px] xl:w-[620px] 2xl:w-[750px] h-[400px] rounded-lg border-[2px] border-solid bg-[white] pl-[10px] focus:outline-none pt-[-200px]"
                        />
                        <button className="w-[200px] xs:w-[250px] sm:w-[300px] mt-[50px] mx-auto text-[white] bg-[#001b42]">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetInTouch