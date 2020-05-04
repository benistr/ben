import React, { Component } from 'react';
import './resume.scss';
import './training.scss';
import './skills.scss';
import Brain from './brain.png';
import Tools from './tools.png';
import Suitcase from './suitcase.png';
import Heart from './heart.png';
import CSS from './css.png';
import HTML from './html.png';
import JS from './js.png';
import NODE from './node.png';
import PHP from './php.png';
import REACT from './react.png';
import SQL from './sql.png';
import Camera from './camera.png';
import Gamepad from './gamepad.png';
import Music from './music.png';
import Plane from './paper-plane.png';
import Computer from './computer.png';
import Lightbulb from './lightbulb.png';

class Resume extends Component {
    constructor(props)  {
        super(props)
        this.toggleTraining = this.toggleTraining.bind(this)
        this.toggleSkills = this.toggleSkills.bind(this)
        this.toggleWork = this.toggleWork.bind(this)
        this.toggleInterests = this.toggleInterests.bind(this)
        this.state = {
            showTraining: false,
            showSkills: false,
            showWork: false,
            showInterests: false,
        }
    }

    toggleTraining(event) {
        event.preventDefault()
        this.setState({
            showTraining: !this.state.showTraining,
        })
    }

    toggleSkills(event) {
        event.preventDefault()
        this.setState({
            showSkills: !this.state.showSkills,
        })
    }

    toggleWork(event) {
        event.preventDefault()
        this.setState({
            showWork: !this.state.showWork,
        })
    }

    toggleInterests(event) {
        event.preventDefault()
        this.setState({
            showInterests: !this.state.showInterests,
        })
    }

