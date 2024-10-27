import React from "react";

const Footer = () => {
  return (
    <div className="grid mx-auto w-full  py-[300px] h-[800px]  justify-center items-end bg-[#040D11] relative mt-[300px]">
    <div className=" h-[350px] flex flex-col gap-8 items-center justify-center bg-gradient-to-r from-blue-200 to-cyan-200 absolute top-[-175px] left-[50%] px-[100px] transform -translate-x-[50%]">
        <h1 className="text-[32px] text-black font-bold text-center">Subscribe to our newsletter</h1>
        <p className="text-gray-600 text-[32px] font-medium">Get the latest updates and news right in your inbox!</p>
        <div className="flex">
            <input type="text" placeholder="Enter your email" className="px-6 py-4 "/>
            <button className="px-6 py-4 text-center bg-gradient-to-r from-blue-200 to-cyan-200 font-bold">Subscribe</button>
            </div>
    </div>
      {/* main */}
      <div className="flex flex-col space-y-10 items-center justify-content-center">
        <img src="src/assets/assets/logo-footer.png" />
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center  justify-center gap-8 px-4">
          <ul className="flex flex-col items-start justify-center gap-2">
            <li className="text-white font-bold text-xl">Contact Us</li>
            <li className="text-white max-w-sm text-md text-left">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </li>
          </ul>

          <ul className="flex gap-4 flex-col items-start justify-center">
            <li className="text-white text-lg">Home</li>
            <li className="text-white text-lg">Services</li>
            <li className="text-white text-lg">About</li>
            <li className="text-white text-lg">Contact</li>
          </ul>

          <div className="flex flex-col items-start justify-center gap-4">
            <h4 className="font-bold text-lg text-white">Subscribe</h4>
            <p className="text-white text-lg">
              Subscribe to out newsletter for the latest updates.
            </p>
            <div className="flex">
            <input type="text" placeholder="Enter your email" className="px-6 py-4 "/>
            <button className="px-6 py-4 text-center bg-gradient-to-r from-blue-200 to-cyan-200 font-bold">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      {/* main ///// */}
    </div>
  );
};

export default Footer;
