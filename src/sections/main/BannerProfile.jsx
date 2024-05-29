import "bootstrap/dist/css/bootstrap.min.css";
import "./BannerProfile.css";
import Aos from "aos";
import "aos/dist/aos.css";
import "boxicons";
import Profile from "../../assets/images/My-Profile.png";

const BannerProfile = () => {
  Aos.init();

  return (
    <>
      <div
        className=" text-center container  my-5  profile_container"
        data-aos="zoom-in-up"
      >
        <div className="row">
          <div className="col">
            <div
              className="text-center mt-2 ms-2"
              data-aos="zoom-in"
              data-aos-duration="3000"
            >
              <h2 className="text-danger fs-1">¡Acerca de mí!</h2>
              <p className="text-secondary border-danger text-align">
                Soy un apasionado aprendiz de desarrollo Full Stack MERN. Con
                certificado en Rolling Code School y Alura Latam, tengo sólidos
                conocimientos en HTML, JavaScript, Bootstrap, CSS, React, Node y
                Express. Además, cuento con habilidades en Git y GitHub para
                gestionar proyectos de manera eficiente. 💼 Busco oportunidades
                para aplicar mis habilidades técnicas y colaborativas. Mi
                enfoque combina la funcionalidad del desarrollo con la empatía y
                comprensión del usuario para crear experiencias digitales
                significativas y efectivas. 💪🏻 Siempre estoy dispuesto a
                aprender y crecer, ¡así que no dudes en contactarme para
                colaboraciones o para discutir ideas innovadoras!
              </p>
              <h3 className="text-light">Mis Habilidades</h3>
              <div className="mb-2">
                <box-icon
                  type="logo"
                  name="html5"
                  size="lg"
                  color="grey"
                ></box-icon>
                <box-icon
                  name="css3"
                  type="logo"
                  size="lg"
                  color="grey"
                ></box-icon>
                <box-icon
                  name="javascript"
                  type="logo"
                  size="lg"
                  color="grey"
                ></box-icon>
                <box-icon
                  name="react"
                  type="logo"
                  size="lg"
                  color="grey"
                ></box-icon>
                <box-icon
                  name="nodejs"
                  type="logo"
                  size="lg"
                  color="grey"
                ></box-icon>
                <box-icon
                  name="mongodb"
                  type="logo"
                  size="lg"
                  color="grey"
                ></box-icon>
                <box-icon
                  name="git"
                  type="logo"
                  size="lg"
                  color="grey"
                ></box-icon>
                <box-icon
                  name="github"
                  type="logo"
                  size="lg"
                  color="grey"
                ></box-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { BannerProfile };
