import React, { useState } from "react";
import Layout from "../common/Layout";

//https://projects.wojtekmaj.pl/react-calendar/
//npm install react-calendar
//https://www.npmjs.com/package/moment
//npm install moment --save
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // css import
//날짜 관련 라이브러리
import moment from "moment/moment";
//한글로 출력하게 해줌
import "moment/locale/ko";

const Schedule = () => {
  //로컬 정보 호출
  const getLocalPost = () => {
    const data = localStorage.getItem("post");
    if (data === null) {
      return [];
    } else {
      return JSON.parse(data);
    }
  };
  const [todoData, setTodoData] = useState(getLocalPost);
  // 선택된 날짜.
  const [date, setDate] = useState(new Date());
  //이미지 출력
  const publicFolder = process.env.PUBLIC_URL;

  return (
    <Layout title={"Schedule"}>
      <Calendar
        //일요일부터 출력
        calendarType="US"
        //날짜 선택시 날짜변경
        onChange={setDate}
        //달력에 출력된 html 작성
        tileContent={({ date, view }) => {
          let html = [];
          //각각의 날짜 영역에 출력하고 싶은 내용을 작성
          if (
            todoData.find((item, index) => {
              //현재 date는 포맷이 다르다.
              return item.timestamp === moment(date).format("YYYY-MM-DD");
            })
          ) {
            //조건에 맞으므로 html을 생성해 준다.
            html.push(
              <img
                key={`todoData${moment(date)}`}
                src={`${publicFolder}/images/starbucks.png`}
                alt="아이콘"
                style={{ width: 20, height: 20 }}
              />
            );
          }
          return <div>{html}</div>;
        }}
      />
      {/* 상세 정보 내역 출력 */}
      <div className="calender-detail">
        {todoData && (
          <div className="calender-detail__item">
            <div className="calender-detail__title">
              <img
                src={`${publicFolder}/images/starbucks.png`}
                alt="스타벅스"
                className="calender-detail__icon"
                style={{ width: 20, height: 20 }}
              />
              방문한날
            </div>
            <div className="calender-detail__date-wrap">
              {todoData.map((item, index) => item.title)}
            </div>
          </div>
        )}
      </div>
      <div>{moment(date).format("YYYY년 MM월 DD일")}</div>
      <div>{todoData.map((item, index) => item.title)}</div>
    </Layout>
  );
};

export default Schedule;
