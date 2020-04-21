import React, { Component } from "react";
import UserContext from "./context/UserContext";
import AppHeader from "./layout/AppHeader";
import AppMain from "./layout/AppMain";
import UserEditDialog from "./components/UserEditDialog";
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
    isVisibleDialog: false,
    editingQuestion: null,
  };
  editQuestion = (editId, changeQuestion) => {
    const changeQuestions = this.state.user.map((userInfo) =>
      userInfo.id === editId ? changeQuestion : userInfo
    );
    this.setState({ user: changeQuestions });
  };
  removeQuestion = (removeId) => {
    console.log("CallBack App Component", removeId);

    const userFilterResult = this.state.user.filter(
      (userInfo) => userInfo.id !== removeId
    );
    this.setState({ user: userFilterResult });
  };
  showDialog = (userId) => {
    this.setState({
      isVisibleDialog: true,
      editingQuestion: this.state.user.find(
        (userInfo) => userInfo.id === userId
      ),
    });
  };

  hideDialog = () => {
    this.setState({
      isVisibleDialog: false,
      editingQuestion: null,
    });
  };

  render() {
    const { user, editingQuestion, isVisibleDialog } = this.state;
    return (
      <UserContext.Provider
        value={{
          users: user,
          editingQuestion,
          removeQuestion: this.removeQuestion,
          editQuestion: this.editQuestion,
          showDialog: this.showDialog,
          hideDialog: this.hideDialog,
        }}
      >
        <div className="app container">
          <AppHeader title="Board" />
          <AppMain />
          <UserEditDialog visibleClass={isVisibleDialog ? "is-active" : ""} />
        </div>
      </UserContext.Provider>
    );
  }
}
export default App;
