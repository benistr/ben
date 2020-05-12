import React, { Component } from 'react';
import './aboutme.scss'
import Photo from './Logo-triangle-photo.png';
import { NavLink } from 'react-router-dom';
import Stain4 from './Stain4.png';
import Stain5 from './Stain5.png';

class AboutMe extends Component {
    render() {
        return (
            <div className="container-am">
                <div className="left-part-am">
                    <img className="photo" src={Photo}></img>
                </div>
                <div className="right-part-am">
                    <p className="présentation">Hi, my name is Benjamin,
                    <br></br><br></br>
                    I'm a thirty year-old man who loves to learn new stuff. In 2019, I decided to make a radical career shift. After working as a salesman for 7 years, I decided to become a web developer.
                    It took me some time, work, sweat and tears but I'm glad to say I've got my diploma.
                    <br></br>
                    The path="/" to becoming an accomplished developer is still long but you can count on my motivation and my thirst for learning.
                    <br></br>
                    You can learn more about my skills <NavLink className="here" to="/resume">here</NavLink>.
                    </p>
                </div>

                <img className="stain4" src={Stain4}></img>
                <img className="stain5" src={Stain5}></img>
            </div>
        )
    }
}

export default AboutMe;