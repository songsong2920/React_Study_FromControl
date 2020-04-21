import React, { Component } from "react";
import UserContext from "./../context/UserContext";

export default (Comp) => {
  return class withUserContext extends Component {
    static contextType = UserContext;
    render() {
      return <Comp {...this.props} context={this.context} />;
    }
  };
};
