import React, { Component, createRef } from "react";
import AppInput from "../components/ui/AppInput";

const styles = {
  fieldset: { border: 0 },
  file: {
    borderRadius: "3px",
    background: "rgba(255,255,255, 1)",
    padding: "1rem",
    color: "#4c0cd4",
  },
};

class AppForm extends Component {
  constructor(props) {
    super(props);
    //React.createRef()를 통해 Ref 생성 후,
    // 컴포넌트 인스턴스 속성에 참조
    this.fileInput = createRef();
  }
  state = {
    signInInfo: {
      name: "",
      pass: "",
      comment: "",
      role: "",
      roles: [],
    },
  };

  multiInputHandler = (e) => {
    const { signInInfo } = this.state;
    // 이벤트 타켓 객체로 부터 name, value 속성 구조 분해 할당
    let { name, value } = e.target;
    if (name === "roles") {
      // select > option 요소 수집 후 배열 데이터로 변경.
      const options = Array.from(e.target.children);
      // 사용자가 선택한 option 필터링
      const selectedOptions = options.filter((option) => option.selected);
      // 필터링 된 option.value 값을 아이템을 하는 새로운 배열 반환.
      value = selectedOptions.map((option) => option.value); // [value1, value2]
    }
    // 상태 업데이트
    this.setState({
      signInInfo: {
        ...signInInfo,
        [name]: value,
      },
    });
  };

  render() {
    return (
      <div className="app container">
        <form className="form-example">
          <fieldset style={styles.fieldset}>
            <legend className="h2">React From Control</legend>
            <AppInput
              id="user-name"
              label="이름"
              inputProps={{ name: "name" }}
              onInput={this.multiInputHandler}
            />
            <AppInput
              type="password"
              id="user-pass"
              label="패스워드"
              inputProps={{ name: "pass" }}
              onInput={this.multiInputHandler}
            />
            <div
              className="form-control"
              style={{ justifyContent: "flex-start" }}
            >
              <label
                className="label"
                htmlFor="user-role"
                style={{ paddingRight: "2.4rem" }}
              >
                공개
              </label>
              <select
                className="select"
                id="user-role"
                name="roles"
                multiple={true}
                value={this.state.roles}
                onChange={this.multiInputHandler}
              >
                <option value="">공개 여부를 설정해주세요.</option>
                <option value="pubilc">공개</option>
                <option value="private">비공개</option>
              </select>
            </div>
            <div className="form-control" aria-labelledby="user-comment">
              <p className="a11y-hidden" id="user-comment">
                내용을 입력 해주세요.
              </p>
              <textarea
                className="textarea resize-vertical"
                name="comment"
                cols="80"
                rows="10"
                onChange={this.multiInputHandler}
              />
            </div>
            <div className="form-control" style={styles.file}>
              <label className="label" htmlFor="user-upload">
                파일
              </label>
              <input
                type="file"
                className="input"
                id="user-upload"
                ref={this.fileInput}
                onChange={(e) => {
                  // console.log(this.fileInput.current);
                  const fileInput = this.fileInput.current;
                  console.log(fileInput.files[0].name);
                }}
                style={{ border: 0 }}
              />
            </div>
            <div
              className="button-group"
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <button type="submit" className="button">
                저장
              </button>
              <button type="reset" className="button">
                취소
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default AppForm;
