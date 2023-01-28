import React from "react";

function Newslettter() {
  return (
    <div className="bg-[#2699fb] py-32">
      <div className="max-w-[1240px] md:flex mx-auto justify-around">
        <div className="m-4 md:m-0">
          <h1 className="text-[20px] md:text-3xl font-bold text-white">
            I want to learn latest IT skills ?
          </h1>
          <p className="text-white">
            Sign up to our newsletter and stay up to date
          </p>
        </div>
        <div className="m-4 md:m-0">
          <input
            type="text"
            className="p-2 mr-4 rounded mb-3"
            placeholder="Email"
          />
          <button className="bg-black text-white rounded-lg px-6 py-2 text-xl hover:scale-95 duration-200">
            Notify Me
          </button>
          <br />
          <p className="text-white">
            We care about the protection of your data. <br />
            <a className="text-black" href="">
              Read out privacy policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Newslettter;
