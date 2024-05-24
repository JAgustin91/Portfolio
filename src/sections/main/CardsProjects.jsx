import "bootstrap/dist/css/bootstrap.min.css";
import "./CardsProjects.css";
import RollingBlog from "../../assets/images/RollingBlog.png";
import RollingSports from "../../assets/images/RollingSports.png";
import BurgerScript from "../../assets/images/BurgerScript.png";

const CardsProjects = () => {
  return (
    <>
      <div className="card_container py-4">
        <h5 className="card-title text-light mb-2">RollingBlog</h5>
        <img
          src={RollingBlog}
          alt="RollingBlog: Blog para estudiantes de RollingCode"
          style={{ width: "18rem" }}
        />
        <div className="card-body">
          <p className="card-text text-secondary mt-3">
            Blog para estudiantes de RollingCode
          </p>
          <a
            href="https://rollingblog.netlify.app/"
            target="_blank"
            className="btn btn-primary mt-1"
          >
            Ir a la web
          </a>
        </div>
      </div>

      <div className="card_container py-4">
        <h5 className="card-title text-light mb-2">RollingSports</h5>
        <img
          src={RollingSports}
          alt="RollingSports: E-commerce de productos deportivos"
          style={{ width: "18rem" }}
        />
        <div className="card-body">
          <p className="card-text text-secondary mt-3">
            E-commerce de productos deportivos
          </p>
          <a
            href="https://rolling-sports.netlify.app/"
            target="_blank"
            className="btn btn-primary mt-1"
          >
            Ir a la web
          </a>
        </div>
      </div>

      <div className="card_container py-4">
        <h5 className="card-title text-light mb-2">BurgerScript</h5>
        <img
          src={BurgerScript}
          alt="BurgerScript: App de venta de hamburguesas"
          style={{ width: "18rem" }}
        />
        <div className="card-body">
          <p className="card-text text-secondary mt-3">
            App de venta de hamburguesas
          </p>
          <a
            href="https://burgerscript.netlify.app/"
            target="_blank"
            className="btn btn-primary mt-1"
          >
            Ir a la web
          </a>
        </div>
      </div>
    </>
  );
};

export { CardsProjects };
