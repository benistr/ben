import React, { Component } from 'react';
import './portfolio.scss';
import Cannaux from './Cannaux.png';
import OCA from './OCA.png';
import OCourses from './OCourses.png';
import WP from './Wordpress.png';

class Portfolio extends Component {
    render() {
        return (
            <div className="container-pf">
                <div className="part-pf">
                <p className="description">Corporate website for a lawyer</p>
                <a href="https://cannaux-avocat.fr" target="_blank"><img className="photo-pf" src={Cannaux}>
                    </img></a>
                    <div className="tags-wrapper">
                    <p className="tags">HTML</p>
                    <p className="tags">CSS</p>
                    <p className="tags">JS</p>
                    <p className="tags">PHP</p>
                    <p className="tags">RESPONSIVE</p>
                    </div>
                </div>
                <div className="part-pf">
                <p className="description">Shopping list manager</p>
                    <a href="https://github.com/benistr/Projet-Ocourses" target="_blank"><img className="photo-pf" src={OCourses}></img></a>
                    <div className="tags-wrapper">
                    <p className="tags">REACT.JS</p>
                    <p className="tags">JSX</p>
                    <p className="tags">CSS</p>
                    <p className="tags">SASS/SCSS</p>
                    <p className="tags">SEMANTIC.UI</p>
                    <p className="tags">NODE.JS</p>
                    <p className="tags">EXPRESS</p>
                    <p className="tags">MONGOOSE</p>
                    <p className="tags">MONGODB</p>
                    <p className="tags">RESPONSIVE</p>
                    <p className="tags">AXIOS</p>
                    <p className="tags">REDUX</p>
                    </div>
                </div>
                <div className="part-pf">
                <p className="description">Corporate website for a lawyer - Blogging component functional but not implemented yet</p>
                    <a href="https://ocavocats.fr" target="_blank"><img className="photo-pf" src={OCA}></img></a>
                    <div className="tags-wrapper">
                    <p className="tags">HTML</p>
                    <p className="tags">CSS</p>
                    <p className="tags">PHP</p>
                    <p className="tags">MySQL</p>
                    <p className="tags">RESPONSIVE</p>
                    </div>
                </div>
                <div className="part-pf">
                <p className="description">Blogging Test with Wordpress (custom theme from scratch)</p>
                    <a href="https://github.com/benistr/oNews-Wordpress" target="_blank"><img className="photo-pf" src={WP}></img></a>
                    <div className="tags-wrapper">
                    <p className="tags">HTML</p>
                    <p className="tags">CSS</p>
                    <p className="tags">PHP</p>
                    <p className="tags">WORDPRESS</p>
                    <p className="tags">CMS</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio;