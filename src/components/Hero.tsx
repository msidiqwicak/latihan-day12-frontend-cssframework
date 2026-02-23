import { useState, useEffect } from "react";
import bgLight from "../assets/bg-mountain.png";
import bgDark from "../assets/bg-mountain-dark.jpg";
import moonIcon from "../assets/Combined Shape.png";
import sunIcon from "../assets/sun-shape.png";

export default function Hero() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <section>
      <div
        className="relative h-80 bg-cover bg-center px-10 transition-all duration-50"
        style={{ backgroundImage: `url(${darkMode ? bgDark : bgLight})` }}
      >
      
        <div className="flex justify-between items-center pt-25 px-115">
          <h1 className="text-white text-3xl font-bold tracking-[0.5em]">
            TODO
          </h1>




          <button onClick={() => setDarkMode(!darkMode)}>
            <img
              src={darkMode ? moonIcon : sunIcon}
              alt="moon"
              className="w-6 h-6 cursor-pointer"
            />
          </button>
        </div>

      
        <div className="flex justify-center items-center h-8/20 ">
          <input
            type="text"
            placeholder="Currently typing..."
            className="bg-sky-50 w-full max-w-md p-4 rounded-md shadow-lg cursor-pointer"
          />
        </div>
      </div>


      <footer className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <p className="text-xs text-[#9495A5] font-bold text-center">
          Drag and drop to reorder list
        </p>
      </footer>
    </section>
  );
}
