
import React from "react";
import './App.css';
import { Header } from "./sections/header/Header";
import { BannerProfile } from "./sections/main/BannerProfile";
import { Projects } from "./sections/main/Projects";
import { FormContact } from "./sections/main/FormContact"

function App() {
  

  return (
    <>
     <body className="app_container">
     <header>
      <Header/>
     
     </header>
     <main>
      <BannerProfile/>
      <Projects/>
      <FormContact/>

     </main>
     <footer>

     </footer>
     </body>
    </>
  )
}

export default App
