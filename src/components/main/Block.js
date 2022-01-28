import React from 'react'
import '../../css/block.css'
const Block = ({ size, block, onBlockRemove }) => {
  return (
    <div
      className="block"
      style={{
        width: `${100 / size}%`,
        cursor: block.isClicked ? 'unset' : 'pointer'
      }}
    >
      {!block.isClicked && (
        <img
          style={{ width: '100%', height: '100%' }}
          src={block.src}
          onClick={() => onBlockRemove(block.id)}
        ></img>
      )}
    </div>
  )
}

export default Block
