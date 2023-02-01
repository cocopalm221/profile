import React, { useEffect, useRef } from "react";

const Layout = (props) => {
  //useRef는 변수. 즉, state가 아니다.(html 태그 저장하는 용도)
  //useState()   state는 랜더링 변수/ state가 바뀌면 화면이 바뀐다.
  // useRef();
  //순서1.
  const frame = useRef(null);

  useEffect(() => {
    // frame useRef를 활용해서 section 태그를 참조해서 css 작업
    frame.current.classList.remove("on");
    frame.current.classList.add("on");
    return () => {
      //아래 구문은 에러가 발생
      //unmount 가 되면 참조요소가 null이 된다
      // frame.current.classList.remove("");
    };
  });

  return (
    //순서2.상위에 만들어둔 useRef 변수 frame을 ref속성으로 참조
    <section className={`content ${props.title}`} ref={frame}>
      <figure></figure>
      <div className="inner">
        <h1>{props.title}</h1>
        {props.children}
      </div>
    </section>
  );
};

export default Layout;
