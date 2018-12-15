import React from 'react';

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

export default ChordList;