import Logo from "./Logo";
import LogosSlider from "./LogoSlider";
import "./animation.css";

const Partners = () => {
  const logos_1 = [
    "Emaar.png",
    "Ewan.png",
    "Hyde Park.png",
    "khaled sabry.png",
    "Lavista.png",
    "mabany edris.png",
    "marakez.png",
    "memaar almorshedy.png",
  ];
  const logos_2 = [
    "Mountain View.png",
    "Ora.png",
    "Orascom.png",
    "Palm Hills.png",
    "People & Places.png",
    "Sodic.png",
    "taj misr.png",
    "Tatweer.png",
  ];
  return (
    <div className="flex flex-col bg-[#001b42] h-[350px] md:h-[400px]">
      <div className="flex flex-col mt-[50px] pb-[50px] text-center">
        <div className="mb-[20px] px-[10px]">
          <div className="flex flex-col justify-center items-center text-center h-full w-full z-10 relative text-white">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Our Trusted Partners
            </h2>
            <span className="text-md lg:text-lg mt-4 w-4/5 lg:w-3/5">
              We collaborate with some of the most reputable real estate
              developers and financial institutions.
            </span>
          </div>
        </div>
      </div>
      <LogosSlider />
    </div>
  );
};

export default Partners;
