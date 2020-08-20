import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

import PlotPoint from './plot-point'
import PitchDetail from './pitch-detail'
import Legend from './legend'
import useOnClickOutside from './use-click-outside'
import colorMap from './color-map'

const Container = styled.div`
  background-color: #fff;
  width: ${props=> props.width}px; 
  box-sizing: border-box;
  box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)
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

const PitchChart = (props) => {
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
  const [showLegend, setShowLegend] = useState('none')
  const [legendCoords, setLegendCoords] = useState({x:0,y:0})
  const [legendData, setLegendData] = useState([])
  const ref = useRef()

  useEffect(()=> {
    const adjusted = props.height * (xRatio / yRatio)
    setAdjustedWidth(adjusted)
    setFirstHeight(props.height * .75)
    setFirstWidth(adjusted * .75)
    setSecondHeight(props.height * .50)
    setSecondWidth(adjusted * .50)
    setInnerWidth(adjusted * .375)
    setInnerHeight(props.height * .4)
    const seenBefore = {}
    const legend = props.data.pitches.reduce((memo, d) => {
      if(!seenBefore[d.pitchCode]) {
        seenBefore[d.pitchCode] = true
        memo.push({key: d.pitchCode, color: colorMap[d.pitchCode], description:d.pitchDescription})
      }
      return memo
    },[])
    setLegendData(legend)

  },[props.height, props.data])

  const onHover = (e, data) => {
    const x=e.clientX +5
    const	y=e.clientY
  
   setPitchData({...data,x,y})
   setShowPitch('inline-block')
  } 

  const onHoverOut = () => {
    setShowPitch('none')
  }

  const displayLegend = (e) => {
    const x=e.clientX
    const	y=e.clientY
    setLegendCoords({x,y})
    setShowLegend('inline-block')
  }

  useOnClickOutside(ref, () => showLegend === 'inline-block' ? setShowLegend('none') : null)


  const buildPoints = (data, width, height) => {
    
    if(!width || !data.length) return
    const xScale =  width / xRatio
		const yScale = height / yRatio
    const centerX = width/2
    const radius  = (width / xRatio) * 0.12//8
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

  return (

<Container>
<Legend display={showLegend} coords={legendCoords} data={legendData} />
 <div style={{display:'flex', padding: '8px', alignItems:'center'}}>
   <ImageWrapper>
     <ImageBase src={props.data.headShot}/>
   </ImageWrapper>
     <div style={{fontSize:'0.875rem', flex:'1 1 auto', fontWeight:400, lineHeight:'1.43', margin:'8px'}}>{props.data.pitcher} #{props.data.number}
     <div style={{fontSize:'0.675rem', fontWeight:400, lineHeight:'1.43'}}> {props.data.title}</div>
     </div>
     <div onClick={displayLegend} style={{ cursor:'pointer', width:'42px' }}>
     <svg  width='1em' height='1em' focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
     </div>
   </div>
   <div style={{display:'flex', justifyContent:'center', fontSize:'0.675rem', fontWeight:400, lineHeight:'1.43'}}>
<div style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
<div>5</div>
<div style={{ transform: 'rotate(270deg)'}}>pz</div>
<div>0</div>
</div>
<div ref={ref} style={{display:'display', flexDirection:'column'}}>
    <PitchChartContainer height={props.height} width={adjustedWidth}>
      <PitchDetail 
        data={pitchData}
       visible={showPitch} />
    { buildPoints(props.data.pitches, adjustedWidth, props.height) }
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
    </div>
    <div style={{width:'11px'}}></div>
    </div>
    <div style={{width: `${adjustedWidth}px`, marginLeft:'8px', fontSize:'0.675rem', fontWeight:400, lineHeight:'1.43'}}>
    <div style={{display:'flex', justifyContent:'space-between'}}><div>-2</div><div>0</div> <div>2</div></div>
    <div style={{display:'flex', justifyContent:'center'}}>px</div>
    </div>
    </Container>
  )
}

export default PitchChart