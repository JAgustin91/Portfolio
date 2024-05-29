import "bootstrap/dist/css/bootstrap.min.css";
import "./Projects.css";
import "./CardsProjects.css";
import Aos from "aos";
import "aos/dist/aos.css";
import "boxicons";
import { CardsProjects } from "./CardsProjects";

const Projects = () => {
  Aos.init();
  return (
    <>
      <div
        className="container-fluid projects_container py-5 "
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="row d-flex justify-content-center">
          <h2 className="text-danger text-center fs-1 my-5">
            Últimos Proyectos
          </h2>
          <div className="d-flex justify-content-around align-items-center flex-wrap gap-5 text-center">
            <CardsProjects
              title="RollingBlog"
              img="RollingBlog.png"
              descriptionCard="Blog para estudiantes de Rolling Code: Este proyecto es un blog donde estudiantes de Rolling Code School pueden dejar sus inquietudes, ver noticias relacionadas con la programación y contactarse entre ellos."
              technologies="HTML | CSS | Bootstrap"
              year="2023"
              url="https://rollingblog.netlify.app/"
            />
            <CardsProjects
              title="RollingSports"
              img="RollingSports.png"
              descriptionCard="E-commerce de productos deportivos: RollingSports es una página realizada en conjunto con compañeros para promocionar artículos deportivos de varias marcas."
              technologies="HTML | CSS | Bootstrap | Javascript"
              url="https://rolling-sports.netlify.app/"
              year="2024"
              github="https://github.com/RollingDeportes/RollingSports"
            />
            <CardsProjects
              title="BurgerScript"
              img="BurgerScript.png"
              descriptionCard="App de venta de hamburguesas: Proyecto final realizado en colaboración con compañeros. Es una página donde se pueden comprar hamburguesas."
              technologies="HTML | CSS | bootstrap | Javascript | React | NodeJs | Express | MongoDB"
              url="https://burgerscript.netlify.app/"
              year="2024"
              github="https://github.com/grupo3rolling/FrontEnd-BurgerScript"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export { Projects };
