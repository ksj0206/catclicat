import React from 'react'

const Block = ({ size, block, onBlockRemove }) => {
  return (
    <div style={{ height: '100%', width: `${100 / size}%` }}>
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
