import React from "react";
import "./../styles/home.css";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
const Home = () => {
  const history = useHistory();
  return (
    <div class="container" style={{ marginTop: "10vh" }}>
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 mb-4 mb-md-0">
            <motion.h1
              animate={{
                marginTop: "10vh",
                fontWeight: "bold",
                letterSpacing: "15px",
              }}
              transition={{ delay: 0.5 }}
            >
              Home of Couch, Comfort <br />
              and Food
            </motion.h1>
            <button
              onClick={() => history.push("/reservations")}
              className="button"
            >
              Book Your reservations
            </button>
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 mb-4 mb-md-0">
            <motion.img
              initial={{ x: "100vw" }}
              animate={{
                x: 0,
              }}
              transition={{ delay: 1 }}
              className="image2"
              src="https://www.homestratosphere.com/wp-content/uploads/2019/05/hz-mediterranean-purple-dining-room-may222019-min-870x566.png"
            />
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 mb-4 mb-md-0">
            <motion.img
              initial={{ x: "100vw" }}
              animate={{
                x: 0,
              }}
              transition={{ delay: 1 }}
              className="image2"
              src="https://media.istockphoto.com/photos/close-up-of-fast-food-snacks-and-drink-on-table-picture-id1045891638?b=1&k=20&m=1045891638&s=170667a&w=0&h=JSEIoGUgDeevl82VbnXSBwSC4M9_2OOSpKx4qJAJnGc="
            />
          </div>
          <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
            <motion.h1
              animate={{
                marginTop: "10vh",
                fontWeight: "bold",
                letterSpacing: "15px",
              }}
              transition={{ delay: 0.5 }}
            >
              OUR MENUS
            </motion.h1>
            <p>
              Our creative, elevated food and beverage program combines
              satisfying staples with imaginative twists. From boozy brunches
              and happy hours to family dinners, special occasions and
              everything in between, Central Perk has something for everyone.
            </p>
            <button onClick={() => history.push("/menu")} className="button">
              View Menus
            </button>
          </div>
        </div>
      </div>
      <div class="container" style={{ marginTop: "5vh" }}>
        <div class="row">
          <div class="col-lg-4 col-md-12 mb-4 mb-md-0">
            <button onClick={() => history.push("/hours")} className="button">
              THE TIME AND THE PLACE
            </button>
          </div>
          <div class="col-lg-4 col-md-12 mb-4 mb-md-0">
            <button onClick={() => history.push("/story")} className="button">
              DID WE JUST BECOME FRIENDS
            </button>
          </div>
          <div class="col-lg-4 col-md-12 mb-4 mb-md-0">
            <button
              onClick={() => history.push("/reservations")}
              className="button"
            >
              DO A FAVOUR BY VISITING US
            </button>
          </div>
        </div>
      </div>
      <div class="container" style={{ marginTop: "5vh" }}>
        <div class="row">
          <div class="col-lg-12 col-md-12 mb-4 mb-md-0">
            <h1
              style={{
                marginTop: "10vh",
                fontWeight: "bold",
                letterSpacing: "15px",
              }}
            >
              We are Friends & Family
            </h1>
            <p>
              At <span style={{ color: "purple" }}>Central Perk</span>, we are
              dedicated to all things seasonal with a market-driven day-time
              menu that also offers <br />a variety of artisan breads and
              pastries made daily with locally-sourced, heirloom grains.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
