import React, { Component } from 'react';
import './footer.scss';
import Twitter from './losange-logo-twitter.png';
import Soundcloud from './losange-logo-soundcloud.png';
import Linkedin from './losange-logo-linkedin.png';
import Github from './losange-logo-github.png';
import Flickr from './losange-logo-flickr.png';

class Footer extends Component {
    render() {
        return (
                <div className="footer">
                    <a href="https://www.linkedin.com/in/benjaminstraub-web/" target="_blank" alt="lien externe vers linkedin"><img className="bottom-logo" src={Linkedin}></img></a>
                    <a href="https://twitter.com/BenjaminStr" target="_blank" alt="lien externe vers twitter"><img className="bottom-logo" src={Twitter}></img></a>
                    <a href="https://github.com/benistr?tab=repositories" target="_blank" alt="lien externe vers github"><img className="bottom-logo" src={Github}></img></a>
                    <a href="https://www.flickr.com/photos/154515169@N04/albums" target="_blank" alt="lien externe vers flickr"><img className="bottom-logo" src={Flickr}></img></a>
                    <a href="https://soundcloud.com/black-cherry-15/sets/ep-1" target="_blank" alt="lien externe vers soundcloud"><img className="bottom-logo" src={Soundcloud}></img></a>
                </div>
        )
    }
}

export default Footer;