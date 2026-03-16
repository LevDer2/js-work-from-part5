import React, { Component } from "react";
import stickers from "../../stickers.json";
import style from "./StickerList.module.css";
import Sticker from "../Sticker/Sticker";

export class StickerList extends Component {
  // handleClick = (label) => {
  //   const { onSelected } = this.props;
  //   onSelected(label);
  // };
  render() {
    const {onSelected} = this.props
    return (
      <div className={style.box}>
        {stickers.map(({ img, label }, index) => {
          return (
            // <div key={index} className={style.card} onClick={() => this.handleClick(label)}>
            //   <img src={img} alt={label} className={style.image}/>
            // </div>
            <Sticker
              key={index}
              img={img}
              label={label}
              // handleClick={this.handleClick}
              onSelected={onSelected}
            />
          );
        })}
      </div>
    );
  }
}
