import React, { Component } from 'react';
import $ from 'jquery';
import './header.scss';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        let linksMarkUp = this.props.links.map((link, index) => {
            return (
                <ul>
                <NavLink key={index} className="navigation" to={link.link}>{link.label}</NavLink>
                </ul>
            );
        });

        return(
            <div className="header">
                {linksMarkUp}
            </div>
        )
    }
}

export default Header;