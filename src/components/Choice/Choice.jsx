import React, { Component } from "react";
import style from "./Choice.module.css";
export class Choice extends Component {
  render() {
    const { selected } = this.props;
    return (
      <h2 className={style.message}>
        {selected
          ? `Ви обрали: ${selected}`
          : "Виберіть стикер та дізнайтесь його назву!"}
      </h2>
    );
  }
}
