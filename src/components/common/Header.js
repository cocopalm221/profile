import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
  const active = { color: "yellow" };
  return (
    <header className={props.type}>
      <div className="inner">
        <h1>
          <Link to="/">Logo</Link>
        </h1>
        <ul id="gnb">
          <li>
            <NavLink activeStyle={active} to="/department">
              Department
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={active} to="/community">
              Community
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={active} to="/schedule">
              Schedule
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={active} to="/gallery">
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={active} to="/youtube">
              Youtube
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={active} to="/lacotion">
              Location
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={active} to="/join">
              Join
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={active} to="/login">
              Login
            </NavLink>
          </li>
        </ul>
        <FontAwesomeIcon icon={faBars} className="fa-bars" />
      </div>
    </header>
  );
};

export default Header;
