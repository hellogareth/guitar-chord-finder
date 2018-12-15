import React, { Component } from 'react';
import './App.css';
import ChordList from "./ChordList";
import Guitar from "./Guitar";
import FingerPosition from "./FingerPosition";
import Header from "./Header";
import Logo from "./Logo";

const data = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/106687/custom-data-v5.json"

const Loader = ({ isLoading, children }) => {
  const loader = (
    <main aria-busy="true">
      <div>
        <Logo />
        <div className="loader" />
      </div>
    </main>
  )

  return (
    <main>
      {isLoading ? loader : children}
    </main>
  )
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      allChords: [],
      currentChord: '',
      placement: []
    }
  }

  componentDidMount() {
    fetch(data)
      .then(response => response.json())
      .then(response => {
        this.setState({
          allChords: response.EADGBE[0],
          isLoading: false
        })
      })
  }

  handleClick = (event) => {
    this.setState({ currentChord: event.target.value });
    var placementArray = event.target.getAttribute("placement");
    var split = placementArray.split(',');
    this.setState({
      placement: [split]
    }
    )
  }

  render() {
    const allChords = this.state.allChords;
    const placement = this.state.placement;

    return (
      <Loader isLoading={this.state.isLoading}>
        <section>
          <h1>{this.state.currentChord}</h1>

          <Guitar>
            {Object.entries(placement).map((position, i) =>
              <g key={i}>
                <FingerPosition fingerY={position[1][0]} formation stringX="0" />
                <FingerPosition fingerY={position[1][1]} stringX="23" />
                <FingerPosition fingerY={position[1][2]} stringX="46" />
                <FingerPosition fingerY={position[1][3]} stringX="69" />
                <FingerPosition fingerY={position[1][4]} stringX="92" />
                <FingerPosition fingerY={position[1][5]} stringX="115" />
              </g>
            )}

          </Guitar>
        </section>

        <nav role="navigation">
          <Header />
          <ChordList
            allChords={allChords}
            onClick={this.handleClick}
          />
        </nav>
      </Loader>
    );
  }
}

export default App;