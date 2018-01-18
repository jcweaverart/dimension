import React from 'react';

const TeamMate = props => {
    return (
        <div id={props.name} class="underling">
            <img src={props.image} alt="underling-image"/>
            <h1> {props.name} </h1>
            <p> {props.job} </p>
        </div>
    );
}

export default TeamMate;