import React, { Component } from 'react';
import './resume.scss';
import Brain from './brain.png';
import Tools from './tools.png';
import Suitcase from './suitcase.png';
import Heart from './heart.png';

class Resume extends Component {
    constructor(props)  {
        super(props)
        this.toggleContent = this.toggleContent.bind(this)
        this.state = {
            showTraining: false,
        }
    }

    toggleContent(event) {
        event.preventDefault()
        this.setState({
            showTraining: !this.state.showTraining
        })
    }

    render() {
        const {showTraining} = this.state
        return (
            <div className="main-container-resume">

                <div className="container-resume">
                    <div className="left-part-resume">
                        <img className="top-icon" src={Brain} onClick={this.toggleContent} ></img>
                        <p className="top-text">Training</p>
                    </div>
                    <div className="middle-part1-resume">
                        <img className="top-icon" src={Tools}></img>
                        <p className="top-text">Skills</p>
                    </div>
                    <div className="middle-part2-resume">
                        <img className="top-icon" src={Suitcase}></img>
                        <p className="top-text">Work Experience</p>
                    </div>
                    <div className="right-part-resume">
                        <img className="top-icon" src={Heart}></img>
                        <p className="top-text">Interests</p>
                    </div>
                </div>

                {showTraining === true ?
                    <div className="training-container">
                        <div className="training-container-xp">
                            <div className="training-container-year">
                            <p>March 2020</p>
                            </div>
                            <div className="training-container-description">
                            <p>Titre Professionnel web & web mobile developer (Official State Diploma) - <a className="here" href="https://certificationprofessionnelle.fr/recherche/rncp/31114" target="_blank">Learn more here</a></p>
                            </div>
                        </div>
                        <div className="training-container-xp">
                            <div className="training-container-year">
                            <p>December 2020</p>
                            </div>
                            <div className="training-container-description">
                            <p>OPQUAST Certification - Quality control in web projects : 790/1000 - <a className="here" href="https://www.opquast.com/" target="_blank">Learn more here</a></p>
                            </div>
                        </div>
                        <div className="training-container-xp">
                            <div className="training-container-year">
                            <p>May 2019 to October 2019</p>
                            </div>
                            <div className="training-container-description">
                            <p>O'Clock Training - Web & web mobile developer - "Grande Ecole du Numerique" approuved - <a className="here" href="https://oclock.io/" target="_blank">Learn more here</a></p>
                        </div>
                        </div>
                        <div className="training-container-xp">
                            <div className="training-container-year">
                            <p>2012 to 2013</p>
                            </div>
                            <div className="training-container-description">
                            <p>Business Development Manager Bachelor at Pole Formation CCI - Strasbourg</p>
                            </div>
                        </div>
                        <div className="training-container-xp">
                            <div className="training-container-year">
                            <p>2012 to 2013</p>
                            </div>
                            <div className="training-container-description">
                            <p>Assistant Manager BTS (Advanced Technician Certificate) at Lycee Jeanne d'Arc - Mulhouse</p>
                            </div>
                        </div>
                    </div> : ""}

            </div>

        )
    }
}

export default Resume;