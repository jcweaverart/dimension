import React, { Component } from 'react';

class Divider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            greeting: "Hello"
        };
        this.frenchify = this.frenchify.bind(this);
    }

    frenchify() {
        this.setState({ greeting: "Bonjour"});
    }
 
    render (props) {

        return (
            <div className="divider">
               { /* {this.state.greeting} {this.props.name} <br/> <button onClick= {this.frenchify}> Frenchify </button> */}
            </div>
        );
    }
}


export default Divider;