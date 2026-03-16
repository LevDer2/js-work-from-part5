import React, { Component } from "react";
import styles from "./App.module.css";
import {Choice} from"./components/Choice/Choice"
import { StickerList } from "./components/StickerList/StickerList";

class App extends Component {
  state = {
    nameImg: "",
  };

  handleSelectedName = (label) => {
    this.setState({ nameImg: label });
  };

  render() {
    return (
      <div className={styles.app}>
        <h1 className={styles.title}>Sticker App Pigs</h1>

        <StickerList onSelected={this.handleSelectedName}/>

        {/* <div className={styles.box}>
          {stickers.map(({ img, label }, index) => {
            const isSelected = this.state.nameImg === label;

            return (
              <div
                key={index}
                className={`${styles.card} ${
                  isSelected ? styles.selected : ""
                }`}
                onClick={() => this.handleSelectedName(label)}
              >
                <img className={styles.image} src={img} alt={label} />
              </div>
            );
          })}
        </div> */}
        <Choice selected={this.state.nameImg} />
        {/* <h2 className={styles.message}>
          {this.state.nameImg
            ? `Ви обрали: ${this.state.nameImg}`
            : "Виберіть стикер та дізнайтесь його назву!"}
        </h2> */}
      </div>
    );
  }
}

export default App;