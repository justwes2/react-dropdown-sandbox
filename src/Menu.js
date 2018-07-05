import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import Submenu from './Submenu'
import './Menu.css'


class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAboutMenu: false
    };
  }

  handleHover = (event) => {
    this.setState({ showAboutMenu: true });
  };

  handleLeave = (event) => {
    this.setState({ showAboutMenu: false });
  };

  render() {
    return (
      <nav className="nav">
        <ul className="nav__menu">
          <li className="nav__menu-item">
            <a>Home</a>
          </li>
          <li className="nav__menu-item" onMouseLeave={this.handleLeave}>
            <a onMouseEnter={this.handleHover}>
              About
            </a>
            <div className="submenu-container">
              <CSSTransitionGroup
                transitionName="slide"
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}
              >
                { this.state.showAboutMenu && <Submenu /> }
              </CSSTransitionGroup>
            </div>
          </li>

          <li className="nav__menu-item">
            <a>Contact</a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Menu
