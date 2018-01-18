import React, { Component } from 'react';
import Landing from './components/landing.js';
import Divider from './components/divider.js';
import SectionHead from './components/sectionHead.js';
import SkillContent from './components/skillContent.js';
import BigDivider from './components/bigDivider.js';
import WorkContent from './components/workContent.js';
import TeamContent from './components/teamContent.js';
import ContactContent from './components/contactContent.js';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dividers: {
        divider1: [
          'ONE STOP SHOP FOR SOFTWARE',
          'ONE STOP SHOP FOR WEBSITES',
          'ONE STOP SHOP FOR MOBILE',
          'ONE STOP SHOP FOR DESIGN',
          'ONE STOP SHOP FOR YOU'
        ],
        divider2: [
          'OUR TEAM WILL RESPOND IMEDIATELY',
          'OUR TEAM WILL DEBUG EVERYTHING',
          'OUR TEAM WILL DESIGN DELIBERATELY',
          'OUR TEAM WILL REMAIN ACCESSIBLE',
          'OUR TEAM WILL APPLY FEEDBACK'
        ],
        divider3: [
          'CONTACT US FOR DEV QUESTIONS',
          'CONTACT US FOR NEW UPDATES',
          'CONTACT US FOR PROJECT HELP',
          'CONTACT US FOR REMOTE ASSISTANCE',
          'CONTACT US FOR CONTENT MANAGEMENT'
        ]
      },
      dividerR: {
        top: [
          "WE DO", 
          "EVERYTHING"
        ],
        mid: [
          "ALWAYS",
          "RELIABLE"
        ],
        bottom: [
          "COMPLETELY",
          "DEDICATED"
        ]
      },
      dividerIDs: {
        blue: "big-divider-blue",
        purple: "big-divider-purple",
        green: "big-divider-green"
      },
      subHead: {
        classes: ['work', 'team', 'skills', 'contact'],
        image: [require('./img/coffee.png'), require('./img/tools.png'), require('./img/mactool.png')],
        text: ['OUR SKILLS', 'OUR WORK', 'OUR TEAM', 'CONTACT US']
      }
    };
  }

  componentDidMount() {
    fetch('https://api.giphy.com/v1/gifs/trending?api_key=rVrCPjpMYDw5yOUU0yAwSDWCrItswtaq&limit=25&rating=G')
    .then( response => response.json())
    .then(responseData => this.setState({gifs: responseData.data}))
    .catch(error => console.log("failure fetching data", error))
  };

  render() {
    return (
      <div>
        <div className="grid">
          <Landing/>
          <div id="topFiller"> </div>
          <SectionHead class={this.state.subHead.classes[2]} image={this.state.subHead.image[0]} text={this.state.subHead.text[0]}/>
          <SkillContent/> 
        </div>

        <BigDivider points={this.state.dividers.divider1} id={this.state.dividerIDs.blue} foo={this.state.dividerR.top[0]} bar={this.state.dividerR.top[1]}/>
        <SectionHead class={this.state.subHead.classes[0]} image={this.state.subHead.image[2]} text={this.state.subHead.text[1]}/>
        <WorkContent />
        <BigDivider points={this.state.dividers.divider2} id={this.state.dividerIDs.purple} foo={this.state.dividerR.mid[0]} bar={this.state.dividerR.mid[1]}/>
        <SectionHead class={this.state.subHead.classes[1]} image={this.state.subHead.image[1]} text={this.state.subHead.text[2]}/>
        <TeamContent />
        <BigDivider points={this.state.dividers.divider3} id={this.state.dividerIDs.green} foo={this.state.dividerR.bottom[0]} bar={this.state.dividerR.bottom[1]}/>
        <SectionHead class={this.state.subHead.classes[3]} image={this.state.subHead.image[0]} text={this.state.subHead.text[3]}/>
        <ContactContent />
      </div>
    );
  }
}

export default App;
