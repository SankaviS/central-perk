import React from "react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import closed from "./../pictures/closed.png";
import "./../styles/home.css";
import "./../styles/order.css";

const Order = () => {
  const History = useHistory();
  return (
    <div class="container" style={{ marginTop: "10vh" }}>
      <motion.h1
        animate={{ fontSize: "60px", opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ delay: 0.3 }}
      >
        Online Order
      </motion.h1>
      <motion.img
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ delay: 0.5 }}
        src={closed}
        className="image1"
        alt="..."
      />
      <h2>Online ordering is currently unavailable</h2>
      <p>Please check back soon!</p>
      <button className="button" onClick={() => History.push("/home")}>
        Back to Home
      </button>
    </div>
  );
};

export default Order;
