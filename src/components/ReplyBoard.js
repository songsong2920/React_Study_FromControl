import React, { Component } from "react";
import UserContext from "../context/UserContext";

class ReplyBoard extends Component {
  static contextType = UserContext;
  render() {
    const { user } = this.props;
    const { removeQuestion } = this.context;

    return (
      <li className="commentary">
        {" "}
        <figure>
          {" "}
          <img className="avatar" src={user.avtarUrl} alt={user.id} />{" "}
          <figcaption>
            {" "}
            <strong> {user.id}</strong>
            <time> {user.cratedate}</time> <p> {user.content}</p>{" "}
          </figcaption>{" "}
        </figure>{" "}
        <button
          type="button"
          className="remove"
          onClick={() => removeQuestion(user.id)}
        >
          {" "}
          제거{" "}
        </button>{" "}
      </li>
    );
  }
}

export default ReplyBoard;
