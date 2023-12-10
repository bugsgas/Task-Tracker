import { useParams } from "react-router-dom";

function ProjectDetail() {
  const { id } = useParams();

  return (
    <>
      <div className="container section project-detail">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title"> Project Title - {id} </span>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
              necessitatibus fugit blanditiis nesciunt incidunt similique sit
              corrupti. Tenetur delectus corporis mollitia voluptates officia
              itaque, saepe facilis incidunt expedita minima quae.
            </p>
          </div>
          <div className="card-action lighten-4 grey-text">
            <div className="">Posten by NN</div>
            <div className="">2nd September</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectDetail;
