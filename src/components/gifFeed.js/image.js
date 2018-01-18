import React from 'react';

const Image = props => {
    return (
        <div className="imgContainer">
            <img src={props.url} alt="gif-representation"/>
        </div>
    );
}

export default Image;