import React from 'react'
import styled from 'styled-components'
import colorMap from './color-map'

const Plot = styled.div`
  position: absolute;
  left:${props => props.left}px;
  top: ${props => props.top}px;
  background-color:${props => props.color};
  width:${props => props.radius}px;
  height:${props => props.radius}px;
  border-radius: 50%;
`
//https://securea.mlb.com/mlb/images/players/head_shot/519242@2x.jpg
//QYrBus-ZajiwH-jazp3e
const PlotPoint = (props) => {
  const color = colorMap[props.pitchCode]
  return (
    <Plot 
     onMouseLeave={props.onHoverOut}
      onMouseOver={(e)=> props.onHover(e, {description: props.description, result: props.result, batter: props.batter})}
      left={props.left}
      top={props.top}
      color={color}
      radius={props.radius}
    />
  )
}

export default PlotPoint