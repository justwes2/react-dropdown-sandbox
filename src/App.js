
import logo from './logo.svg';
import './App.css'
import './Menu.css'
import Menu from './Menu'

import React, { Component } from 'react';

class Card extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener('mouseover', this.closeMenu);
    });
  }

  closeMenu(event) {

    if (!this.dropdownMenu.contains(event.target)) {

      this.setState({ showMenu: false }, () => {
        document.removeEventListener('mouseover', this.closeMenu);
      });

    }
  }

  render() {
    return (
      <nav>
      <div className=''>
        About
      </div>
      <div className=' '>
        <div className='' onMouseOver={this.showMenu}>
          Show menu
        </div>
      </div>


        {
          this.state.showMenu
            ? (
              <div
                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
                onMouseOver={this.showMenu}
              >
                <div className=''> Menu item 1 </div>
                <div className=''> Menu item 2 </div>
                <div className=''> Menu item 3 </div>
              </div>
            )
            : (
              null
            )
        }
        <div className=''>
          Other
        </div>
      </nav>
    );
  }
}

export default Card;
