import { Route, Switch } from "react-router-dom";
//common
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
//main
import Content from "./components/main/Content";
import Visual from "./components/main/Visual";
//sub
import Department from "./components/sub/Department";
import Community from "./components/sub/Community";
import Gallery from "./components/sub/Gallery";
import Youtube from "./components/sub/Youtube";
import Join from "./components/sub/Join";
import Location from "./components/sub/Location";
import Schedule from "./components/sub/Schedule";
import Login from "./components/sub/Login";
import Logout from "./components/sub/Logout";

function App() {
  
  return (
    <>
      {/* 화면에 중첩되는 컴포넌트가 있는 경우 Switch를 활용한다. */}
      <Switch>
        <Route exact path="/">
          {/* 라우터 값에 따라서 header props로 type="main" 전달 */}
          <Header type={"main"} />
          <Visual />
          <Content />
        </Route>

        {/* 라우터에 따라서 header의 css를 다르게 함 */}
        {/* 중첩되는 header에 대한 처리가 필요함 */}
        {/* <header type={"sub"} /> */}
        <Route path="/" render={() => <Header type={"sub"} />} />
      </Switch>

      <Route path="/department" component={Department} />
      <Route path="/community" component={Community} />
      <Route path="/schedule" component={Schedule} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/youtube" component={Youtube} />
      <Route path="/lacotion" component={Location} />
      <Route path="/join" component={Join} />
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />

      <Footer />
    </>
  );
}

export default App;
