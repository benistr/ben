import React, { Component } from 'react';
import $ from 'jquery';
import './header.scss';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        let linksMarkUp = this.props.links.map((link, index) => {
            let linkMarkUp = link.active ? (
            <Link key={index} className="navigation" className="navigation-active" to={link.link}>{link.label}</Link>
        ) : (
            <Link key={index} className="navigation" to={link.link}>{link.label}</Link>
        );

        return (
            <ul>
                {linkMarkUp}
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