import React, { useEffect, useRef, useState } from "react";
//https://react-hook-form.com/
//npm install react-hook-form
//https://github.com/jquense/yup/tree/pre-v1
//npm install -S yup
//npm install @hookform/resolvers
import Layout from "../common/Layout";
import CommunityCard from "./CommunityCard";

//01.useForm import
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

//02. form 요소의 항목별 에러 체크
const schema = yup.object({
  title: yup.string().trim().required("제목을 입력해주세요."),
  content: yup.string().trim().required("내용을 입력해주세요."),
  timestamp: yup.string().required("날짜를 선택해 주세요"),
});

const Community = () => {
  //03. useForm 생성
  //register 각각의 form 의 name을 설정
  //handleSubmit : form 에서 onSubmit 할때 실행됨
  //reset : form에서 reset 할때 실행
  //formState:{errors} : yup 에러 출력 활용
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema), //yup과 연결시켜줌.
    mode: "onChange", //mode가 onChange면 실행
  });
  const initPost = [
    { title: "Hello 1", content: "Welocme To React!" },
    { title: "Hello 2", content: "Welocme To React!" },
    { title: "Hello 3", content: "Welocme To React!" },
    { title: "Hello 4", content: "Welocme To React!" },
    { title: "Hello 5", content: "Welocme To React!" },
  ];

  // 로컬에 저장된 내용을 가지고 온다.
  const getLocalPost = () => {
    const data = localStorage.getItem("post");
    if (data === null) {
      return [];
    } else {
      return JSON.parse(data);
    }
  };
  const [posts, setPosts] = useState(getLocalPost());

  const [Allowed, setAllowed] = useState(true);
  const createPost = (data) => {
    // data======> {title:title, content:content}
    setPosts([...posts, data]);
    //...register("title")
    //...register("content")
    reset(); //register를 비움

    setAllowed((prev) => true);
    setPosts((prev) => {
      const arr = [...prev];
      const updateArr = arr.map((item, index) => {
        item.enableUpdate = false;
        return item;
      });
      return updateArr;
    });
  };

  //삭제기능
  const deletePost = (idx) => {
    if (!window.confirm("정말 삭제하시겠습니까?")) {
      return;
    }
    setPosts(posts.filter((item, index) => idx !== index));
  };
  //업데이트 기능
  const enableUpdate = (idx) => {
    if (!Allowed) return;
    setAllowed(false);
    setPosts(
      posts.map((item, index) => {
        if (idx === index) {
          item.enableUpdate = true;
        }
        return item;
      })
    );
  };
  //업데이트취소
  const disableUpdate = (idx) => {
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
  const updatePost = (data) => {
    // if (!inputEdit.current.value.trim() || !textareaEdit.current.value.trim()) {
    //   inputEdit.current.value = "";
    //   textareaEdit.current.value = "";
    //   return alert("수정할 제목과 내용을 입력해주세요.");
    // }
    setPosts(
      posts.map((item, index) => {
        //숫자로 변경하여서 비교
        if (parseInt(data.index) === index) {
          item.title = data.title;
          item.content = data.content;
          item.timestamp = data.timestamp;
          item.enableUpdate = false;
        }
        return item;
      })
    );
    setAllowed(true);
  };

  // 로컬에 저장
  useEffect(() => {
    localStorage.setItem("post", JSON.stringify(posts));
  }, [posts]);

  return (
    <Layout title={"Community"}>
      {/* 입력폼 */}
      <div className="inputBox">
        <form onSubmit={handleSubmit(createPost)}>
          <input
            type="text"
            placeholder="제목을 입력하세요"
            {...register("title")}
          />
          <span className="err">{errors.title?.message}</span>
          <br />
          <textarea
            clols="30"
            rows="5"
            placeholder="본문을 입력하세요"
            {...register("content")}
          ></textarea>
          <span className="err">{errors.content?.message}</span>
          <br />
          <input type="date" {...register("timestamp")} />
          <span className="err">{errors.timestamp?.message}</span>
          <br />
          <div className="btnSet">
            {/* form 안쪽에 버튼은 type을 정의한다. type="button" */}
            <button type="reset">CANCEL</button>
            <button type="submit">WRITE</button>
          </div>
        </form>
      </div>
      {/* 리스트 출력 */}
      <div className="showBox">
        {/* 목록을 출력할 땐 map, key */}
        {
          // posts.map((item,index)=>(jsx));
          posts.map((item, index) => {
            return (
              <CommunityCard
                key={index}
                item={item}
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
