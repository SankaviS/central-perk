import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./../styles/menu.css";
const Menu = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12 mb-4 mb-md-0">
          <div style={{ marginTop: "10vh" }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <Link className="link" to="/menu/dinner">
                Dinner
              </Link>
              <Link className="link" to="/menu/lunch">
                Lunch
              </Link>

              <Link className="link" to="/menu/dessert">
                Dessert
              </Link>
              <Link className="link" to="/menu/coffee">
                Chai & coffee
              </Link>
              <Link className="link" to="/menu/golden">
                Golden Hour
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
