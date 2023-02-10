import React, { useEffect, useRef, useState } from "react";
import Layout from "../common/Layout";
import CommunityCard from "./CommunityCard";

const Community = () => {
  // 데모용 데이터 생성
  const initPost = [
    { title: "Hello 1", content: "Welocme To React!" },
    { title: "Hello 2", content: "Welocme To React!" },
    { title: "Hello 3", content: "Welocme To React!" },
    { title: "Hello 4", content: "Welocme To React!" },
    { title: "Hello 5", content: "Welocme To React!" },
  ];
  //출력 목록 관리 state
  const [posts, setPosts] = useState(initPost);

  const input = useRef(null);
  const contents = useRef(null);
  const inputEdit = useRef(null);
  const textareaEdit = useRef(null);

  //업데이트는 한개만 가능하도록
  const [Allowed, setAllowed] = useState(true);

  const createPost = () => {
    //앞자리 및 뒷자리 공백을 제거하기 위해 trim()사용
    if (input.current.value === "" || contents.current.value === "") {
      resetPost();
      return alert("제목과 본문을 입력하세요.");
    }
    //새로운 포스트 등록
    //state 업데이트라서 화면 갱신
    setPosts([
      ...posts,
      { title: input.current.value, content: contents.current.value },
    ]);
    //입력 저장후 초기화
    resetPost();
    //연속으로 setState를 진행하면 1번만 된다.
    //연속으로 setState를 하려면 prev 콜배함수를 활용
    //업데이트 가능
    // setAllowed((prev) => {return true});
    setAllowed((prev) => true);
    // 모든 목록 닫아주기
    setPosts((prev) => {
      const arr = [...prev];
      const updateArr = arr.map((item, index) => {
        item.enableUpdate = false;
        return item;
      });
      return updateArr;
    });
  };
  const resetPost = () => {
    input.current.value = "";
    contents.current.value = "";
  };
  //삭제기능
  const deletePost = (idx) => {
    if (!window.confirm("정말 삭제하시겠습니까?")) {
      return;
    }
    //idx와 동일한 순서값을 찾아서 state 업데이트
    //배열.filter는 조건에 맞는
    //즉, true 배열에 담고, false 면 제외하고
    //새로운 배열을 돌려준다.
    setPosts(posts.filter((item, index) => idx !== index));
  };
  //업데이트 기능
  const enableUpdate = (idx) => {
    // 1개만 업데이트 가능하도록 처리
    if (!Allowed) return;
    //토글 시켜준다.
    setAllowed(false);

    //배열들 중에 idx에 해당하는
    //1개만 편집이 가능하다고 설정
    //posts State중에 1개를 설정한다
    setPosts(
      posts.map((item, index) => {
        if (idx === index) {
          //편집이 가능해요라고 설정하는 키 생성
          item.enableUpdate = true;
        }
        return item;
      })
    );
  };
  //업데이트취소
  const disableUpdate = (idx) => {
    //업데이트 가능하도록 다시 true로 토글
    setAllowed(true);
    setPosts(
      posts.map((item, index) => {
        if (index === idx) {
          item.enableUpdate = false;
        }
        return item;
      })
    );
  };
  //내용업데이트
  const updatePost = (idx) => {
    //빈문자열 체크
    if (!inputEdit.current.value.trim() || !textareaEdit.current.value.trim()) {
      inputEdit.current.value = "";
      textareaEdit.current.value = "";
      return alert("수정할 제목과 내용을 입력해주세요.");
    }
    setPosts(
      posts.map((item, index) => {
        if (idx === index) {
          item.title = inputEdit.current.value;
          item.content = textareaEdit.current.value;
          item.enableUpdate = false;
        }
        return item;
      })
    );
    //업데이트 가능하도록
    setAllowed(true);
  };
  //디버깅
  useEffect(() => {
    console.log(posts);
  }, [posts]);
  return (
    <Layout title={"Community"}>
      {/* 입력폼 */}
      <div className="inputBox">
        <form>
          <input type="text" placeholder="제목을 입력하세요" ref={input} />
          <br />
          <textarea
            clols="30"
            rows="5"
            placeholder="본문을 입력하세요"
            ref={contents}
          ></textarea>
          <div className="btnSet">
            {/* form 안쪽에 버튼은 type을 정의한다. type="button" */}
            <button type="button" onClick={resetPost}>
              CAMCEL
            </button>
            <button type="button" onClick={createPost}>
              WRIGHT
            </button>
          </div>
        </form>
      </div>
      {/* 리스트 출력 */}
      <div className="showBox">
        {/* 목록을 출력할 땐 map, key */}
        {
          // posts.map((item,index)=>(jsx));
          posts.map((item, index) => {
            //uuid:https://www.npmjs.com/package/uuid
            //중복되지않는 key를 만들어주는 라이브러리
            //그러나 기본은 가능하면 본인이 key를 관리
            return (
              <CommunityCard
                key={index}
                item={item}
                inputEdit={inputEdit}
                textareaEdit={textareaEdit}
                disableUpdate={disableUpdate}
                index={index}
                updatePost={updatePost}
                enableUpdate={enableUpdate}
                deletePost={deletePost}
              />
            );
          })
        }
      </div>
    </Layout>
  );
};

export default Community;
