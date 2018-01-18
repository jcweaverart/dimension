import React from "react";

    const SectionHead = props => {
        return (
            <div className={props.class}>
                <img src={props.image} alt="subHead image"/>
                <h1> {props.text} </h1>
            </div>
        );
    }
    
export default SectionHead;