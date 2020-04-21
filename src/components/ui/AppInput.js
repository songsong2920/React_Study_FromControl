import React, { Component } from "react";
import { string, func } from "prop-types";
class AppInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: props.content || "",
    };
  }

  static propTypes = {
    label: string.isRequired,
    id: string.isRequired,
    onInput: func,
  };
  static defaultProps = {
    type: "text",
  };
  hadler = (e) => {
    const { onInput } = this.props;
    onInput && onInput(e);
  };

  render() {
    return (
      <div className="form-control">
        <label
          className="label"
          htmlFor={this.props.id}
          style={{ flexBasis: "4.0rem" }}
          {...this.props.labelProps}
        >
          {this.props.label}
        </label>
        <input
          className="input"
          id={this.props.id}
          type={this.props.type}
          {...this.props.inputProps}
          onChange={(e) => {
            this.hadler(e);
          }}
        />
      </div>
    );
  }
}

export default AppInput;
