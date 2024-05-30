import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import Aos from "aos";
import "aos/dist/aos.css";
import "boxicons";

const Header = () => {
  Aos.init();

  return (
    <>
      <header id="header">
        <div className="container-fluid vh-100 header_container">
          <div
            className="d-flex justify-content-end me-2"
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="3000"
          >
            <div className="d-flex flex-column">
              <a
                type="button"
                className="bg-danger rounded-2 text-light p-2 mt-3 button_contact"
                href="#contactame"
              >
                "CONTÁCTAME"
                <div className="text-center mt-2">
                  <box-icon
                    name="mail-send"
                    color="white"
                    size="lg"
                    animation="fade-right-hover"
                  ></box-icon>
                </div>
              </a>
              <div className="text-center mt-4"></div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div
                className="text-center"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <h1 className="text-danger mt-5 pt-5">¡Bienvenidos!</h1>
                <h2 className="text-light">
                  👋Soy "Javier Aguilar" Desarrollador WEB Fullstack
                </h2>
                <div>
                  <p className="text-secondary fs-3 FollowMe">- Sígueme: -</p>
                  <a
                    href="https://www.linkedin.com/in/javier-agustin-aguilar/"
                    target="_blank"
                  >
                    <box-icon
                      type="logo"
                      name="linkedin-square"
                      size="lg"
                      color="grey"
                      animation="tada-hover"
                    ></box-icon>
                  </a>
                  <a href="https://github.com/JAgustin91" target="_blank">
                    <box-icon
                      name="github"
                      type="logo"
                      size="lg"
                      color="grey"
                      animation="tada-hover"
                    ></box-icon>
                  </a>
                </div>
              </div>
              <div
                className="text-center"
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <p className="text-light">Scroll Down</p>
                <box-icon
                  type="solid"
                  name="hand-down"
                  size="sm"
                  color="white"
                  animation="fade-down"
                ></box-icon>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export { Header };
