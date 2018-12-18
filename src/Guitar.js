import React, { Component } from 'react';
import { TimelineMax, Expo, Elastic } from "gsap";

class Guitar extends React.Component {

  componentDidUpdate() {
    //GSAP
    //Varibles for the animation
    const bend = 2;
    const guitar = document.getElementById('guitar');

    //Resting strings
    const restingString_6 = document.getElementById('restingString_6');
    const restingString_5 = document.getElementById('restingString_5');
    const restingString_4 = document.getElementById('restingString_4');
    const restingString_3 = document.getElementById('restingString_3');
    const restingString_2 = document.getElementById('restingString_2');
    const restingString_1 = document.getElementById('restingString_1');

    //Vibrating strings
    const vibratingString_6 = document.getElementById('vibratingString_6');
    const vibratingString_5 = document.getElementById('vibratingString_5');
    const vibratingString_4 = document.getElementById('vibratingString_4');
    const vibratingString_3 = document.getElementById('vibratingString_3');
    const vibratingString_2 = document.getElementById('vibratingString_2');
    const vibratingString_1 = document.getElementById('vibratingString_1');

    //Timeline
    var strum = new TimelineMax({
      paused: true
    })

    //String Animations
    strum
      .to(restingString_6, 0.1, { ease: Expo.easeOut, morphSVG: { points: vibratingString_6.getAttribute('points') } })
      .to(restingString_6, 1, { morphSVG: { points: restingString_6.getAttribute('points') }, ease: Elastic.easeOut.config(bend, 0.04) })
      .to(restingString_5, 0.1, { ease: Expo.easeOut, morphSVG: { points: vibratingString_5.getAttribute('points') } }, "-=1.1")
      .to(restingString_5, 1, { morphSVG: { points: restingString_5.getAttribute('points') }, ease: Elastic.easeOut.config(bend, 0.04) }, "-=1")
      .to(restingString_4, 0.1, { ease: Expo.easeOut, morphSVG: { points: vibratingString_4.getAttribute('points') } }, "-=1.1")
      .to(restingString_4, 1, { morphSVG: { points: restingString_4.getAttribute('points') }, ease: Elastic.easeOut.config(bend, 0.04) }, "-=1")
      .to(restingString_3, 0.1, { ease: Expo.easeOut, morphSVG: { points: vibratingString_3.getAttribute('points') } }, "-=1.1")
      .to(restingString_3, 1, { morphSVG: { points: restingString_3.getAttribute('points') }, ease: Elastic.easeOut.config(bend, 0.04) }, "-=1")
      .to(restingString_2, 0.1, { ease: Expo.easeOut, morphSVG: { points: vibratingString_2.getAttribute('points') } }, "-=1.1")
      .to(restingString_2, 1, { morphSVG: { points: restingString_2.getAttribute('points') }, ease: Elastic.easeOut.config(bend, 0.04) }, "-=1")
      .to(restingString_1, 0.1, { ease: Expo.easeOut, morphSVG: { points: vibratingString_1.getAttribute('points') } }, "-=1.1")
      .to(restingString_1, 1, { morphSVG: { points: restingString_1.getAttribute('points') }, ease: Elastic.easeOut.config(bend, 0.04) }, "-=1")

    function playChord() {
      strum.restart();
      strum.play();
    }

    //Play chord
    guitar.addEventListener("click", playChord);
  }

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

export default Guitar;
