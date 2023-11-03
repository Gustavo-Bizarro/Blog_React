
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import './App.css'

// contest
import { AuthProvider } from "./context/AuthContext"

// pages
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Register from "./pages/Register/Register"
import Login from "./pages/Login/Login"



function App() {
  return (
    <>
<AuthProvider>
<BrowserRouter>
    <Navbar />
<div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />  
      </Routes>
</div>
<Footer />
    </BrowserRouter>
</AuthProvider>
    
    </>
  )
}

export default App
