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
class App extends React.Component {
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
                <FingerPosition fingerY={position[1][0]} stringX="0" />
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

const ChordList = ({ onClick, allChords }) => {

  return (
    <ol>
      {Object.entries(allChords).map((chord, i) =>
        <li key={i}>
          <button
            value={chord[0]}
            placement={chord[1][0].p}
            onClick={onClick}
          >
            {chord[0]}
          </button>
        </li>
      )}
    </ol>
  )
}

class Header extends React.Component {
  render() {
    return (
      <header role="banner">
        <Logo />
      </header>
    )
  }
}

const Logo = () => {
  return (
    <svg id="logo" viewBox="0 0 54 63">
      <title>Chord Finder Logo</title>
      <g>
        <path d="M36.52,19.86a1.09,1.09,0,0,0-.44,0H34.89v1.95h1.19a1,1,0,1,0,.44-1.95Z" fill="#fff" />
        <path d="M29.23,32.71H27.75v4.44h1.19A2,2,0,0,0,31,35.21c0-.09,0-.19,0-.29A2,2,0,0,0,29.23,32.71Z" fill="#fff" />
        <path d="M42.25,32.7a.54.54,0,0,0-.18,0h-1v1.67h1a.84.84,0,1,0,.18-1.67Z" fill="#fff" />
        <path d="M44.13,19.87H42.45V25h1.4a2.34,2.34,0,0,0,2.43-2.27c0-.1,0-.21,0-.32A2.35,2.35,0,0,0,44.13,19.87Z" fill="#fff" />
        <path d="M27,0C9,0,0,9,0,18,0,36,18,63,27,63S54,36,54,18C54,9,45,0,27,0ZM22.77,22.48A4.38,4.38,0,0,1,27.05,18h.19a4.48,4.48,0,1,1-4.47,4.49Zm-16.92.14v-.17A4.39,4.39,0,0,1,10.18,18h.14a4.78,4.78,0,0,1,2,.44V20.5a3,3,0,0,0-2-.72,2.67,2.67,0,0,0,0,5.34,3,3,0,0,0,2-.71v2.07a4.61,4.61,0,0,1-2,.45A4.39,4.39,0,0,1,5.85,22.62ZM13.91,32.7H11.23v1.76h2.46V36H11.23v2.67H9.68V31.2h4.23Zm2.83,5.93H15.19V31.2h1.55ZM15.63,23.29v3.5H13.81V18.11h1.82v3.43h4V18.11h1.81v8.68H19.6v-3.5Zm8.93,15.34H23l-3-4.29v4.29H18.43v-6.5l-.52-.82V31.2h1.84L23,35.94V31.2h1.56Zm8.12-3.71a3.5,3.5,0,0,1-3.26,3.71H26.2V31.2H29a3.49,3.49,0,0,1,3.68,3.29A3.09,3.09,0,0,1,32.68,34.92Zm5.38-2.22H35.38v1.44h2.46v1.5H35.38v1.5h2.68v1.49H33.83V31.2h4.23Zm-.62-5.91c-.3-1.89-1-3.23-2.1-3.23h-.45v3.23H33.08V18.11h3c1.69,0,2.87.92,2.87,2.53a2.15,2.15,0,0,1-1.57,2.19c1.08.56,1.73,2.1,1.94,4Zm5.79,11.84c-.26-1.61-.89-2.76-1.8-2.76h-.38v2.76H39.5V31.2h2.57a2.16,2.16,0,0,1,2.43,1.85,1.72,1.72,0,0,1,0,.32,1.83,1.83,0,0,1-1.34,1.88c.93.48,1.49,1.79,1.66,3.38Zm4.92-16.18a4.08,4.08,0,0,1-3.81,4.34,3.84,3.84,0,0,1-.48,0H40.64V18.11h3.22A4.08,4.08,0,0,1,48.15,22,3.84,3.84,0,0,1,48.15,22.45Z" fill="#fff" />
        <path d="M27.18,25.12h.06a2.67,2.67,0,1,0-2.61-2.73v.06A2.61,2.61,0,0,0,27.18,25.12Z" fill="#fff" />
      </g>
    </svg>
  )
}

class Guitar extends React.Component {
  render() {
    const children = this.props.children;

    return (
      <svg id="guitar" height="1378" viewBox="0 0 160 1378">
        <title>Guitar</title>
        <g>
          <g id="fretboard">
            <g id="board">
              <rect x="4" y="4" width="152" height="1370" fill="#f4edd3" />
              <path d="M152,8V1370H8V8H152m8-8H0V1378H160V0Z" />
            </g>
            <g id="frets">
              <g>
                <line x1="6.3" y1="103" x2="153.7" y2="103" fill="none" stroke="#fff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="8" />
                <line x1="6.3" y1="200" x2="153.7" y2="200" fill="none" stroke="#fff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="8" />
                <line x1="6.3" y1="292" x2="153.7" y2="292" fill="none" stroke="#fff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="8" />
                <line x1="6.3" y1="379" x2="153.7" y2="379" fill="none" stroke="#fff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="8" />
                <line x1="6.3" y1="461" x2="153.7" y2="461" fill="none" stroke="#fff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="8" />
                <line x1="6.3" y1="538" x2="153.7" y2="538" fill="none" stroke="#fff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="8" />
                <line x1="6.3" y1="611" x2="153.7" y2="611" fill="none" stroke="#fff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="8" />
                <line x1="6.3" y1="680" x2="153.7" y2="680" fill="none" stroke="#fff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="8" />
                <line x1="6.3" y1="745" x2="153.7" y2="745" fill="none" stroke="#fff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="8" />
                <line x1="6.3" y1="806" x2="153.7" y2="806" fill="none" stroke="#fff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="8" />
                <line x1="6.3" y1="861" x2="153.7" y2="861" fill="none" stroke="#fff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="8" />
                <line x1="6.3" y1="918" x2="153.7" y2="918" fill="none" stroke="#fff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="8" />
                <line x1="6.3" y1="970" x2="153.7" y2="970" fill="none" stroke="#fff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="8" />
                <line x1="6.3" y1="1019" x2="153.7" y2="1019" fill="none" stroke="#fff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="8" />
                <line x1="6.3" y1="1065" x2="153.7" y2="1065" fill="none" stroke="#fff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="8" />
                <line x1="6.3" y1="1108" x2="153.7" y2="1108" fill="none" stroke="#fff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="8" />
                <line x1="6.3" y1="1149" x2="153.7" y2="1149" fill="none" stroke="#fff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="8" />
                <line x1="6.3" y1="1187" x2="153.7" y2="1187" fill="none" stroke="#fff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="8" />
                <line x1="6.3" y1="1224" x2="153.7" y2="1224" fill="none" stroke="#fff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="8" />
                <line x1="6.3" y1="1258" x2="153.7" y2="1258" fill="none" stroke="#fff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="8" />
                <line x1="6.3" y1="1291" x2="153.7" y2="1291" fill="none" stroke="#fff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="8" />
                <line x1="6.3" y1="1321" x2="153.7" y2="1321" fill="none" stroke="#fff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="8" />
                <line x1="6.3" y1="1350" x2="153.7" y2="1350" fill="none" stroke="#fff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="8" />
              </g>
              <g>
                <line x1="6.3" y1="103" x2="153.7" y2="103" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" />
                <line x1="6.3" y1="200" x2="153.7" y2="200" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" />
                <line x1="6.3" y1="292" x2="153.7" y2="292" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" />
                <line x1="6.3" y1="379" x2="153.7" y2="379" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" />
                <line x1="6.3" y1="461" x2="153.7" y2="461" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" />
                <line x1="6.3" y1="538" x2="153.7" y2="538" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" />
                <line x1="6.3" y1="611" x2="153.7" y2="611" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" />
                <line x1="6.3" y1="680" x2="153.7" y2="680" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" />
                <line x1="6.3" y1="745" x2="153.7" y2="745" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" />
                <line x1="6.3" y1="806" x2="153.7" y2="806" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" />
                <line x1="6.3" y1="861" x2="153.7" y2="861" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" />
                <line x1="6.3" y1="918" x2="153.7" y2="918" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" />
                <line x1="6.3" y1="970" x2="153.7" y2="970" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" />
                <line x1="6.3" y1="1019" x2="153.7" y2="1019" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" />
                <line x1="6.3" y1="1065" x2="153.7" y2="1065" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" />
                <line x1="6.3" y1="1108" x2="153.7" y2="1108" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" />
                <line x1="6.3" y1="1149" x2="153.7" y2="1149" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" />
                <line x1="6.3" y1="1187" x2="153.7" y2="1187" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" />
                <line x1="6.3" y1="1224" x2="153.7" y2="1224" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" />
                <line x1="6.3" y1="1258" x2="153.7" y2="1258" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" />
                <line x1="6.3" y1="1291" x2="153.7" y2="1291" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" />
                <line x1="6.3" y1="1321" x2="153.7" y2="1321" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" />
                <line x1="6.3" y1="1350" x2="153.7" y2="1350" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" />
              </g>
              <g>
                <line x1="6.3" y1="103" x2="153.7" y2="103" fill="none" stroke="#fff" strokeWidth="3" />
                <line x1="6.3" y1="200" x2="153.7" y2="200" fill="none" stroke="#fff" strokeWidth="3" />
                <line x1="6.3" y1="292" x2="153.7" y2="292" fill="none" stroke="#fff" strokeWidth="3" />
                <line x1="6.3" y1="379" x2="153.7" y2="379" fill="none" stroke="#fff" strokeWidth="3" />
                <line x1="6.3" y1="461" x2="153.7" y2="461" fill="none" stroke="#fff" strokeWidth="3" />
                <line x1="6.3" y1="538" x2="153.7" y2="538" fill="none" stroke="#fff" strokeWidth="3" />
                <line x1="6.3" y1="611" x2="153.7" y2="611" fill="none" stroke="#fff" strokeWidth="3" />
                <line x1="6.3" y1="680" x2="153.7" y2="680" fill="none" stroke="#fff" strokeWidth="3" />
                <line x1="6.3" y1="745" x2="153.7" y2="745" fill="none" stroke="#fff" strokeWidth="3" />
                <line x1="6.3" y1="806" x2="153.7" y2="806" fill="none" stroke="#fff" strokeWidth="3" />
                <line x1="6.3" y1="861" x2="153.7" y2="861" fill="none" stroke="#fff" strokeWidth="3" />
                <line x1="6.3" y1="918" x2="153.7" y2="918" fill="none" stroke="#fff" strokeWidth="3" />
                <line x1="6.3" y1="970" x2="153.7" y2="970" fill="none" stroke="#fff" strokeWidth="3" />
                <line x1="6.3" y1="1019" x2="153.7" y2="1019" fill="none" stroke="#fff" strokeWidth="3" />
                <line x1="6.3" y1="1065" x2="153.7" y2="1065" fill="none" stroke="#fff" strokeWidth="3" />
                <line x1="6.3" y1="1108" x2="153.7" y2="1108" fill="none" stroke="#fff" strokeWidth="3" />
                <line x1="6.3" y1="1149" x2="153.7" y2="1149" fill="none" stroke="#fff" strokeWidth="3" />
                <line x1="6.3" y1="1187" x2="153.7" y2="1187" fill="none" stroke="#fff" strokeWidth="3" />
                <line x1="6.3" y1="1224" x2="153.7" y2="1224" fill="none" stroke="#fff" strokeWidth="3" />
                <line x1="6.3" y1="1258" x2="153.7" y2="1258" fill="none" stroke="#fff" strokeWidth="3" />
                <line x1="6.3" y1="1291" x2="153.7" y2="1291" fill="none" stroke="#fff" strokeWidth="3" />
                <line x1="6.3" y1="1321" x2="153.7" y2="1321" fill="none" stroke="#fff" strokeWidth="3" />
                <line x1="6.3" y1="1350" x2="153.7" y2="1350" fill="none" stroke="#fff" strokeWidth="3" />
              </g>
            </g>
          </g>
          <g id="restingStrings">
            <polyline id="restingString_6" points="23.31 0 23.31 1223.88 23.31 1378" fill="none" stroke="#000" strokeWidth="2" />
            <polyline id="restingString_5" points="45.99 0 45.99 1223.88 45.99 1378" fill="none" stroke="#000" strokeWidth="2" />
            <polyline id="restingString_4" points="68.67 0 68.67 1223.88 68.67 1378" fill="none" stroke="#000" strokeWidth="2" />
            <polyline id="restingString_3" points="91.17 0 91.17 1223.88 91.17 1378" fill="none" stroke="#000" strokeWidth="2" />
            <polyline id="restingString_2" points="114.01 0 114.01 1223.88 114.01 1378" fill="none" stroke="#000" strokeWidth="2" />
            <polyline id="restingString_1" points="136.85 0 136.85 1223.88 136.85 1378" fill="none" stroke="#000" strokeWidth="2" />
          </g>
          <g id="vibratingStrings">
            <polyline id="vibratingString_6" points="19.95 0 28.99 1223.87 24.95 1378" fill="none" />
            <polyline id="vibratingString_5" points="42.63 0 51.67 1223.88 47.63 1378" fill="none" />
            <polyline id="vibratingString_4" points="65.3 0 74.35 1223.88 70.3 1378" fill="none" />
            <polyline id="vibratingString_3" points="87.98 0 97.02 1224 92.98 1378" fill="none" />
            <polyline id="vibratingString_2" points="110.66 0 119.7 1224 115.66 1378" fill="none" />
            <polyline id="vibratingString_1" points="133.34 0 142.37 1222.96 138.34 1378" fill="none" />
          </g>

          {children}
        </g>
      </svg>
    );
  }
}

const FingerPosition = ({ fingerY, stringX }) => {
  if (fingerY === "-1" || null) { fingerY = "-20" }
  if (fingerY === "0" || null) { fingerY = "0" }
  if (fingerY === "1") { fingerY = "51.5" }
  if (fingerY === "2") { fingerY = "151.5" }
  if (fingerY === "3") { fingerY = "246.5" }
  if (fingerY === "4") { fingerY = "335.5" }
  if (fingerY === "5") { fingerY = "419.5" }
  if (fingerY === "6") { fingerY = "499.5" }
  if (fingerY === "7") { fingerY = "574.5" }
  if (fingerY === "8") { fingerY = "645.5" }
  if (fingerY === "9") { fingerY = "712.5" }
  if (fingerY === "10") { fingerY = "775.5" }
  if (fingerY === "11") { fingerY = "834.5" }
  if (fingerY === "12") { fingerY = "889.5" }
  if (fingerY === "13") { fingerY = "944.5" }
  if (fingerY === "14") { fingerY = "994.5" }
  if (fingerY === "15") { fingerY = "1041.5" }
  if (fingerY === "16") { fingerY = "1086.5" }
  if (fingerY === "17") { fingerY = "1128.5" }
  if (fingerY === "18") { fingerY = "1168.5" }
  if (fingerY === "19") { fingerY = "1205.5" }
  if (fingerY === "20") { fingerY = "1241.5" }
  if (fingerY === "21") { fingerY = "1274.5" }
  if (fingerY === "22") { fingerY = "1306.5" }
  if (fingerY === "23") { fingerY = "1335.5" }
  if (fingerY === "24") { fingerY = "1363.5" }


  return (
    <svg id="fingerPositions" viewBox="0 0 160.00 1378" x={stringX}>
      <title>Finger Positions</title>
      <circle cx="23" cy={fingerY} r="10" fill="white" strokeWidth="5" stroke="#000000" />
    </svg>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));