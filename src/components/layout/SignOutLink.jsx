import { NavLink } from "react-router-dom";

function SignedOutLink() {
  return (
    <>
      <ul className="right">
        <li>
          <NavLink to="/">Signup</NavLink>
        </li>
        <li>
          <NavLink to="/">Login</NavLink>
        </li>
      </ul>
    </>
  );
}

export default SignedOutLink;
