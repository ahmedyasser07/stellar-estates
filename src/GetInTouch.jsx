import {
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  Slider,
  useMediaQuery,
  createTheme,
  ThemeProvider,
  SliderMarkLabel,
} from "@mui/material";
import "./animation.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const GetInTouch = () => {
  const [data, setData] = useState({});
  const [dataErros, setDataErrors] = useState({})
  const [selectedOption, setSelectedOption] = useState("");
  const [sliderValue, setSliderValue] = useState(0);
  const [message, setMessage] = useState("");
  const theme = createTheme({
    typography: {},
  });
  const navigate = useNavigate()
  // Function to handle changes in the slider value
  const handleSliderChange = (event, newValue) => {
    console.log(newValue);
    setData({ ...data, budget: newValue });
    setSliderValue(newValue);
  };


  const formatNumberWithCommas = (number) => {
    return number.toLocaleString();
  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    if (name === "phone_number" || name === "area") {
      const inputValue = value;
      const numericValue = inputValue.replace(/\D/g, ''); // Remove non-numeric characters
      value = numericValue;
    }
    setData({ ...data, [name]: value });
    setDataErrors({...dataErros,[name] : false})
  };

 
  const handleSubmit = async () => {
    if (!data.first_name || !data.last_name || !data.phone_number || !data.area || !message) {
      console.log('here')
      setDataErrors({
        first_name : !data.first_name,
        last_name : !data.last_name,
        phone_number : !data.phone_number,
        area : !data.area,
        message : !message
      })
    } else {
      const apiUrl =
        "https://script.google.com/macros/s/AKfycbyELwkO8h9NgyxJEz5MTz5lKUa7dd_w1KkLDGBXV-SJCSii4e7KHEhTIRY22hzJ0axj/exec";
      if (!data.intrested_in || data.intrested_in.trim() === "") {
        data.intrested_in = "Buying";
      }
      if (!data.area || data.area.trim() === "") {
        data.area = 0;
      }
      if (!data.budget || data.budget === "") {
        data.budget = 0;
      }
      const payload = {
        firstName: data.first_name,
        lastName: data.last_name,
        phoneNumber: data.phone_number,
        interestedIn: data.intrested_in,
        area: data.area,
        budget: sliderValue * 1000000,
        message: message,
      };

      console.log("paylod = ", payload);

      try {
        const response = await fetch(apiUrl, {
          method: "POST",
          mode: "no-cors",
          redirect: "follow",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
        alert("Data submitted successfully!");
      } catch (error) {
        console.error("Error:", error);
        alert("Failed to submit data");
      }
      navigate('/confirm')
    }
    
  };

  return (
    <div
      className="relative bg-center bg-no-repeat bg-cover text-[black] flex flex-col justify-center md:px-[100px] py-[100px] xl:px-[170px]"
      style={{ backgroundImage: "url(./aboutUs1.jpg)" }}
    >
      <div className="relative z-[3] bg-[white] rounded-lg h-[1500px] md:h-[1350px] w-[90%] md:w-[80%] px-[50px] py-[50px] mx-auto">
        <div className="">
          <div className="pb-[20px]">
            <h2 className="font-bold text-[30px] text-left">Get In Touch Now!</h2>
            <p className="text-left text-[14px]">
              Please leave your inquiry in the form below and our team of property consultants will take your request and get in touch with you right away.
            </p>
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
                    placeholder="First Name"
                    className="w-[200px] xs:w-[270px] sm:w-[300px] md:w-[370px] lg:w-[280px] xl:w-[300px] 2xl:w-[370px] h-[50px] rounded-lg border-[2px] border-solid bg-[white] pl-[10px] focus:outline-none"
                    onChange={handleInputChange}
                  />
                  <label hidden={!dataErros.first_name} className="text-xs text-[red] mt-[-10px] mr-auto lg:text-md">This field cant be left empty</label>
                </div>
                <div className="flex flex-col gap-[10px]">
                  <p className="text-left font-bold">Last Name</p>
                  {/* <input
                                        type="text"
                                        name="last_name"
                                        value={data.last_name}
                                        placeholder="Last Name" className="w-[200px] xs:w-[270px] sm:w-[300px] md:w-[370px] lg:w-[280px] xl:w-[300px] 2xl:w-[370px] h-[50px] rounded-lg border-[2px] border-solid bg-[white] pl-[10px] focus:outline-none"
                                    /> */}
                  <input
                    type="text"
                    name="last_name" // Make sure this matches exactly with the state management and logging.
                    value={data.last_name || ""} // Use || '' to ensure it doesn't show undefined.
                    placeholder="Last Name"
                    className="w-[200px] xs:w-[270px] sm:w-[300px] md:w-[370px] lg:w-[280px] xl:w-[300px] 2xl:w-[370px] h-[50px] rounded-lg border-[2px] border-solid bg-[white] pl-[10px] focus:outline-none"
                    onChange={handleInputChange}
                  />
                  <label hidden={!dataErros.last_name} className="text-xs text-[red] mt-[-10px] mr-auto lg:text-md">This field cant be left empty</label>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[10px]">
              <p className="text-left font-bold">Phone Number</p>
              <input
                type="text"
                name="phone_number"
                value={data.phone_number || ""}
                placeholder="Number"
                className="w-[200px] xs:w-[270px] sm:w-[300px] md:w-[370px] lg:w-[580px] xl:w-[620px] 2xl:w-[760px] h-[50px] rounded-lg border-[2px] border-solid bg-[white] pl-[10px] focus:outline-none mr-auto"
                onChange={handleInputChange}
                pattern="[0-9]*" // Only allows numeric characters
              />
              <label hidden={!dataErros.phone_number} className="text-xs text-[red] mt-[-10px] mr-auto lg:text-md">This field cant be left empty</label>
            </div>

            <div className="flex flex-col mt-[20px]">
              <p className="text-left font-bold">Intrested In</p>
              <div className="mr-auto ml-[10px]">
                <ThemeProvider theme={theme}>
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="buying"
                      name="intrested_in"
                      onChange={handleInputChange}
                    >
                      <FormControlLabel
                        value="buying"
                        control={
                          <Radio style={{ color: "black", marginTop: "0px" }} />
                        }
                        label="Buying"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      />
                      <FormControlLabel
                        value="selling"
                        control={<Radio style={{ color: "black" }} />}
                        label="Selling"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      />
                      <FormControlLabel
                        value="renting"
                        control={<Radio style={{ color: "black" }} />}
                        label="Renting"
                        className="font"
                      />
                    </RadioGroup>
                  </FormControl>
                </ThemeProvider>
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
              placeholder="180 m"
              className="w-[200px] xs:w-[270px] sm:w-[300px] md:w-[370px] lg:w-[580px] xl:w-[620px] 2xl:w-[760px] h-[50px] rounded-lg border-[2px] border-solid bg-[white]   focus:outline-none pl-[10px]"
            />
            <label hidden={!dataErros.area} className="text-xs text-[red] mt-[-10px] mr-auto lg:text-md">This field cant be left empty</label>
          </div>
          <div className="mt-[20px]">
            <p className="text-left font-bold">Budget</p>
            <p className="text-[grey] text-4xl text-left my-[10px] pb-[20px] font-bold">
              EGP {formatNumberWithCommas(sliderValue * 1000000)}
            </p>

            <Slider
              aria-label="Budget"
              defaultValue={0}
              value={sliderValue}
              onChange={handleSliderChange}
              step={1} // 1 million step
              min={0}
              max={50} // 0 to 50 million
              marks={[
                { value: 0, label: "0m" },
                { value: 10, label: "10m" },
                { value: 20, label: "20m" },
                { value: 30, label: "30m" },
                { value: 40, label: "40m" },
                { value: 50, label: "50m" },
              ]}
              style={{ color: "#001b42", height: "10px", marginTop: "-10px" }}
            />
          </div>
          {/* <div className="mt-[20px]">
                        <p className="text-left font-bold">Budget</p>
                        <p className="text-[grey] text-4xl text-left my-[10px] pb-[20px] font-bold">EGP {formatNumberWithCommas(sliderValue * 1000000)}
                        </p>

                        <div className="hidden lg:flex lg:flex-row relative ml-[0px] pb-[10px]">
                            {
                                moneyOptions.map(value => (
                                    <div className="flex flex-col absolute top-[-20px] left-[]" style={{left : `calc(${parseInt(value)}% - 1rem / 2)`}}>
                                        <p className="text-[10px]">{value}</p>
                                        <div className="flex flex-row justify-center">
                                            <div className="w-2 h-2 rounded-full bg-gray-300 mx-auto my-[5px]"></div>
                                        </div>
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
                            marks
                            style={{ color: '#001b42', height: "10px", marginTop: '-10px' }}
                        />

                    </div> */}
          <div className="flex flex-col">
            <label className="font-bold text-left mb-[20px]">
              Tell us what you’re looking for, and we will tailor a plan for
              you.
            </label>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder=""
              className="w-[200px] xs:w-[250px] sm:w-[300px] md:w-[370px] lg:w-[550px] xl:w-[620px] 2xl:w-[750px] h-[400px] rounded-lg border-[2px] border-solid bg-[white] pl-[10px] focus:outline-none pt-[-200px]"
            />
            <label hidden={!dataErros.message} className="text-xs text-[red] mr-auto lg:text-md">This field cant be left empty</label>
            <button
              onClick={handleSubmit}
              className="w-[200px] xs:w-[250px] sm:w-[300px] mt-[50px] mx-auto text-[white] bg-[#001b42]"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
