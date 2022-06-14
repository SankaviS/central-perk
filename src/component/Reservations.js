import React from "react";
import { motion } from "framer-motion";
import "./../styles/reservation.css";
const Reservations = () => {
  return (
    <div class="container" style={{ marginTop: "10vh" }}>
      <motion.h1
        animate={{ fontSize: "60px", opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ delay: 0.3 }}
      >
        Reservations
      </motion.h1>
      <motion.img
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ delay: 0.5 }}
        className="image"
        src="https://images.getbento.com/accounts/3aba79963eaec755ff2b03d837bda6a8/media/images/SONA_interior_dining_room_with_painting.jpg?w=1000&fit=max&auto=compress,format&h=1000"
        alt="..."
      />
      <p>
        If you would like to dine at CENTRAL PERK, kindly email
        reservations@centralperk-nyc.com
        <br /> with name, phone number, preferred date(s), time, and number of
        guests.
      </p>
      <p>
        Please note that, at this time, we are booking tables up to 30 days in
        advance.
      </p>
    </div>
  );
};

export default Reservations;
