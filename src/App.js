import React, { Component } from "react";
import QuestionsBoard from "./components/QuestionsBoard";
import "./App.css";

class App extends Component {
  // constructor(props) {
  //   super(props);

  //   this.handleclick = this.handleclick.bind(this);
  // }
  state = {
    user: [
      {
        id: "songsong09",
        cratedate: "2020-04-19",
        content:
          "props 전달 받는 컴포넌트 props 전달해야 정상적으로 렌더링 됩니다.",
        avtarUrl: "https://i.postimg.cc/HnPX4Gvx/image.jpg",
      },
      {
        id: "bahtsimpson",
        cratedate: "2020-03-01",
        content: "함수형 컴포넌트에서 this 키워드를 사용할 수 없습니다.",
        avtarUrl: "https://i.postimg.cc/Z5bgfjGr/image.png",
      },
      {
        id: "ryans081",
        cratedate: "2018-12-22",
        content: "이벤트 핸들링 this 대신 e.target으로 명시해야 됩니다.",
        avtarUrl: "https://i.postimg.cc/43MSxGm5/image.jpg",
      },
    ],
  };
  link = { color: "black", textDecoration: "none" };

  // class field를 사용해서 속성에 화살표 함수를 대입하고,
  // 내부에서 직접 바인딩 처리해준다.

  // 화살표 함수 방식으로 메서드를 정의하면 this가 참조 컴포넌트 인스턴스 가리키게 된다
  handleclick = (e) => {
    e.preventDefault();
    console.log(e.target);
    console.log(this); // this === App
    this.otherMember();
  };

  otherMember() {
    console.log("다른 것 호출 됨");
  }

  // 이벤트 핸들러의 인자 전달
  otherClassField = (title, e) => {
    e.preventDefault();
    console.log(`title ${title}`);
  };
  // removeId ,handleRemoveQuestion
  removeQuestion = (removeId) => {
    console.log("CallBack App Component", removeId);

    const userFilterResult = this.state.user.filter(
      (userInfo) => userInfo.id !== removeId
    );
    this.setState({ user: userFilterResult });
  };

  // filter extemple
  filterexmple() {
    const snacks = [
      "새우깡",
      "썬칩",
      "허니버터칩",
      "꿀꽈배기",
      "프링글스",
      "오감자",
    ];
    // 3자 이상인 글자
    const result = snacks.filter((snack) => snack.length > 3);
    console.log(result);
  }

  render() {
    const subtitle = "replay";

    return (
      <div className="app">
        <h1>
          <a
            style={this.link}
            href="https://codesandbox.io"
            lang="en"
            target="_blank"
            rel="noopener noreferrer"
            onClick={this.otherClassField.bind(this, subtitle)}
          >
            Questions Comment
          </a>
        </h1>
        <QuestionsBoard
          user={this.state.user}
          handleRemoveQuestion={this.removeQuestion}
        />
      </div>
    );
  }
}
export default App;
