import React from 'react';

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
    <svg id="fingerPositions" viewBox="0 0 160 1378" x={stringX}>
      <title>Finger Positions</title>
      <circle cx="23" cy={fingerY} r="10" fill="white" strokeWidth="5" stroke="#000000"></circle>
    </svg>
  );
}

export default FingerPosition;
