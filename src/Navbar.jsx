import React from 'react';
const Navbar = ({ coin, mainPrice , curCoin, useCurCoin}) => {
    const [display, useDisplay] = useState(`hidden`);
    function open() {
      useDisplay(`flex`);
    }
    function close() {
      useDisplay(`hidden`);
    }
    return (
      <div className="flex items-center justify-between py-4 px-8 mt-4 relative transition-all">
        {/* pop-up nav */}
        <div
          className={`modal p-8 bg-gradient-to-r from-blue-700 to-teal-600 absolute right-10 top-16 ${display}`}
        >
          <ul className={`gap-4 items-center justify-center flex flex-col`}>
            <li className="text-white text-md font-semibold cursor-pointer">
              Home
            </li>
            <li className="text-white text-md font-semibold cursor-pointer">
              Fixture
            </li>
            <li className="text-white text-md font-semibold cursor-pointer">
              Teams
            </li>
            <li className="text-white text-md font-semibold cursor-pointer">
              Schedules
            </li>
            <li className=" border flex rounded-xl">
              <p className="font-bold px-2 py-1 rounded-xl text-white">
                <span className="font-bold">{coin}</span> coin 🪙
              </p>
              <img />
            </li>
          </ul>
        </div>
        {/* pop-up nav/////// */}
        <img src="src/assets/assets/logo.png" />
        <ul className={`gap-4 items-center justify-center hidden md:flex`}>
          <li className="text-black font-light text-md">Home</li>
          <li className="text-black font-light text-md">Fixture</li>
          <li className="text-black font-light text-md">Teams</li>
          <li className="text-black font-light text-md">Schedules</li>
          <li className=" border p-2 rounded-xl">
            <p className="font-bold">
              <span className="font-bold">{coin}</span> coin 🪙
            </p>
            <img />
          </li>
        </ul>
        <img
          src="src/assets/assets/menu-outline.svg"
          className={`open ${display === "flex" ? "hidden" : "flex"} md:hidden`}
          onClick={open}
        />
        <img
          src="src\assets\assets\close-circle-outline.svg"
          className={`w-[40px] absolute top-6 right-8 ${display} md:hidden cursor-pointer`}
          onClick={close}
        />
      </div>
    );
  };
export default Navbar;