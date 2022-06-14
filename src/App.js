import { Route } from "react-router-dom";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./styles/Navbar";
import Home from "./component/Home";
import Footer from "./styles/Footer";
import Hours from "./component/Hours";
import Menu from "./component/Menu";
import Dinner from "./menus/Dinner";
import Lunch from "./menus/Lunch";
import Dessert from "./menus/Dessert";
import Coffee from "./menus/Coffee";
import Goldenhour from "./menus/Goldenhour";
import Story from "./component/Story";
import Reservations from "./component/Reservations";
import Order from "./component/Order";
function App() {
  return (
    <div className="App">
      <main>
        <Navbar />
      </main>
      <header>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/hours">
          <Hours />
        </Route>
        <Route path="/reservations">
          <Reservations />
        </Route>
        <Route path="/order">
          <Order />
        </Route>
        <Route path="/menu">
          <Menu />
        </Route>
        <Route path="/menu/dinner" exact>
          <Dinner />
        </Route>
        <Route path="/menu/lunch" exact>
          <Lunch />
        </Route>
        <Route path="/menu/dessert" exact>
          <Dessert />
        </Route>
        <Route path="/menu/coffee" exact>
          <Coffee />
        </Route>
        <Route path="/menu/golden" exact>
          <Goldenhour />
        </Route>
        <Route path="/story">
          <Story />
        </Route>
      </header>
      <Footer />
    </div>
  );
}

export default App;
