import React, { Component } from 'react';
import './landingpage.scss';
import Logo1 from './Logo-1-Full(reduce).png';
import Logo2 from './Logo-2-Full(reduce).png';
import { Link } from 'react-router-dom';

class LandingPage extends Component {
    render() {
        return (
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src={Logo1}></img>
                        </div>
                        <div className="flip-card-back">
                            <Link to="/aboutme"><img src={Logo2}></img></Link>
                        </div>
                    </div>
                </div>
        )
    }
}

export default LandingPage;