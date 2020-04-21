import React, { Component } from "react";
import withUserContext from "../hoc/withUserContext";

class UserEditDialog extends Component {
  state = {
    id: "",
    cratedate: "",
    content: "",
    avtarUrl: "",
  };
  _prevQuestion = null;
  _updateState = (user) => {
    if (user !== this._prevQuestion) {
      this.setState({ ...user });
      this._prevQuestion = user;
    }
  };
  shouldComponentUpdate(nextProps) {
    this._updateState(nextProps.context.editingQuestion);
    return true;
  }
  render() {
    const { context, visibleClass } = this.props;
    const { editingQuestion } = context;
    return (
      <div
        role="dialog"
        className={`user-edit-dialog  ${visibleClass}`}
        aria-labelledby="dialog-headline"
      >
        <div className="container panel">
          <h2 id="dialog-headline">댓글 수정</h2>
          {!editingQuestion ? (
            <p>수정할 정보가 없습니다.</p>
          ) : (
            <form>
              <div className="form-control">
                <label className="label" htmlFor="name">
                  이름
                </label>
                <input
                  type="text"
                  id="name"
                  className="input"
                  value={this.state.id}
                  onChange={(e) => {
                    this.setState({
                      id: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="form-control">
                <label className="label" htmlFor="content">
                  내용
                </label>
                <input
                  type="text"
                  id="content"
                  className="input"
                  value={this.state.content}
                  onChange={(e) => {
                    this.setState({
                      content: e.target.value,
                    });
                  }}
                />
              </div>
              <div
                role="group"
                className="button-group"
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginRight: "-3px",
                }}
              >
                <button
                  type="submit"
                  className="button is-filled"
                  onClick={(e) => {
                    e.preventDefault();
                    context.editQuestion(editingQuestion.id, { ...this.state });
                    context.hideDialog();
                  }}
                >
                  확인
                </button>
                <button
                  type="reset"
                  className="button theme-dark"
                  onClick={() => {
                    context.hideDialog();
                  }}
                >
                  취소
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    );
  }
}
export default withUserContext(UserEditDialog);
