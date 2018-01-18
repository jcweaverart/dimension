import React, { Component } from 'react';
import OneContent from './oneContent.js';

class SkillContent extends Component {

    

    constructor(props) {
        super(props);
        this.state = {
            sections: [ 
                {
                    headers: [
                        'FULLSTACK DEVELOPMENT', 
                        "DATABASE MANAGEMENT", 
                        "UI & UX DESIGN"
                    ]
                },
                {
                    text: [
                        "Our team specializes in custom software. We utilize the most efficient agile dev strategies to provide clients with the most robust software. We are skilled in Node, Python, Java and Ruby on Rails developement.",
                        "Although we work primarily out of MongoDB, we are very flexibe. We can set up, secure, and manage your databases for your software. We will give you the option of  POSTGRES, SQL, and NOSQL databases.",
                        "We are proud of our world class design and UX/UI team. We have  designed software for Tech Moguls around the globe. Our prefference is the Adobe Creative Suite in tangent with the latest front end web tech."
                    ]
                },
                {
                    image: [
                        require('../languages.png'),
                        require('../dbs.png'),
                        require('../languages2.png')
                    ]
                }
            ]
        };
        
    }

    render() {

        return (
            <div id="skillContent">
                <OneContent header={this.state.sections[0].headers[0]} text={this.state.sections[1].text[0]} image={this.state.sections[2].image[0]}/>
                <OneContent header={this.state.sections[0].headers[1]} text={this.state.sections[1].text[1]} image={this.state.sections[2].image[1]}/>
                <OneContent header={this.state.sections[0].headers[2]} text={this.state.sections[1].text[2]} image={this.state.sections[2].image[2]}/>
            </div>
        );
    }
}

export default SkillContent;

{/*
    VERSION 2 -FUTURE ATTEMPT AT MAPPING THIS

    const contents = this.state.sections;
    const contentMap = contents.map((somethin) => 
            <OneContent sectionHeader={this.state.sections[0].headers[1]} sectionText={contents[1].text[1]} sectionImage={contents[2].image[1]} />
        );
*/}
