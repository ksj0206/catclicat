import React, { useEffect, useState, useCallback } from 'react'
import axios from 'axios'
import BlockRow from './BlockRow'

const Canvas = ({ canvasSize, catImageList, onBlockRemove }) => {
  return (
    <div
      style={{
        height: '80vh',
        width: '80vh',
        position: 'relative'
      }}
    >
      <div
        style={{
          height: '100%',
          width: '100%',
          position: 'absolute'
        }}
      >
        {catImageList.length > 0 &&
          catImageList.map((row, idx) => {
            console.log('row', row)
            return (
              <BlockRow
                size={canvasSize}
                blocks={row}
                key={idx}
                onBlockRemove={onBlockRemove}
              />
            )
          })}
      </div>
      <img
        src={
          catImageList.length > 0
            ? catImageList[0][0].src
            : 'https://i.giphy.com/media/lLo0vQHigkMzGETtu/giphy.webp'
        }
        style={{
          height: '100%',
          width: '100%'
        }}
      ></img>
    </div>
  )
}

export default Canvas
