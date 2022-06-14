import React from "react";
import { motion } from "framer-motion";

const Hours = () => {
  return (
    <div style={{ marginTop: "10vh" }}>
      <motion.h1
        animate={{ fontSize: "60px", opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ delay: 0.3 }}
      >
        HOURS & LOCATION
      </motion.h1>
      <h4>
        <a
          style={{ color: "white" }}
          href="https://www.google.com/maps/dir/13.1634341,80.3101676/central+perk+location+new+york+city/@1.6678485,-83.5546957,3z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x89c2597576677aab:0xcbab5e97d50fd8c1!2m2!1d-73.9853913!2d40.7396102"
          target="_blank"
          rel="noreferrer"
        >
          130 E 23rd St,
          <br /> New York,
          <br /> NY 10016,
          <br /> United States
        </a>
      </h4>
      <br />
      <h3>Dinner</h3> Served Nightly
      <br /> 5—10PM <br /> <br />
      <h3>Golden Hour</h3> Monday through Friday
      <br /> 5—6:30PM at the bar
      <br /> <br />
      <h3>Brunch</h3> Saturday & Sunda
      <br /> 11 AM—2:30PM
      <br /> <br />
      <h3>Lunch</h3>
      Wednesday, Thursday & Friday
      <br /> 12—3PM
      <div style={{ marginTop: "5vh", fontSize: "30px" }}>
        <button style={{ borderRadius: "10px", backgroundColor: "purple" }}>
          <a
            style={{ color: "black" }}
            href="https://www.google.com/maps/dir/13.1634341,80.3101676/central+perk+location+new+york+city/@1.6678485,-83.5546957,3z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x89c2597576677aab:0xcbab5e97d50fd8c1!2m2!1d-73.9853913!2d40.7396102"
            target="_blank"
            rel="noreferrer"
          >
            Get Directions
          </a>
        </button>
      </div>
    </div>
  );
};

export default Hours;
