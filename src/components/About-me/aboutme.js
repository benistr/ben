import React, { Component } from 'react';
import './aboutme.scss'
import Photo from './Logo-triangle-photo.png';

class AboutMe extends Component {
    render() {
        return (
            <div className="container">
                <div className="left-part">
                    <img className="photo" src={Photo}></img>
                </div>
                <div className="right-part">
                </div>
            </div>
        )
    }
}

export default AboutMe;