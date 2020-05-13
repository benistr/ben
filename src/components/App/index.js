/**
 * Import
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Switch, Route, Router } from 'react-router-dom';

import LandingPage from '../Landing-page/landingpage';
import AboutMe from '../About-me/aboutme';
import Contact from '../Contact/contact';
import Portfolio from '../Portfolio/portfolio';
import Resume from '../Resume/resume';
import Header from '../Header/header';
import Footer from '../Footer/footer';

// Styles et assets
import './app.sass';

class App extends Component {
    render() {
      let links = [
        { label: 'About Me', link: '/aboutme'},
        { label: 'Resume', link: '/resume'},
        { label: 'Portfolio', link: '/portfolio'},
        { label: 'Contact', link: '/contact'},
      ]
        return(
            <div id="app">
            <Header links={links} />
            <Route exact path="/" component={LandingPage} />
            <Footer />
                <Switch>
                    <Route path="/aboutme" component={AboutMe} />
                    <Route path="/resume" component={Resume} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </div>
    )}
};

App.propTypes = {
  /** Titre de l'application React */
  title: PropTypes.string.isRequired
};

/**
 * Export
 */

// Étape 1 : on définit des stratégies de connexion au store de l'app.
const connectionStrategies = connect(
  // 1er argument : stratégie de lecture (dans le state privé global)
  (state, ownProps) => {
    return {
      title: ownProps.title,
      greeting: state.greetingMessage
    };
  },

  // 2d argument : stratégie d'écriture (dans le state privé global)
  (dispatch, ownProps) => {
    return {
      handleChange: (event) => {
        dispatch(updateInputValue(event.target.value));
      }
    };
  },
);

// Étape 2 : on applique ces stratégies à un composant spécifique.
const AppContainer = connectionStrategies(App);

// Étape 3 : on exporte le composant connecté qui a été généré
export default AppContainer;
