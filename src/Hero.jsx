import React from 'react';

const Hero = ({ use, curCoin, useCurCoin, mainPrice }) => {
    return (
      <>
        <div className="bg-[url('src/assets/assets/bg.png')] bg-no-repeat flex flex-col items-center justify-center max-w-screen-xl bg-cover py-12 lg:p-28 space-y-8">
          <img src="src/assets/assets/banner-main.png" />
          <h1 className="text-[40px] font-bold text-center text-white sm:text-[35px]">
            Assemble your Ultimate Dream 11 Cricket Team
          </h1>
          <p className="text-white font-light">Beyond Boundaries Beyond Limits</p>
          <button
            onClick={use}
            className="text-sm md:text-md px-4 py-2 bg-gradient-to-r from-fuchsia-500 to-cyan-500 hover: border-[1px] rounded-lg text-white font-bold transition-all duration-500"
          >
            Claim Free Credit
          </button>
        </div>
      </>
    );
  };

export default Hero;