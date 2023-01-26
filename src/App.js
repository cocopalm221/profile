import { Route } from "react-router-dom";
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

function App() {
  return (
    <>
      <Header />
      {/* 화면별 Link에 의해 출력 될 단위 */}
      <Route exact path="/">
        <Visual />
        <Content />
      </Route>
      {/* 화면별 Link에 의해 출력 될 단위 */}
      <Route path="/department">
        <Department />
      </Route>

      {/* 인라인 방식의 Route 적용 */}
      <Route path="/department" component={Department} />
      <Route path="/community" component={Community} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/youtube" component={Youtube} />
      <Route path="/join" component={Join} />
      <Route path="/lacotion" component={Location} />

      <Footer />
    </>
  );
}

export default App;
