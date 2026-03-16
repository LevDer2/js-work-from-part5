import React, { Component } from "react";
export class Choice extends Component{
 




  render() {
      const {selected} = this.props
        return (
          <h2 >
            {selected
              ? `Ви обрали: ${selected}`
              : "Виберіть стикер та дізнайтесь його назву!"}
          </h2>
        );
        
    }
}