import React, { Component } from 'react';
import $ from 'jquery';
import './header.scss';

class Header extends Component {
    componentDidMount() {
        var Menu = {
            el: {
              ham: $(".menu"),
              menuTop: $(".menu-top"),
              menuMiddle: $(".menu-middle"),
              menuBottom: $(".menu-bottom")
            },
          
            init: function () {
              Menu.bindUIactions();
            },
          
            bindUIactions: function () {
              Menu.el.ham.on("click", function (event) {
                Menu.activateMenu(event);
                event.preventDefault();
              });
            },
          
            activateMenu: function () {
              Menu.el.menuTop.toggleClass("menu-top-click");
              Menu.el.menuMiddle.toggleClass("menu-middle-click");
              Menu.el.menuBottom.toggleClass("menu-bottom-click");
            }
          };
          
          Menu.init();          
    }
    render() {
        return(
            <div className="menu">
                <span className="menu-global menu-top"></span>
                <span className="menu-global menu-middle"></span>
                <span className="menu-global menu-bottom"></span>
            </div>
        )
    }
}

export default Header;