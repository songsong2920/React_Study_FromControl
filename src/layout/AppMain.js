import React, { Component } from "react";
import QuestionsBoard from "./../components/QuestionsBoard";
import UserContext from "./../context/UserContext";

class AppMain extends Component {
  static contextType = UserContext;
  render() {
    const { users } = this.context;
    return (
      <main className="app-main">
        <h1 className="a11y-hidden">앱 메인 콘텐츠</h1>
        <QuestionsBoard user={users} />
      </main>
    );
  }
}

export default AppMain;
