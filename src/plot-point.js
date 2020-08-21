import React from 'react'
import styled from 'styled-components'
import colorMap from './color-map'

// const Plot = styled.div`
//   position: absolute;
//   left:${props => props.left}px;
//   top: ${props => props.top}px;
//   background-color:${props => props.color};
//   width:${props => props.radius}px;
//   height:${props => props.radius}px;
//   border-radius: 50%;
// `

 const Plot = styled.div.attrs(props => ({
    style: {
      left: props.left+'px',
      top: props.top +'px',
      backgroundColor: props.color,
      width: props.radius + 'px',
      height: props.radius +'px'
    },
  }))`position: absolute; border-radius:50%;`

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