import React, { Component } from "react";
import stickers from "../../stickers.json"
export class StickerList extends Component{

handleClick = (label)=> {
    const {onSelected} = this.props
    onSelected (label)
}

render(){
    return <div>
              {stickers.map(({ img, label }, index) => {
                
    
                return (
                  <div
                    key={index}
                    
                    onClick={() => this.handleClick(label)}
                  >
                    <img src={img} alt={label} />
                  </div>
                );
              })}
            </div>
}



}