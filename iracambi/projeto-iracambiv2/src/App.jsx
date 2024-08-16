import './style.global.css';
import { Routes, Route } from "react-router-dom"


import Main from "./Components/Main.jsx"
import Cart from "./Components/Cart"
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import Conta from './Components/Conta.jsx';

function App() {


  return (
    <>

      <Header/>

      <Routes>

        <Route path="/" element={<Main />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Conta" element={<Conta />} />
        

      </Routes>

      <Footer/>


    </>
  )
}

export default App
