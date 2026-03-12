import React from "react";
import Logo from "../assets/princeimg.jpeg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Back from "../assets/background.jpg"

function Home() {
  const navigate = useNavigate();
  function handleservice() {
    navigate("./service");
  }
  function handletouch() {
    navigate("./contact");
  }
  return (
    <div className="w-full h-screen flex flex-col md:flex-row justify-evenly items-center bg-cover bg-center p-4 md:p-0" style={{backgroundImage:`URL(${Back})`}}>
      
      <motion.div
        className="w-full md:w-auto h-auto text-white flex flex-col justify-center items-start md:items-start max-w-md md:max-w-xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        <p className="text-4xl sm:text-5xl md:text-7xl font-bold text-white">
          Hello, I'm <span className="text-sky-500">Pawandeep Singh</span>
        </p>
        <p className="text-xl sm:text-2xl md:text-3xl mt-4">
          Creative <span className="text-sky-500">Frontend Developer</span>
        </p>
        <p className="text-base sm:text-lg md:text-xl mt-6 font-medium">
          I'am Frontend Develpoer learning React & Building Clean,Responsive
          Websites
        </p>
        <p className="text-base sm:text-lg md:text-xl mt-2 font-medium">
          I'm a passionate web developer focused on creating modern,
          user-friendly websites. Currently learning Full-Stack development and
          improving my skills every day.
        </p>
        <div className="btn flex flex-col sm:flex-row gap-4 sm:gap-10 mt-6">
         
          <button
            className="rounded-2xl p-4 cursor-pointer border border-sky-500 text-blue-500 font-bold hover:-translate-y-1"
            onClick={handletouch}
          >
            Get in touch
          </button>
        </div>
      </motion.div>

      <motion.div
        className="w-64 h-64 sm:w-80 sm:h-80 md:w-130 md:h-130 flex justify-center mt-6 md:mt-0"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        <img src={Logo} alt="" className="rounded-full w-full h-full object-cover"/>
      </motion.div>

    </div>
  );
}

export default Home;