import "bootstrap/dist/css/bootstrap.min.css";
import "./CardsProjects.css";

const CardsProjects = (data) => {
  return (
    <>
      <div className="card_container py-4">
        <h5 className="card-title text-light mb-2">{data.title}</h5>
        <img src={data.img} alt={data.title} style={{ width: "18rem" }} />
        <div className="card-body">
          <p className="card-text text-secondary mt-3">
            {data.descriptionCard}
          </p>
          <hr />
          <p className="text-secondary">{data.technologies}</p>
          <p className="text-secondary">Año: {data.year}</p>
          <div className="d-flex justify-content-center gap-2">
            <a
              href={data.github}
              target={data.target}
              className="btn btn-primary mt-1"
            >
              Ver código
            </a>
            <a
              href={data.url}
              target={data.target}
              className="btn btn-primary mt-1"
            >
              Ir a la web
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export { CardsProjects };
