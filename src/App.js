import React, { Component } from "react";
import UserContext from "./context/UserContext";
import AppHeader from "./layout/AppHeader";
import AppMain from "./layout/AppMain";
import "./App.css";

class App extends Component {
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

  handleclick = (e) => {
    e.preventDefault();
    console.log(e.target);
    console.log(this); // this === App
    this.otherMember();
  };

  otherMember() {
    console.log("다른 것 호출 됨");
  }

  removeQuestion = (removeId) => {
    console.log("CallBack App Component", removeId);

    const userFilterResult = this.state.user.filter(
      (userInfo) => userInfo.id !== removeId
    );
    this.setState({ user: userFilterResult });
  };

  render() {
    return (
      <UserContext.Provider
        value={{
          users: this.state.user,
          removeQuestion: this.removeQuestion,
        }}
      >
        <div className="app">
          <AppHeader title="Board" />
          <AppMain />
        </div>
      </UserContext.Provider>
    );
  }
}
export default App;
