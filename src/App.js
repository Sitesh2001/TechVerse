import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LogIn from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";
import Order from "./Pages/Order";
import Payment from "./Pages/Payment";
import Cart from "./Pages/Cart";
import NoPage from "./Pages/NoPage";
import MyState from "./context/Data/myState";
import Products from "./Components/HomeItems/Products";
import Productpage from "./Pages/Productpage";
import { Brands } from "./Components/Stocks/Brands";

function App() {
  return (
    <div className="App font-[poppins]">
      <MyState>
      <Router>
        <Routes>
          <Route exact path="/" element = {<Home/>} />
          <Route path="/login" element = {<LogIn/>} />
          <Route path="/register" element = {<SignUp/>}/>
          <Route path="/order" element = {<Order/>} />
          <Route path="/payment" element = {<Payment/>} />
          <Route path="/cart/:id" element = {<Cart/>} />
          <Route path="*" element = {<NoPage/>} />
          <Route path="/mobiles" element = {<Products type = "Mobile" alias = "Smart Phones"/>}/>
          <Route path="/laptops" element = {<Products type = "Laptop" alias = "Laptops" />}/>
          <Route path="/tablets" element = {<Products type = "Tablet" alias = "Tabs" />}/>
          <Route path="/smartwatch" element = {<Products type = "Watch" alias = "Smart Watch" />}/>
          <Route path="/tv" element = {<Products type = 'Tv' alias = "Smart Tv's" />}/>
          <Route path="/bluetooths" element = {<Products type = 'Bluetooth' alias = "True Air Buds" />}/>
          <Route path="/topProducts" element = {<Products type = 'TopProducts' />}/>
          <Route path="/newProducts" element = {<Products type = 'NewProducts' />}/>
          <Route path="/topSellings" element = {<Products type = 'TopSellings' />}/>
          <Route path="/:type/:id" element = {<Productpage/>}/>
          <Route path="/brands" element = {<Brands/>}/>
        </Routes>
      </Router>
      </MyState>

    </div>
  );
}

export default App;
