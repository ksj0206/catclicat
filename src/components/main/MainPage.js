import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Canvas from './Canvas'

const MainPage = () => {
  const [canvasSize, setCanvasSize] = useState(4)
  const [catImageList, setCatImageList] = useState([])
  const getCatImageList = async () => {
    try {
      const response = await axios.get(
        `https://api.thecatapi.com/v1/images/search?limit=${canvasSize ** 2}`
      )
      return response.data
    } catch (error) {
      console.error(error)
    }
  }
  const onBlockRemove = (id) => {
    setCatImageList(
      catImageList.map((row) =>
        row.map((block) =>
          block.id == id ? { id: id, src: block.src, isClicked: true } : block
        )
      )
    )
  }

  const onCanvasSizeChange = (e) => {
    setCanvasSize(e.target.value)
  }

  const init = async () => {
    setCatImageList([])
    // [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    const response = await getCatImageList()

    const data = response.map((item, idx) => {
      new Image().src = item.url
      return { id: idx, src: item.url, isClicked: false }
    })

    // [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]
    const images = []
    for (let i = 0; i < canvasSize; i++) {
      images.push(data.splice(0, canvasSize))
    }

    setCatImageList(images)
    // setState는 이안에서 확인 불가능
  }
  useEffect(() => {
    init()
  }, [canvasSize])

  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <div>
        <h1>고양이 눌러 볼 고양</h1>
      </div>
      <div style={{ marginBottom: 16 }}>
        <select
          placeholder="dnononono"
          defaultValue={0}
          onChange={onCanvasSizeChange}
        >
          <option value={0} disabled style={{ display: 'none' }}>
            Puzzle Size 🍊
          </option>
          {[2, 4, 6].map((_) => (
            <option value={_} key={_}>
              {_}
            </option>
          ))}
        </select>
      </div>
      <Canvas
        canvasSize={canvasSize}
        catImageList={catImageList}
        onBlockRemove={onBlockRemove}
      ></Canvas>
    </div>
  )
}

export default MainPage
