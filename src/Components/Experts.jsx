import React from "react";

function Experts() {
  return (
    <div className="max-w-[1240px] mx-auto md:h-[300px] md:grid md:grid-cols-2 my-9">
      <div className="md:h-[300px] md:col-span-1 w-[80%] flex justify-center items-center mx-auto">
        <img
          src="https://images.unsplash.com/photo-1610465299993-e6675c9f9efa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wJTIwd2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          alt=""
          className="w-[100%] h-[100%] rounded-2xl"
        />
      </div>
      <div className="h-[300px] md:col-span-1 flex flex-col justify-center p-16 md:p-0">
        <h1 className="text-[#00df9a] text-3xl font-bold mt-2">
          Learn from Experts
        </h1>
        <p className="my-4 lg:my-8 text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint et
          incidunt consectetur laboriosam magnam soluta minima saepe, deserunt
          corrupti debitis earum dolore. Tenetur nulla eos ab ipsum!
          Voluptatibus, neque saepe atque consequuntur quos at?
        </p>
        <div>
          <button className="bg-black text-xl  text-white rounded-lg px-6 py-3 hover:scale-95 duration-200">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Experts;
