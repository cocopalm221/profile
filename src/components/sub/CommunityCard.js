import React from "react";

const CommunityCard = ({
  item,
  inputEdit,
  textareaEdit,
  disableUpdate,
  index,
  updatePost,
  enableUpdate,
  deletePost,
}) => {
  return (
    <>
      <article>
        {item.enableUpdate ? (
          // 업데이트일때 보여줄 jsx
          <>
            <div className="txt">
              <input
                type="text"
                defaultValue={item.title}
                placeholder="제목을 입력하세요."
                ref={inputEdit}
              />
              <br />
              <textarea
                cols="30"
                rows="5"
                defaultValue={item.content}
                placeholder="내용을 입력하세요."
                ref={textareaEdit}
              ></textarea>
            </div>
            <div className="btnSet">
              {/* 업데이트취소 */}
              <button onClick={() => disableUpdate(index)}>CANCEL</button>
              {/* 내용 업데이트 */}
              <button onClick={() => updatePost(index)}>SAVE</button>
            </div>
          </>
        ) : (
          // 목록일때 보여줄 jsx
          <>
            <div className="txt">
              <h2>{item.title}</h2>
              <p>{item.content}</p>
            </div>
            <div className="btnSet">
              {/* 업데이트기능 */}
              <button onClick={() => enableUpdate(index)}>EDIT</button>
              {/* 삭제기능 */}
              <button onClick={() => deletePost(index)}>DELETE</button>
            </div>
          </>
        )}
      </article>
    </>
  );
};

export default CommunityCard;
