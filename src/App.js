import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Shop from './page/shop/shop';
import Cart from './page/cart/cart';
import ShopContextProvider from './Context/shopContext';


function App() {
  return (
    <div className='App'>
      <ShopContextProvider>
        <Router>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}
export default App;
