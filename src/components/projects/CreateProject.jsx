import React, { useState } from "react";

function CreateProject() {
  const [state, setState] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <>
      <div className="container">
        <form className="white" onSubmit={handleSubmit}>
          <h5 className="grey-text text-darken-3"> Create Project</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Content</label>
            <input type="text" id="content" onChange={handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateProject;
