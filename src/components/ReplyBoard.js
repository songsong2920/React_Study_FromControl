import React, { Component } from "react";

class ReplyBoard extends Component {
  hadleClick = (e) => {
    // console.log(e.target);
  };

  render() {
    const { user, handleRemoveQuestion } = this.props;

    return (
      <li className="commentary">
        {" "}
        <figure>
          {" "}
          <img className="avatar" src={user.avtarUrl} alt={user.id} />{" "}
          <figcaption>
            {" "}
            <strong> {user.id}</strong> <time> {user.cratedate}</time>{" "}
            <p> {user.content}</p>{" "}
          </figcaption>{" "}
        </figure>{" "}
        <button
          type="button"
          className="remove"
          onClick={() => handleRemoveQuestion(user.id)}
        >
          {" "}
          제거{" "}
        </button>{" "}
      </li>
    );
  }
}

export default ReplyBoard;
