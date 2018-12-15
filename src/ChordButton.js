import React, { Component } from 'react';

class ChordButton extends Component {

  render() {
    const { onClick, value, placement, active } = this.props;
    return (
      <button
        aria-selected={active}
        value={value}
        placement={placement}
        onClick={onClick}
      >
        {value}
      </button>
    )
  }
}

export default ChordButton;