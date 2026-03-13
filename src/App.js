import React, { Component } from "react";
import stickers from "./stickers.json";
import styles from "./App.module.css";

class App extends Component {
  state = {
    nameImg: "",
  };

  handleSelectedName = (label) => {
    this.setState({ nameImg: label });
  };

  render() {
    return (
      <div>
        <h1>Sticker App Pigs</h1>
        <div className={styles.box}>
          {stickers.map(({ img, label }, index) => {
            return (
              <div key={index} onClick={() => this.handleSelectedName(label)}>
                <img src={img} alt={label} />
              </div>
            );
          })}
        </div>
        <h2>
          {this.state.nameImg
            ? `Ви обрали: ${this.state.nameImg}`
            : "Вибереть стикер та дізнайтесь його назву!"}
        </h2>
      </div>
    );
  }
}

export default App;
