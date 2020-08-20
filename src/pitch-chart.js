import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

import ChartHeader from './header'
import Chart from './chart'
import Legend from './legend'
import useOnClickOutside from './use-click-outside'
import colorMap from './color-map'

const Container = styled.div`
  background-color: #fff;
  box-sizing: border-box;
  box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)
`

const PitchChart = (props) => {
  const [showLegend, setShowLegend] = useState('none')
  const [legendCoords, setLegendCoords] = useState({x:0,y:0})
  const [legendData, setLegendData] = useState([])
  const ref = useRef()

  useEffect(()=> {
    const seenBefore = {}
    const legend = props.data.pitches.reduce((memo, d) => {
      if(!seenBefore[d.pitchCode]) {
        seenBefore[d.pitchCode] = true
        memo.push({key: d.pitchCode, color: colorMap[d.pitchCode], description:d.pitchDescription})
      }
      return memo
    },[])
    setLegendData(legend)

  },[props.data])


  const displayLegend = (e) => {
    const x=e.clientX
    const	y=e.clientY
    setLegendCoords({x,y})
    setShowLegend('inline-block')
  }

  useOnClickOutside(ref, () => showLegend === 'inline-block' ? setShowLegend('none') : null)

  return (
<Container>
  <Legend display={showLegend} coords={legendCoords} data={legendData} />
  <ChartHeader 
    onClick={displayLegend}
    headShot={props.data.headShot}
    pitcher={props.data.pitcher}
    number={props.data.number}
    title={props.data.title}
     />
  <div ref={ref}>
     <Chart 
        pitches={props.data.pitches}
        height={props.height}
    />
  </div>
</Container>
  )
}

export default PitchChart