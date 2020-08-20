import React from 'react'
import styled from 'styled-components'

const TooltipText = styled.div`
  position: fixed;
  top: ${props => props.top || 0}px;
  left: 0px;
  transform: translate3d(${props => `${props.x || 0}px, ${props.y || 0}px, ${props.z || 0}px`});
  color: white;
  background-color: #455667;
  max-width: 300px;
  padding: 8px;
  text-align:left;
  white-space: pre-line;
  font-size: ${props => props.fontSize || 10}px;
  font-weight: 400;
  text-transform: none;
  z-index: 1200;
  display: ${props => props.display}
`

const Label = styled.div`
width: 50px;
font-weight: 600;
`

const pitchDetail = (props) => {

return (
  <TooltipText
  display={props.visible}
  x={props.data.x}
  y={props.data.y}
  fontSize={props.fontSize}
  top={props.top}>
  <div style={{display:'flex'}}><Label>Batter:</Label> {props.data.batter}</div>
  <div style={{display:'flex'}}><Label>Pitch:</Label> {props.data.description}</div>
  <div style={{display:'flex'}}><Label>Result:</Label> {props.data.result}</div>
  </TooltipText>
  )
}

export default pitchDetail