import React from "react";

const Dessert = () => {
  return (
    <div class="container" style={{ border: "1px solid white" }}>
      <div class="row">
        <div class="col-lg-12 col-md-12 mb-4 mb-md-0">
          <h1
            style={{
              marginTop: "10vh",
              fontWeight: "bold",
              letterSpacing: "15px",
            }}
          >
            Dessert
          </h1>

          <h3>CARAMELIZED APPLE CHIROTI</h3>
          <p>Burnt Cheesecake, Cinnamon Ice Cream</p>

          <h3>LEMON CORIANDER YOGURT ‘MISTI DOI’</h3>
          <p>Honey Meringue, Candied Coriander Crunch, Pistachios</p>

          <h3>CHOCOLATE BEBINCA</h3>
          <p>
            Goan Layer Cake, Valrhona Chocolate Crémeux, Filter Coffee Ice Cream
          </p>

          <p class="menu-item__details menu-item__details--price"></p>

          <h3>PEAR JALEBI</h3>
          <p>
            Sarsaparilla Pear Butter, Almond Mawa Cake Jaggery Bourbon Ice Cream
          </p>

          <h3>Coconut Kheer Pride Special</h3>
          <p>
            Cardamom Rice Pudding, Reduced Summer Strawberries, Rainbow Tuile
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dessert;
