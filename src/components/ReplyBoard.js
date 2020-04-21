import React, { Component } from "react";
import withUserContext from "../hoc/withUserContext";

class ReplyBoard extends Component {
  render() {
    const { user, context } = this.props;
    const { removeQuestion } = context;

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
        <div className="button-group" role="group">
          <button type="button" onClick={() => context.showDialog(user.id)}>
            수정
          </button>
          <button
            type="button"
            className="remove"
            onClick={() => removeQuestion(user.id)}
          >
            {" "}
            제거{" "}
          </button>{" "}
        </div>
      </li>
    );
  }
}

export default withUserContext(ReplyBoard);
