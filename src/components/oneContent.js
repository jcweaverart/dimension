import React from "react";

    const OneContent = props => {
        return (
            <div className="oneContent">
                <img src={props.image} alt="content-image"/>
                <h1> {props.header} </h1>
                <p> {props.text} </p>
            </div>
        );
    }

export default OneContent;