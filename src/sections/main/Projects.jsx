import 'bootstrap/dist/css/bootstrap.min.css';
import './Projects.css';
import './CardsProjects.css';
import Aos from "aos";
import 'aos/dist/aos.css';
import 'boxicons';
import { CardsProjects } from './CardsProjects';






const Projects = () => {
    Aos.init();
    return (
        <>
        <div className='container-fluid projects_container py-5 ' data-aos="fade-up"
            data-aos-duration="3000">
            <div className='row d-flex justify-content-center'>
            <h2 className="text-danger text-center fs-1 my-5">Mis Proyectos</h2>
            <div className="d-flex justify-content-around align-items-center flex-wrap gap-5 text-center">
                <CardsProjects/>
            </div>
            </div>
        </div>
        </>
    );
};

export { Projects };