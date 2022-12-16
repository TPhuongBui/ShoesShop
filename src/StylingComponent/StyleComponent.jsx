import React, { Component } from 'react'

import './StylingComponent.css';

import style from "./style.module.css";

export default class StyleComponent extends Component {


  render() {

    let objCSS = {
        color: "red",
        backgroundColor: "yellow"
    }

    return (
      <div>

        {/* Inline CSS */}
        <h1 style={objCSS} >Inline CSS</h1>
        <h1 style={{color: "red",backgroundColor: "yellow"}} >Inline CSS</h1>

        {/* external CSS  */}
        <h2 className='heading2'>external CSS</h2>


        {/* Module CSS */}
        <h3 className={style.heading3} >Demo module CSS</h3>
        <h3 className={style["heading-font"]} >Demo module CSS</h3>
        <h3 className={`${style["heading-font"]} ${style.heading3}`} >Demo module CSS</h3>
        
      </div>
    )
  }
}
