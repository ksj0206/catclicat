import React from 'react'
import Block from './Block'

const BlockRow = ({ size, blocks, onBlockRemove }) => {
  return (
    <div style={{ width: '100%', height: `${100 / size}%`, display: 'flex' }}>
      {blocks.map((block) => (
        <Block
          size={size}
          block={block}
          key={block.id}
          onBlockRemove={onBlockRemove}
        />
      ))}
    </div>
  )
}

export default BlockRow
