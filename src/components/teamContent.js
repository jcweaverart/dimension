import React, { Component } from 'react';
import TeamMate from './teamMember.js';

class TeamContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            teamMates: [
                {
                    Minah: [
                        require('../minah.png'),
                        'MINAH',
                        'Project Manager'
                    ]
                },
                {
                    Steve: [
                        require('../steve.png'),
                        'STEVE',
                        'UX Designer'
                    ]
                },
                {
                    Tina: [
                        require('../tina.png'),
                        'TINA',
                        'Marketing'
                    ]
                },
                {
                    Bill: [
                        require('../bill.png'),
                        'BILL',
                        'Developer'
                    ]
                },
                {
                    Joseph: [
                        require('../joseph.png'),
                        'JOSEPH',
                        'Dev Ops'
                    ]
                },
                {
                    Edward: [
                        require('../edward.png'),
                        'EDWARD',
                        'Security'
                    ]
                },
                {
                    Judy: [
                        require('../judy.png'),
                        'JUDY',
                        'Data Architect'
                    ]
                },
                {
                    Barack: [
                        require('../barack.png'),
                        'BARACK',
                        'UI Design'
                    ]
                },
            ]
        };
    }

    render() {

        const person = this.state.teamMates;

        return (
            <div className="teamContent">
                <div id="design-lead">
                    <img src={require('../design-lead.png')} alt="design-lead"/>
                    <h1> JORDAN </h1>
                    <p> Head of Design </p>
                </div>
                <div id="team-intro">
                    <h1> FOUNDERS </h1>
                    <p> Jackson & Jordan founded this company late in 2016 after a few projects together proved how well their individual talents complemented each other. They had been dope ass broz for years and realized they could be dope ass work broz as well. They hired a few bitchass underlings because they were so popular.</p>
                    <h2 id="team-header"> UNDERLINGS </h2>
                </div>
                <div id="dev-lead">
                    <img src={require('../dev-lead.png')} alt="design-lead"/>
                    <h1> JACKSON </h1>
                    <p> Head of Development </p>
                </div>
                <TeamMate image={person[0].Minah[0]} name={person[0].Minah[1]} job={person[0].Minah[2]}/>
                <TeamMate image={person[1].Steve[0]} name={person[1].Steve[1]} job={person[1].Steve[2]}/>
                <TeamMate image={person[2].Tina[0]} name={person[2].Tina[1]} job={person[2].Tina[2]}/>
                <TeamMate image={person[3].Bill[0]} name={person[3].Bill[1]} job={person[3].Bill[2]}/>
                <TeamMate image={person[4].Joseph[0]} name={person[4].Joseph[1]} job={person[4].Joseph[2]}/>
                <TeamMate image={person[5].Edward[0]} name={person[5].Edward[1]} job={person[5].Edward[2]}/>
                <TeamMate image={person[6].Judy[0]} name={person[6].Judy[1]} job={person[6].Judy[2]}/>
                <TeamMate image={person[7].Barack[0]} name={person[7].Barack[1]} job={person[7].Barack[2]}/> 
            </div>
        );
    }
}

export default TeamContent;