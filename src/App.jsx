/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { useState } from "react";
import Footer from "./Footer";
const players = [
  {
    name: "Rohit Sharma",
    id: 1,
    country: "India",
    play_style: "Aggressive Batsman",
    image_url:
      "https://onecricketnews.akamaized.net/parth-editor/oc-dashboard/news-images-prod/1707738592497_savsavava.jpeg",
    player_type: "Batsman",
    price: 1250000,
  },
  {
    name: "Kane Williamson",
    id: 2,
    country: "New Zealand",
    play_style: "Technical Batsman",
    image_url: "src/assets/assets/kane-williamson.jpg",
    player_type: "Batsman",
    price: 20000,
  },
  // {
  //   name: "Ben Stokes",
  //   id: 3,
  //   country: "England",
  //   play_style: "All-rounder",
  //   image_url: "src/assets/assets/stokes.jpg",
  //   player_type: "All-rounder",
  //   price: 70000,
  // },
  // {
  //   name: "Babar Azam",
  //   id: 4,
  //   country: "Pakistan",
  //   play_style: "Stylish Batsman",
  //   image_url: "src/assets/assets/babar.jpg",
  //   player_type: "Batsman",
  //   price: 50000,
  // },
  // {
  //   name: "Steve Smith",
  //   id: 5,
  //   country: "Australia",
  //   play_style: "Unorthodox Batsman",
  //   image_url: "src/assets/assets/steve smith.jpg",
  //   player_type: "Batsman",
  //   price: 120000,
  // },
  // {
  //   name: "David Warner",
  //   id: 6,
  //   country: "Australia",
  //   play_style: "Aggressive Batsman",
  //   image_url: "src/assets/assets/warner.jpg",
  //   player_type: "Batsman",
  //   price: 130000,
  // },
  // {
  //   name: "Heinrich Klassen",
  //   id: 7,
  //   country: "South Africa",
  //   play_style: "Hardhitting Batsman",
  //   image_url: "src/assets/assets/klassen.webp",
  //   player_type: "Batsman",
  //   price: 185000,
  // },
  // {
  //   name: "AB de Villiers",
  //   id: 8,
  //   country: "South Africa",
  //   play_style: "Innovative Batsman",
  //   image_url: "src/assets/assets/villears.jpg",
  //   player_type: "Batsman",
  //   price: 100000,
  // },
  // {
  //   name: "Kumar Sangakkara",
  //   id: 9,
  //   country: "Srilanka",
  //   play_style: "Calm Batsman",
  //   image_url: "src/assets/assets/sanga.jpg",
  //   player_type: "Batsman/WK",
  //   price: 110000,
  // },
];

const App = () => {
  const [coin, useCoin] = useState(0);
  function use() {
    if (coin > 450000) {
      alert(`max coin exceeded`);
    } else {
      useCoin(coin + 25000 * 2);
    }
  }
  const [selected, useSelected] = useState(0);
  function select() {
    useSelected(selected + 1);
  }
  return (
    <div className="container font-main max-w-screen-xl mx-auto">
      <Navbar coin={coin} />
      <Hero use={use} selected={selected} />
      <Body selected={selected} select={select} />
      <Footer/>
    </div>
  );
};

// main- data ///////
const Navbar = ({ coin }) => {
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
const Hero = (props) => {
  return (
    <>
      <div className="bg-[url('src/assets/assets/bg.png')] bg-no-repeat flex flex-col items-center justify-center max-w-screen-xl bg-cover py-12 lg:p-28 space-y-8">
        <img src="src/assets/assets/banner-main.png" />
        <h1 className="text-[40px] font-bold text-center text-white sm:text-[35px]">
          Assemble your Ultimate Dream 11 Cricket Team
        </h1>
        <p className="text-white font-light">Beyond Boundaries Beyond Limits</p>
        <button
          onClick={props.use}
          className="text-sm md:text-md px-4 py-2 bg-gradient-to-r from-fuchsia-500 to-cyan-500 hover: border-[1px] rounded-lg text-white font-bold transition-all duration-500"
        >
          Claim Free Credit
        </button>
      </div>
    </>
  );
};
const Body = ({ select, selected }) => {
  return (
    <>
      <div className="flex justify-between w-full items-center py-2" >
        <p className="text-xl font-bold">Available Players</p>

        <div className="flex ">
          <button className="p-2 bg-[#E7FE29] rounded-sm text-black">
            Available
          </button>
          <div className="p-2 rounded-sm border cursor-pointer">
            Selected ({selected})
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-items-center gap-4 p-4 border max-w-screen-xl mx-auto ">
        {players.map((pl) => (
          <Cards key={pl.id} player={pl} select={select} />
        ))}
      </div>
      <Hidden/>
    </>
  );
};
let name, img, type
function handleClick(event) {
   name = event.target.closest(".card").children[1].innerText
    img = event.target.closest(".card").children[0].childNodes[0].src
    type = event.target.closest(".card").children[5].lastChild.innerText
}

function Hidden () {
  return (
    <div className="w-full mx-auto px-8 py-4 flex items-center justify-between gap-4 border mt-4 rounded-xl">
    <div className="flex gap-2 items-center justify- between">
      <div className="one flex gap-2 justify-center items-center">
        <img src={img} className="h-[100px] w-[] object-fit rounded-xl"/>
        <div className="flex flex-col">
          <h1 className="font-bold text-xl">{name}</h1>
          <p>{type}</p>
        </div>
      </div>
    </div>
    <p>🗑️</p>
    </div>
  )
}

const Cards = ({ player, select }) => {
  const [btnClicked, useClicked] = useState(0);
  const clicked = () => {
    useClicked(btnClicked + 1);
  };
 
  return (
    <>
      <div className="card flex flex-col p-2 items-start justify-center gap-4 max-w-[520px] border-[0.1px] border-blue-100 rounded-lg shadow-sm">
        <div className="bg-gradient-to-r from-blue-200 to-cyan-200 ">
          <img
            className="w-[450px] h-[300px] object-cover"
            src={player.image_url}
          />
        </div>
        <div className="flex space-x-4 items-center">
          <img src="src/assets/assets/name.png" />
          <p className="font-bold">{player.name}</p>
        </div>

        <div className="flex w-full justify-between items-center p-2">
          <div className="flex gap-2">
            <img src="src/assets/assets/flag.png" />
            <p className="text-sm text-slate-800">{player.country}</p>
          </div>
          <p className="p-1 rounded-md text-sm bg-slate-200">All-Rounder</p>
        </div>
        <div className="line w-[100%] mx-auto h-[1px] bg-slate-300"></div>
        <p className="font-bold text-md text-black">{player.rating}</p>
        <div className="flex justify-between items-center w-full">
          <p className="font-bold text-md">Type</p>
          <p className="font-light text-slate-600 text-md">Right-Hand-Bat</p>
        </div>

        <div className="flex justify-between items-center w-full">
          <p className="font-bold text-md">Price: ${player.price}</p>
          <button
            className="font-ligh text-sm font-bold border p-2 border-none rounded-3xl transition duration-300 cursor-pointer bg-gradient-to-r from-violet-600 to-indigo-600 hover:hov  text-white hover:text-black"
            onClick={(e) => {
              select(), clicked(), handleClick(e);
            }}
          >
            Choose Player
          </button>
        </div>
      </div>
    </>
  );
};
export default App;
