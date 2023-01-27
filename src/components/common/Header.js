import { Link, NavLink } from "react-router-dom";
/*
NavLink
:객체를 이용해서 포커스 스타일 적용
:activeStyle="CSS객체" 이라는 props에 적용
: to="uri" props 는 필수 
*/

const Header = () => {
  const active = { color: "yellow" };
  return (
    <header>
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
            <NavLink to="/community">Community</NavLink>
          </li>
          <li>
            <NavLink to="/gallery">Gallery</NavLink>
          </li>
          <li>
            <NavLink to="/youtube">Youtube</NavLink>
          </li>
          <li>
            <NavLink to="/lacotion">Location</NavLink>
          </li>
          <li>
            <NavLink to="/join">Join</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
