import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import PitchDetail from './pitch-detail'
import PlotPoint from './plot-point'

const Container = styled.div`
  display: flex;
  justify-content: center;
  font-size: 0.675rem;
  font-weight:400;
  line-height: 1.45;
`
const Left = styled.div`
  display: flex;  
  flex-direction: column; 
  justify-content: space-between;
`

const Center = styled.div`
   display: display; 
   flex-direction: column;
`

const Right = styled.div`
  width: 12px;
`

const PitchChartContainer = styled.div`
  width: ${props => props.width}px; 
  height:${props => props.height}px;
  border: solid 1px #d3d3d3;
  display:flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  background-color: #f5f5f5;
  position: relative;
  overflow: hidden;
`
const SecondLevel = styled.div`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  display:flex;
  border: solid 1px #d3d3d3;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  background-color: #f5f5f5;
`

const FirstLevel = styled.div`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  display:flex;
  border: solid 1px #d3d3d3;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  background-color: #f5f5f5;
`

const Zones = styled.div`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`

const Row = styled.div`
  display:flex;
  justify-content:center;
  width:100%;
  height: 33%;
  display: flex;
`

const ZoneItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border: solid 1px #ccc;
  background-color:#fff;
  width:33%;
`

const Footer = styled.div`
  width: ${props => props.width}px;
  margin-left: 8px; 
  font-size: 0.675rem;
  font-weight:400; 
  line-height: 1.45;
`

const Scale = styled.div`
   display:flex;
   justify-content: space-between;
`

const XTitle = styled.div`
   display:flex;
   justify-content: center;
`

const Chart = (props) => {
  const xRatio = 4
  const yRatio = 5
  const [adjustedWidth, setAdjustedWidth] = useState(0)
  const [innerWidth, setInnerWidth] = useState(0)
  const [innerHeight, setInnerHeight] = useState(0)
  const [firstWidth, setFirstWidth] = useState(0)
  const [firstHeight, setFirstHeight] = useState(0)
  const [secondWidth, setSecondWidth] = useState(0)
  const [secondHeight, setSecondHeight] = useState(0)
  const [showPitch, setShowPitch] = useState('none')
  const [pitchData, setPitchData] = useState({x:0,y:0})

  useEffect(()=> {
    const adjusted = props.height * (xRatio / yRatio)
    setAdjustedWidth(adjusted)
    setFirstHeight(props.height * .75)
    setFirstWidth(adjusted * .75)
    setSecondHeight(props.height * .50)
    setSecondWidth(adjusted * .50)
    setInnerWidth(adjusted * .375)
    setInnerHeight(props.height * .4)

  },[props.height])

  const buildPoints = (data, width, height) => {
    if(!width || !data.length) return
    const xScale =  width / xRatio
    const yScale = height / yRatio
    const centerX = width/2
    const radius  = (width / xRatio) * 0.12
    return data.map((d) => {
      const x = d.x
      const z = d.z
      const scaledX = x >= 0 ? (xScale * Math.abs(x)) + centerX : centerX - (xScale * Math.abs(x))
      const scaledY = height - (z * yScale)
      return (<PlotPoint 
                onHoverOut={onHoverOut}
                onHover={onHover}
                result={d.pitchResult}
                description={d.pitchDescription}
                batter={d.batter}
                key={d.id} 
                pitchCode={d.pitchCode} 
                left={scaledX+radius/2} 
                top={scaledY-radius/2} 
                radius={radius} />)
    })
  }

  const onHover = (e, data) => {
    const x=e.clientX +5
    const	y=e.clientY
  
    setPitchData({...data,x,y})
    setShowPitch('inline-block')
  } 

  const onHoverOut = () => {
    setShowPitch('none')
  }

  return (
    <React.Fragment>
    <Container>
      <Left>
        <div>5</div>
        <div style={{ transform: 'rotate(270deg)'}}>pz</div>
        <div>0</div>
      </Left>
      <Center>
      <PitchChartContainer height={props.height} width={adjustedWidth}>
          <PitchDetail data={pitchData} visible={showPitch} />
          { buildPoints(props.pitches, adjustedWidth, props.height) }
          <FirstLevel width={firstWidth} height={firstHeight}>
            <SecondLevel width={secondWidth} height={secondHeight}>
              <Zones height={innerHeight} width={innerWidth}>
                <Row>
                <ZoneItem>1</ZoneItem>
                <ZoneItem>2</ZoneItem>
                <ZoneItem>3</ZoneItem>
                </Row>
                <Row>
                <ZoneItem>4</ZoneItem>
                <ZoneItem>5</ZoneItem>
                <ZoneItem>6</ZoneItem>
                </Row>
                <Row>
                <ZoneItem>7</ZoneItem>
                <ZoneItem>8</ZoneItem>
                <ZoneItem>9</ZoneItem>
                </Row>
              </Zones>
            </SecondLevel>
          </FirstLevel>
        </PitchChartContainer>
      </Center>
      <Right />
    </Container>
    <Footer width={adjustedWidth}>
      <Scale><div>-2</div><div>0</div> <div>2</div></Scale>
      <XTitle>px</XTitle>
    </Footer>
    </React.Fragment>
  )
}

export default Chart