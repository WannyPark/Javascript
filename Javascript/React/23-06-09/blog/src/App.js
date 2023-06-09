// import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [head, setHead] = useState(['남자 코트 추천', '여자 코드 추천', '베스트 코트']);
  const [like, setLike] = useState(0);

  function clickLike() {
    setLike(like + 1);
  }
  function clickNext() {
    const copy = [...head];
    copy[0] = '여자 코트 추천';
    setHead([...copy]);
  }
  function clickSort() {
    const copy = [...head];
    copy.sort();
    setHead(copy);
  }

  return (
    <div className="App">

      <div className="black-nav">
        <h4>블로그</h4>
      </div>

      <button className="sort" onClick={clickSort}>정렬</button>
      <button className="next" onClick={clickNext}>제목 변경</button>

      <div className="list">
        <h4>{head[0]} <span className="likeBtn" onClick={clickLike}>👍</span> <span>{like}</span></h4>
        <p>6월 9일</p>
      </div>

      <div className="list">
        <h4>{head[1]}</h4>
        <p>6월 9일</p>
      </div>

      <div className="list">
        <h4>{head[2]}</h4>
        <p>6월 9일</p>
      </div>

      <Modal></Modal>

    </div>
  );
}
// 컴포넌트 component
function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;