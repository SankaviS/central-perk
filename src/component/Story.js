import React from "react";
import "./../styles/story.css";
import { motion } from "framer-motion";
const Story = () => {
  return (
    <div>
      <motion.div
        class="container"
        animate={{ marginTop: "10vh", opacity: 1 }}
        transition={{ type: "fade", delay: 0.5 }}
        initial={{ opacity: 0 }}
      >
        <img
          src="https://www.wallpapers.net/free-download-assorted-food-hd-wallpaper-for-desktop-mobiles/download/828x350.jpg"
          alt="Snow"
          style={{ width: "100%" }}
        />

        <div class="centered">Our Story</div>
      </motion.div>
      <div class="container">
        <h3 style={{ margin: "10vh" }}>
          Central Perk reinvents the neighborhood eatery, combining timeless
          inspiration from classic Americana with inventive and playful modern
          flair. With influences ranging from the 1950s diner to the elegant
          railway dining cars of days past, you'll find a nostalgic collection
          of comforts, classics and curiosities with a modern twist.
        </h3>
        <h1>
          <b>COMFORTS. CLASSICS. CURIOSITIES.</b>
        </h1>
      </div>
    </div>
  );
};

export default Story;
