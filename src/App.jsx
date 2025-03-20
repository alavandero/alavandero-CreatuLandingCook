import Navbar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router"
import ItemDetailContainer from "./components/ItemDetailContainer"
import CartContainer from "./components/CartContainer"
import Checkout from "./components/Checkout"

function App  () {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="*" element={<div>Page does not exist</div>} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />  
        <Route path="/cart" element={<CartContainer />} /> 
        <Route path="/checkout" element={<Checkout />} />       
      </Routes>
    </BrowserRouter>  
  )
}


export default App;




