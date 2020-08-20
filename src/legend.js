import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
display: ${props => props.display};
position: absolute;
left:${props => props.left}px;
top: ${props=> props.top}px;
z-index: 101;
background-color:#fff;
padding: 8px;
box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
`
const Row = styled.div`
  display: flex;
`

const Dot = styled.div`
  width: 6px;
  height: 6px;
  margin-top: 4px;
  border-radius: 50%;
  background-color: ${props => props.color};
`
const Label = styled.div`
  margin-left: 4px;
  font-size: 0.575rem; 
  font-weight:500;
  line-height: 1.43;
`
const Legend = (props) => {
 return (<Card 
          display={props.display} 
          top={props.coords.y}
          left={props.coords.x}>
            {props.data.map(m=>{
              return <Row key={m.key}><Dot color={m.color} /><Label>{m.description}</Label></Row>
            })}
        </Card>)
}

export default Legend