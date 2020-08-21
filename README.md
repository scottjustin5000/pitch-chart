# pitch-chart

> simple chart for plotting mlb pitching x,z
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Usage

```jsx
import React from 'react'

import PitchChart from 'pitch-chart'

const Example = ()=> {
  return{
    <PitchChart={data} height={300} />
  }
}
```
data is expected to be in the following structure:

```
{
  pitcher: 'Some Pitcher',
  number: 33,
  title: '2019-04-15 @ BOS',
  headShot: 'https://images.png',
  pitches: [ {
      "id": "1",
      "zone": 1,
      "x": -0.47,
      "z": 3.02,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Strike - Called",
      "batter": "Joc Pederson"
    }, ...]
}
```
