import styles from "./components/App/App.module.css";
import {Header} from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Services } from "./components/Services/Services";
import {Cars} from "./components/Cars/Cars";
import { About } from "./components/About/About";
import { Blog } from "./components/Blog/Blog";
import { Singlepage } from "./components/Blog/Singlepage";
import { Contacts } from "./components/Contacts/Contacts";
import { Cart } from "./components/Cart/Cart";
import { Footer } from "./components/Footer/Footer";
import { Context } from "./components/Store";
import { useState } from "react";
import {addToCart, getCartData} from "./utils/index";


function App() {
    const cartData = getCartData();
    const [cart, setCart] = useState(cartData);

  
  return (
      <Context.Provider value = {{addToCart, cart, setCart}}>
          <div className = {styles.app}> 
              <BrowserRouter>
                  <Header />
                  <Routes>
                      <Route path = "/" element = {<Home/>}/>
                      <Route path = "/services" element = {<Services/>}/>
                      <Route path = "/cars" element = {<Cars/>}/>
                      <Route path = "/about" element = {<About/>}/>
                      <Route path = "/blog" element = {<Blog/>}/>
                      <Route path = "/blog/:id" element = {<Singlepage/>}/>
                      <Route path = "/contacts" element = {<Contacts/>}/>
                      <Route path = "/cart" element = {<Cart/>}/>
                  </Routes>
                  <Footer/>
              </BrowserRouter>
          </div>
      </Context.Provider>
    
  );
}

export default App;
