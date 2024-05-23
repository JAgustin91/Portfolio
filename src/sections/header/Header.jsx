import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import Aos from "aos";
import 'aos/dist/aos.css';
import 'boxicons';

const Header = () => {
 
    Aos.init();


  return (
    <>
      <header className="bg">
        <div className="container-fluid vh-100 header_container">
          <div className="d-flex justify-content-end">     
            <div>
              <a type="button" className="bg-primary rounded-2 text-light p-2 mt-3 button_contact" href="#contactame">CONTÁCTAME</a>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="text-center" data-aos="fade-up" data-aos-duration="3000">
                <h1 className="text-danger header_margin-up">Welcome!</h1>
                <h2 className="text-light">
                  👋Hola, Soy Desarrollador WEB Fullstack
                </h2>
                <box-icon type="logo" name="linkedin-square" size="md" color="grey"></box-icon>
                <box-icon name="github" type="logo" size="md" color="grey"></box-icon>
                <box-icon name='gmail' type='logo' size="md" color="grey"></box-icon>
              </div>
              <div className="text-center" style={{ position: "absolute", bottom: "20px", left: "50%", transform: "translateX(-50%)" }}>
                <p className="text-light">Scroll Down</p>
                <box-icon type="solid" name="hand-down" size="sm" color="white" animation="fade-down"></box-icon>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export { Header };