    render() {
        const {showTraining} = this.state
        const {showSkills} = this.state
        const {showWork} = this.state
        const {showInterests} = this.state
        return (
            <div className="main-container-resume">

                <div className="container-resume">
                    <div className="part-resume">
                        <img className="top-icon" src={Brain} onClick={this.toggleTraining} ></img>
                        <p className="top-text">Training</p>
                    </div>
                    <div className="part-resume">
                        <img className="top-icon" src={Tools} onClick={this.toggleSkills}></img>
                        <p className="top-text">Skills</p>
                    </div>
                    <div className="part-resume">
                        <img className="top-icon" src={Suitcase} onClick={this.toggleWork}></img>
                        <p className="top-text">Work Experience</p>
                    </div>
                    <div className="part-resume">
                        <img className="top-icon" src={Heart} onClick={this.toggleInterests}></img>
                        <p className="top-text">Interests</p>
                    </div>
                </div>

            <div className="toggle-wrapper">
                {showTraining === true ?
                    <div className="container-training">
                        <div className="container-training-xp">
                            <div className="container-training-year">
                            <p>March 2020</p>
                            </div>
                            <div className="container-training-description">
                            <p>"Titre Professionnel web & web mobile developer"
                            <br></br>Official State Diploma - <a className="here" href="https://certificationprofessionnelle.fr/recherche/rncp/31114" target="_blank">Learn more here</a></p>
                            </div>
                        </div>
                        <div className="separation"></div>
                        <div className="container-training-xp">
                            <div className="container-training-year">
                            <p>December 2020</p>
                            </div>
                            <div className="container-training-description">
                            <p><a className="here" href="https://www.opquast.com/" target="_blank">OPQUAST</a> Certification - Quality control in web projects
                            <br></br>Good practices certification - Score: 790/1000</p>
                            </div>
                        </div>
                        <div className="separation"></div>
                        <div className="container-training-xp">
                            <div className="container-training-year">
                            <p>May 2019 to October 2019</p>
                            </div>
                            <div className="container-training-description">
                            <p><a className="here" href="https://oclock.io/" target="_blank">O'Clock</a> Training - Web & web mobile developer
                            <br></br>"Grande Ecole du Numerique" approuved</p>
                            </div>
                        </div>
                        <div className="separation"></div>
                        <div className="container-training-xp">
                            <div className="container-training-year">
                            <p>September 2012 to November 2013</p>
                            </div>
                            <div className="container-training-description">
                            <p>Business Development Manager Bachelor at Pole Formation CCI - Strasbourg</p>
                            </div>
                        </div>
                        <div className="separation"></div>
                        <div className="container-training-xp">
                            <div className="container-training-year">
                            <p>September 2009 to June 2011</p>
                            </div>
                            <div className="container-training-description">
                            <p>Assistant Manager BTS (Advanced Technician Certificate) at Lycee Jeanne d'Arc - Mulhouse</p>
                            </div>
                        </div>
                    </div> : ""}

                {showSkills === true ?
                    <div className="container-skill">
                        <div className="container-icon">
                            <div className="part-icon">
                                <img className="icon-list" src={HTML}></img>
                                <p>HTML</p>
                            </div>
                            <div className="part-icon">
                                <img className="icon-list" src={CSS}></img>
                                <p>CSS</p>
                            </div>
                            <div className="part-icon">
                                <img className="icon-list" src={PHP}></img>
                                <p>PHP</p>
                            </div>
                            <div className="part-icon">
                                <img className="icon-list" src={SQL}></img>
                                <p>MySQL</p>
                            </div>
                            <div className="part-icon">
                                <img className="icon-list" src={JS}></img>
                                <p>JavaScript</p>
                            </div>
                            <div className="part-icon">
                                <img className="icon-list" src={NODE}></img>
                                <p>NodeJS</p>
                            </div>
                            <div className="part-icon">
                                <img className="icon-list" src={REACT}></img>
                                <p>ReactJS</p>
                            </div>
                        </div>
                        <div className="note-skill">
                            <p>You will not find skills charts here because I think it's a subjective notion. I'm not competent to assess myself&#9786;</p>
                        </div>
                        <div className="container-soft-skill">
                            <div className="software-skill">
                                <div className="icon-wrapper">
                                <img className="soft-icon" src={Computer}></img>
                                <p className="soft-title">Softwares & Tools</p>
                                </div>
                                <p>English: C1 level</p>
                                <p>CRM: Salesforce & Zoho</p>
                                <p>Scrum & Agile methodology</p>
                                <p>Trello - Wireframes - Slask - Discord</p>
                                <p>Suite Office - Suite Adobe (beginner): Pr, Ps, Lr, Id, Ai</p>
                            </div>
                            <div className="software-skill">
                            <div className="icon-wrapper">
                            <img className="soft-icon" src={Lightbulb}></img>
                            <p className="soft-title">Soft Skills</p>
                            </div>
                            <p>Teamwork</p>
                            <p>Attention to detail</p>
                            <p>Creativity</p>
                            <p>Curiosity</p>
                            <p>Resilience</p>
                        </div>
                        </div>
                    </div> : ""}

                {showWork === true ?
                    <div className="container-training">
                        <div className="container-training-xp">
                            <div className="container-training-year">
                            <p>September 2019 to October 2019</p>
                            </div>
                            <div className="container-training-description">
                            <p><a className="here" href="https://github.com/benistr/Projet-Ocourses" target="_blank">O'COURSES</a> - Graduation team project
                            <br></br>From scratch: Shopping list management application
                            Drafting of specifications and draft of the first models
                            MERN Stack used with MongoDB Atlas in BDD and Node.JS
                            </p>
                            </div>
                        </div>
                        <div className="separation"></div>
                        <div className="container-training-xp">
                            <div className="container-training-year">
                            <p>August 2018 to December 2018</p>
                            </div>
                            <div className="container-training-description">
                            <p><a className="here" href="https://www.eldotravo.fr/" target="_blank">ELDOTRAVO</a> - Partnership Manager
                            <br></br>Clients Portfolio development with the implementation of partnerships to manage customers reviews and online reputation of construction industry. Demonstration of services and implementation of free trials. Participation in fairs, BNI 
                            </p>
                            </div>
                        </div>
                        <div className="separation"></div>
                        <div className="container-training-xp">
                            <div className="container-training-year">
                            <p>January 2017 to July 2018</p>
                            </div>
                            <div className="container-training-description">
                            <p><a className="here" href="https://www.laddition.com/fr" target="_blank">L'ADDITION</a> - Regional Business Developer
                            <br></br>Telemarketing and commercial prospection. Clients Portfolio development. Installation and new customers training.  Remote demonstration. Customer network development (customer satisfaction, sponsorship) and partners (accounting firms, consultants, web solutions)
                            </p>
                            </div>
                        </div>
                        <div className="separation"></div>
                        <div className="container-training-xp">
                            <div className="container-training-year">
                            <p>February 2014 to January 2017</p>
                            </div>
                            <div className="container-training-description">
                            <p><a className="here" href="https://www.just-eat.fr/" target="_blank">JUSTEAT</a> - Regional Business Developer
                            <br></br>Telemarketing and commercial prospection. Clients Portfolio development. Territory orders daily monitoring.  Customer satisfaction awareness. Customer network development (customer satisfaction, sponsorship) and additionals marketing sales
                            </p>
                            </div>
                        </div>
                        <div className="separation"></div>
                        <div className="container-training-xp">
                            <div className="container-training-year">
                            <p>September 2012 to November 2013</p>
                            </div>
                            <div className="container-training-description">
                            <p><a className="here" href="https://www.ghdhair.com/fr" target="_blank">GHD</a> - Salesman
                            <br></br>Telemarketing and commercial prospection. Clients Portfolio development. Customer resale training. Customer satisfaction awareness. Customer network development (customer satisfaction, sponsorship) and additionals marketing sales
                            </p>
                            </div>
                        </div>
                    </div> :""}

                {showInterests === true ?
                <div className="container-interests">
                    <div className="part-resume">
                        <a href="https://www.flickr.com/photos/154515169@N04/albums" target="_blank" alt="lien externe vers flickr"><img className="top-icon" src={Camera}></img></a>
                        <p className="top-text">Urban and Landscape hotography</p>
                    </div>
                    <div className="part-resume">
                        <img className="top-icon" src={Gamepad}></img>
                        <p className="top-text">Role playing and video games</p>
                    </div>
                    <div className="part-resume">
                        <a href="https://soundcloud.com/black-cherry-15/sets/ep-1" target="_blank" alt="lien externe vers soundcloud"><img className="top-icon" src={Music}></img></a>
                        <p className="top-text">Music, Guitar, concert</p>
                    </div>
                    <div className="part-resume">
                        <img className="top-icon" src={Plane}></img>
                        <p className="top-text">Aviation and everything that flies near or far</p>
                    </div>
                </div> : ""}
            </div>
            </div>

        )
    }
}

export default Resume;