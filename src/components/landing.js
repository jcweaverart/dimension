import React, { Component } from 'react';

class Landing extends Component {
    render(props) {
        return (
            <main> 
                
                <header></header>

                <nav> 
                  <img id="logo" src={require('../logo-01.png')} alt="dimension logo"/>
                  <ul>
                    <li><a href="../App.js"> Home </a> </li>
                    <li><a href="../App.js"> About </a> </li>
                    <li><a href="../App.js"> Contact </a> </li>
                    <li><a href="../App.js"> Team </a> </li>
                  </ul>
                </nav>
                
                <h1 className="mainHeader">A <span> NEW </span> DIMENSION OF WEB DESIGN</h1>
                
                <p id="subHead"> modernize your website in the new year </p>
                
                <img id="toolsgroup" src={require("../toolsgroup-01.png")} alt="web tools"/>
                
                <div id="nextContent">
                  <p> Let's start building your website! </p>
                  <img className="downArrow" src= {require("../arrow.png")} alt="directional arrow"/>
                </div>

              </main>
        );
    }
}

export default Landing;