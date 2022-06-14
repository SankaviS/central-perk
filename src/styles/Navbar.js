import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import ChairIcon from "@mui/icons-material/Chair";
import { motion } from "framer-motion";
import "./Navbar.css";
const Navbar = () => {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo" onClick={() => history.push("/home")}>
        Central <ChairIcon style={{ color: "purple" }} /> Perk
      </span>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className={`nav-items ${isOpen && "open"}`}
      >
        <Link to="/hours">Hours&Location</Link>
        <Link to="/menu/dinner">Menu</Link>
        <Link to="/story">Our Story</Link>
        <Link to="/reservations">Reservations</Link>
        <Link to="/order">Order online</Link>
      </motion.div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
