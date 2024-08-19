import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Pages/About_Us/Header"
import About_Us from "./Components/Pages/About_Us/About_Us"
import Our from "./Components/Pages/About_Us/Our_Room"
import Footer from "./Components/Pages/About_Us/Footer"






export default function App() {
  return (
    <div>
      
      <Header/>
      <About_Us />
      <Our />
      <Footer />

      
      
    </div>
  )
}


