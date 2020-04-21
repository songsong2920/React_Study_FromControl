import React, { Component } from "react";
import QuestionsBoard from "./../components/QuestionsBoard";
import withUserContext from "../hoc/withUserContext";

class AppMain extends Component {
  render() {
    //console.log(this.props.context);
    const { users } = this.props.context;
    return (
      <main className="app-main">
        <h1 className="a11y-hidden">앱 메인 콘텐츠</h1>
        <QuestionsBoard user={users} />
      </main>
    );
  }
}

export default withUserContext(AppMain);
