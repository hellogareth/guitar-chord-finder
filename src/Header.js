import React, { Component } from 'react';
import Logo from './Logo';

class Header extends Component {

  render() {
    return (
      <header role="banner">
        <Logo />
      </header>
    )
  }
}

export default Header;