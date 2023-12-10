import { NavLink } from "react-router-dom";

function SignedInLink() {
  return (
    <>
      <ul className="right">
        <li>
          <NavLink to="/">New Project</NavLink>
        </li>
        <li>
          <NavLink to="/">Log Out</NavLink>
        </li>
        <li>
          <NavLink to="/" className="btn btn-floating pink light-1">
            NN
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default SignedInLink;
