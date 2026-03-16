import React, { Component } from "react";
import style from "./Sticker.module.css";

export default class Sticker extends Component {
  handleOnClick = (label) => {
    const { onSelected } = this.props;
    onSelected(label);
  };
  render() {
    const { img, label, key } = this.props;
    return (
      <div
        key={key}
        onClick={() => this.handleOnClick(label)}
        className={style.card}
      >
        <img src={img} alt={label} className={style.image} />
      </div>
    );
  }
}
