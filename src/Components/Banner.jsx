import React from "react";
import Typed from "react-typed";

function Banner() {
  return (
    <div className="bg-[#2699fb] w-full h-[100vh] py-[9rem] md:py-[230px] text-center">
      <div className="max-w-[1240px] m-auto text-white font-bold text-center space-y-5 md:space-y-8">
        <h1 className="text-xl md:text-3xl xl:text-4xl font-bold text-black">
          Learn with us
        </h1>
        <h2 className="text-4xl md:text-5xl xl:text-6xl">Grow with us</h2>
        <h3 className="text-xl lg:text-3xl xl-text-4xl">
          Learn
          <Typed
            className="px-2"
            strings={[
              "Web Development",
              "Digital Marketing",
              "Ethical Hacking",
            ]}
            typeSpeed={120}
            loop={true}
            backSpeed={50}
          />
        </h3>
        <div className="mt-6">
          <button className="bg-black text-white rounded-lg px-6 py-2 text-xl hover:scale-95 duration-200">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
