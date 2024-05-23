
import React from "react";
import './App.css';
import { Header } from "./sections/header/Header";
import { BannerProfile } from "./sections/main/BannerProfile";

function App() {
  

  return (
    <>
     <body className="app_container">
     <header>
      <Header/>
     
     </header>
     <main>
      <BannerProfile/>

     </main>
     <footer>

     </footer>
     </body>
    </>
  )
}

export default App
