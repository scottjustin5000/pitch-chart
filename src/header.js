import React from 'react'
import styled from 'styled-components'


const Header = styled.div`
    display: flex;
    padding: 8px; 
    align-items: center;
`

const Pitcher = styled.div`
  font-size: 0.875rem;
  flex: 1 1 auto;
  font-weight: 400;
  line-height: 1.45;
  margin: 8px;
`

const Title = styled.div`
  font-size: 0.675rem;
  font-weight:400;
  line-height: 1.45;
`

const ImageBase = styled.img`
  display: block;
  background-color: #FFF;
  vertical-align:middle;
  max-width: ${props => !props.maxHeight ? '100%' : undefined};
  max-height: ${props => props.maxHeight && !props.maxWidth ? props.maxHeight : undefined};
  object-fit: ${props => props.objectFit || 'contain'};
  overflow: ${props => props.overflow || 'hidden'};
`

const ImageWrapper = styled.div`
display: flex;
width: 40px;
height: 40px;
overflow: hidden;
border: 1px solid #d3d3d3;
border-radius: 50%;
margin-left: 8px;
`

const ChartHeader = (props) => {
   return (
    <Header>
    <ImageWrapper>
      <ImageBase src={props.headShot}/>
    </ImageWrapper>
    <Pitcher>{props.pitcher} #{props.number}
      <Title> {props.title}</Title>
    </Pitcher>
    <div onClick={props.onClick} style={{ cursor:'pointer', width:'42px' }}>
      <svg width='1em' height='1em' focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
    </div>
  </Header>
   )
}

export default ChartHeader