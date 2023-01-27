import { Link } from "react-router-dom";
/*
a 태그 href를 이용하면 페이지갱신(mpa)
Link 컴포넌트를 이용하면 컴포넌트 갱신(spa)
:a태그로 자동변환이 된다. 
:to="uri"라는 props가 필요하다.
*/

const Header = () => {
  return (
    <header>
      <div className="inner">
        <h1>
          <Link to="/">logo</Link>
        </h1>
        <ul id="gnb">
          <li>
            <Link to="/department">Department</Link>
          </li>
          <li>
            <Link to="/community">Community</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/youtube">Youtube</Link>
          </li>
          <li>
            <Link to="/lacotion">Location</Link>
          </li>
          <li>
            <Link to="/join">Join</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
