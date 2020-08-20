import React from 'react'
import styles from './styles.module.css'
import PitchChart from './pitch-chart'
const data = { 
  pitcher: 'Chris Sale',
  number: 41,
  title: '2019-05-03 @ CHW',
  headShot: 'https://images.fantasypros.com/images/players/mlb/3207/headshot/500x500.webp',
  pitches:[
  {
    "id": "1:BOTTOM:1:0:8:25",
    "zone": 5,
    "x": 0.16,
    "z": 2.28,
    "pitchDescription": "Two-seam FB/Sinker",
    "pitchCode": "FT/SI",
    "pitchResult": "Strike - Called",
    "batter": "Leury Garcia"
  },
  {
    "id": "1:BOTTOM:1:0:8:26",
    "zone": 14,
    "x": 2.03,
    "z": 1.72,
    "pitchDescription": "Slider",
    "pitchCode": "SL",
    "pitchResult": "Ball - Called",
    "batter": "Leury Garcia"
  },
  {
    "id": "1:BOTTOM:1:0:8:27",
    "zone": 5,
    "x": 0.2,
    "z": 2.58,
    "pitchDescription": "Changeup",
    "pitchCode": "CH",
    "pitchResult": "Strike - Swinging",
    "batter": "Leury Garcia"
  },
  {
    "id": "1:BOTTOM:1:0:8:28",
    "zone": 7,
    "x": -0.55,
    "z": 1.85,
    "pitchDescription": "Slider",
    "pitchCode": "SL",
    "pitchResult": "Strike - Foul",
    "batter": "Leury Garcia"
  },
  {
    "id": "1:BOTTOM:1:0:8:29",
    "zone": 7,
    "x": -0.64,
    "z": 2.08,
    "pitchDescription": "Four-seam FB",
    "pitchCode": "FF",
    "pitchResult": "Strike - Called  Leury García called out on strikes.",
    "batter": "Leury Garcia"
  },
  {
    "id": "1:BOTTOM:2:0:9:30",
    "zone": 13,
    "x": -0.74,
    "z": 2.24,
    "pitchDescription": "Two-seam FB/Sinker",
    "pitchCode": "FT/SI",
    "pitchResult": "Ball - Called",
    "batter": "Tim Anderson"
  },
  {
    "id": "1:BOTTOM:2:0:9:31",
    "zone": 12,
    "x": 1.29,
    "z": 2.57,
    "pitchDescription": "Changeup",
    "pitchCode": "CH",
    "pitchResult": "Strike - Foul",
    "batter": "Tim Anderson"
  },
  {
    "id": "1:BOTTOM:2:0:9:32",
    "zone": 13,
    "x": -1.49,
    "z": 2.2,
    "pitchDescription": "Four-seam FB",
    "pitchCode": "FF",
    "pitchResult": "Ball - Called",
    "batter": "Tim Anderson"
  },
  {
    "id": "1:BOTTOM:2:0:9:33",
    "zone": 7,
    "x": -0.41,
    "z": 1.88,
    "pitchDescription": "Two-seam FB/Sinker",
    "pitchCode": "FT/SI",
    "pitchResult": "Hit Into Play - Out(s)  Tim Anderson grounds out to shortstop, Xander Bogaerts to Mitch Moreland.",
    "batter": "Tim Anderson"
  },
  {
    "id": "1:BOTTOM:3:0:10:34",
    "zone": 13,
    "x": -0.71,
    "z": 1.18,
    "pitchDescription": "Slider",
    "pitchCode": "SL",
    "pitchResult": "Ball - Called",
    "batter": "Jose Abreu"
  },
  {
    "id": "1:BOTTOM:3:0:10:35",
    "zone": 7,
    "x": -0.68,
    "z": 1.64,
    "pitchDescription": "Four-seam FB",
    "pitchCode": "FF",
    "pitchResult": "Strike - Called",
    "batter": "Jose Abreu"
  },
  {
    "id": "1:BOTTOM:3:0:10:36",
    "zone": 8,
    "x": 0.13,
    "z": 1.92,
    "pitchDescription": "Slider",
    "pitchCode": "SL",
    "pitchResult": "Strike - Foul",
    "batter": "Jose Abreu"
  },
  {
    "id": "1:BOTTOM:3:0:10:37",
    "zone": 11,
    "x": -1.09,
    "z": 3.04,
    "pitchDescription": "Four-seam FB",
    "pitchCode": "FF",
    "pitchResult": "Ball - Called",
    "batter": "Jose Abreu"
  },
  {
    "id": "1:BOTTOM:3:0:10:38",
    "zone": 13,
    "x": -1.14,
    "z": 1.8,
    "pitchDescription": "Four-seam FB",
    "pitchCode": "FF",
    "pitchResult": "Ball - Called",
    "batter": "Jose Abreu"
  },
  {
    "id": "1:BOTTOM:3:0:10:39",
    "zone": 11,
    "x": -0.96,
    "z": 2.78,
    "pitchDescription": "Slider",
    "pitchCode": "SL",
    "pitchResult": "Strike - Foul",
    "batter": "Jose Abreu"
  },
  {
    "id": "1:BOTTOM:3:0:10:40",
    "zone": 2,
    "x": -0.15,
    "z": 2.94,
    "pitchDescription": "Four-seam FB",
    "pitchCode": "FF",
    "pitchResult": "Strike - Foul",
    "batter": "Jose Abreu"
  },
  {
    "id": "1:BOTTOM:3:0:10:41",
    "zone": 2,
    "x": 0.23,
    "z": 3.04,
    "pitchDescription": "Four-seam FB",
    "pitchCode": "FF",
    "pitchResult": "Strike - Foul",
    "batter": "Jose Abreu"
  },
  {
    "id": "1:BOTTOM:3:0:10:42",
    "zone": 12,
    "x": 1.9,
    "z": 2.98,
    "pitchDescription": "Two-seam FB/Sinker",
    "pitchCode": "FT/SI",
    "pitchResult": "Ball - Called  José Abreu walks.",
    "batter": "Jose Abreu"
  },
  {
    "id": "1:BOTTOM:4:0:11:43",
    "zone": 6,
    "x": 0.41,
    "z": 2.71,
    "pitchDescription": "Changeup",
    "pitchCode": "CH",
    "pitchResult": "Strike - Called",
    "batter": "James McCann"
  },
  {
    "id": "1:BOTTOM:4:0:11:44",
    "zone": 14,
    "x": 1.24,
    "z": 2.1,
    "pitchDescription": "Slider",
    "pitchCode": "SL",
    "pitchResult": "Ball - Called",
    "batter": "James McCann"
  },
  {
    "id": "1:BOTTOM:4:0:11:45",
    "zone": 11,
    "x": -0.85,
    "z": 3.18,
    "pitchDescription": "Four-seam FB",
    "pitchCode": "FF",
    "pitchResult": "Strike - Foul",
    "batter": "James McCann"
  },
  {
    "id": "1:BOTTOM:4:0:11:46",
    "zone": 14,
    "x": 0.97,
    "z": 1.6,
    "pitchDescription": "Slider",
    "pitchCode": "SL",
    "pitchResult": "Ball - Called",
    "batter": "James McCann"
  },
  {
    "id": "1:BOTTOM:4:0:11:47",
    "zone": 8,
    "x": -0.1,
    "z": 2,
    "pitchDescription": "Slider",
    "pitchCode": "SL",
    "pitchResult": "Strike - Swinging  James McCann strikes out swinging.",
    "batter": "James McCann"
  },
  {
    "id": "2:BOTTOM:5:0:18:69",
    "zone": 12,
    "x": 1.49,
    "z": 2.68,
    "pitchDescription": "Two-seam FB/Sinker",
    "pitchCode": "FT/SI",
    "pitchResult": "Ball - Called",
    "batter": "Yoan Moncada"
  },
  {
    "id": "2:BOTTOM:5:0:18:70",
    "zone": 12,
    "x": 0.06,
    "z": 3.49,
    "pitchDescription": "Changeup",
    "pitchCode": "CH",
    "pitchResult": "Strike - Called",
    "batter": "Yoan Moncada"
  },
  {
    "id": "2:BOTTOM:5:0:18:71",
    "zone": 4,
    "x": -0.56,
    "z": 2.42,
    "pitchDescription": "Four-seam FB",
    "pitchCode": "FF",
    "pitchResult": "Strike - Called",
    "batter": "Yoan Moncada"
  },
  {
    "id": "2:BOTTOM:5:0:18:72",
    "zone": 2,
    "x": -0.03,
    "z": 3.01,
    "pitchDescription": "Four-seam FB",
    "pitchCode": "FF",
    "pitchResult": "Hit Into Play - Out(s)  Yoán Moncada grounds out to second base, Michael Chavis to Mitch Moreland.",
    "batter": "Yoan Moncada"
  },
  {
    "id": "2:BOTTOM:6:0:19:73",
    "zone": 6,
    "x": 0.52,
    "z": 2.36,
    "pitchDescription": "Changeup",
    "pitchCode": "CH",
    "pitchResult": "Strike - Called",
    "batter": "Jose Rondon"
  },
  {
    "id": "2:BOTTOM:6:0:19:74",
    "zone": 8,
    "x": 0.13,
    "z": 1.76,
    "pitchDescription": "Slider",
    "pitchCode": "SL",
    "pitchResult": "Strike - Foul",
    "batter": "Jose Rondon"
  },
  {
    "id": "2:BOTTOM:6:0:19:75",
    "zone": 2,
    "x": 0.04,
    "z": 2.98,
    "pitchDescription": "Four-seam FB",
    "pitchCode": "FF",
    "pitchResult": "Hit Into Play - Out(s)  José Rondón lines out to second base to Michael Chavis.",
    "batter": "Jose Rondon"
  },
  {
    "id": "2:BOTTOM:7:0:20:76",
    "zone": 12,
    "x": 0.91,
    "z": 3.07,
    "pitchDescription": "Two-seam FB/Sinker",
    "pitchCode": "FT/SI",
    "pitchResult": "Strike - Swinging",
    "batter": "Welington Castillo"
  },
  {
    "id": "2:BOTTOM:7:0:20:77",
    "zone": 12,
    "x": 0.15,
    "z": 3.35,
    "pitchDescription": "Four-seam FB",
    "pitchCode": "FF",
    "pitchResult": "Strike - Foul",
    "batter": "Welington Castillo"
  },
  {
    "id": "2:BOTTOM:7:0:20:78",
    "zone": 13,
    "x": -1,
    "z": 1.6,
    "pitchDescription": "Four-seam FB",
    "pitchCode": "FF",
    "pitchResult": "Ball - Called",
    "batter": "Welington Castillo"
  },
  {
    "id": "2:BOTTOM:7:0:20:79",
    "zone": 13,
    "x": -0.61,
    "z": 1.3,
    "pitchDescription": "Slider",
    "pitchCode": "SL",
    "pitchResult": "Strike - Swinging  Welington Castillo strikes out swinging.",
    "batter": "Welington Castillo"
  },
  {
    "id": "3:BOTTOM:1:0:26:98",
    "zone": 6,
    "x": 0.3,
    "z": 2.33,
    "pitchDescription": "Changeup",
    "pitchCode": "CH",
    "pitchResult": "Hit Into Play - Out(s)  Leury García reaches on a fielder's choice to third base, advances to 2nd. Adam Engel out at second. Throwing error by Michael Chavis.",
    "batter": "Leury Garcia"
  },
  {
    "id": "3:BOTTOM:2:0:27:100",
    "zone": 11,
    "x": -0.89,
    "z": 2.67,
    "pitchDescription": "Four-seam FB",
    "pitchCode": "FF",
    "pitchResult": "Hit Into Play - Out(s)",
    "batter": "Tim Anderson"
  },
  {
    "id": "3:BOTTOM:2:0:27:99",
    "zone": 8,
    "x": -0.08,
    "z": 1.96,
    "pitchDescription": "Slider",
    "pitchCode": "SL",
    "pitchResult": "Strike - Foul  Tim Anderson pops out to first base to Mitch Moreland.",
    "batter": "Tim Anderson"
  },
  {
    "id": "3:BOTTOM:8:0:24:91",
    "zone": 3,
    "x": 0.35,
    "z": 3.16,
    "pitchDescription": "Slider",
    "pitchCode": "SL",
    "pitchResult": "Strike - Called",
    "batter": "Ryan Cordell"
  },
  {
    "id": "3:BOTTOM:8:0:24:92",
    "zone": 13,
    "x": -0.3,
    "z": 0.8,
    "pitchDescription": "Slider",
    "pitchCode": "SL",
    "pitchResult": "Ball - Called",
    "batter": "Ryan Cordell"
  },
  {
    "id": "3:BOTTOM:8:0:24:93",
    "zone": 13,
    "x": -1.27,
    "z": 1.91,
    "pitchDescription": "Slider",
    "pitchCode": "SL",
    "pitchResult": "Strike - Foul",
    "batter": "Ryan Cordell"
  },
  {
    "id": "3:BOTTOM:8:0:24:94",
    "zone": 3,
    "x": 0.25,
    "z": 3.02,
    "pitchDescription": "Four-seam FB",
    "pitchCode": "FF",
    "pitchResult": "Strike - Foul",
    "batter": "Ryan Cordell"
  },
  {
    "id": "3:BOTTOM:8:0:24:95",
    "zone": 11,
    "x": -0.07,
    "z": 3.58,
    "pitchDescription": "Four-seam FB",
    "pitchCode": "FF",
    "pitchResult": "Strike - Swinging  Ryan Cordell strikes out swinging.",
    "batter": "Ryan Cordell"
  },
  {
    "id": "3:BOTTOM:9:0:25:96",
    "zone": 13,
    "x": -0.42,
    "z": 1.52,
    "pitchDescription": "Slider",
    "pitchCode": "SL",
    "pitchResult": "Strike - Swinging",
    "batter": "Adam Engel"
  },
  {
    "id": "3:BOTTOM:9:0:25:97",
    "zone": 11,
    "x": -1.47,
    "z": 3.86,
    "pitchDescription": "Four-seam FB",
    "pitchCode": "FF",
    "pitchResult": "Ball - Hit by Pitch  Adam Engel hit by pitch.",
    "batter": "Adam Engel"
  },
  {
    "id": "4:BOTTOM:3:0:32:121",
    "zone": 13,
    "x": -1.15,
    "z": 0.92,
    "pitchDescription": "Slider",
    "pitchCode": "SL",
    "pitchResult": "Ball - Called",
    "batter": "Jose Abreu"
  },
  {
    "id": "4:BOTTOM:3:0:32:122",
    "zone": 7,
    "x": -0.47,
    "z": 1.76,
    "pitchDescription": "Changeup",
    "pitchCode": "CH",
    "pitchResult": "Strike - Called",
    "batter": "Jose Abreu"
  },
  {
    "id": "4:BOTTOM:3:0:32:123",
    "zone": 2,
    "x": -0.1,
    "z": 2.87,
    "pitchDescription": "Slider",
    "pitchCode": "SL",
    "pitchResult": "Strike - Called",
    "batter": "Jose Abreu"
  },
  {
    "id": "4:BOTTOM:3:0:32:124",
    "zone": 13,
    "x": -0.96,
    "z": 2.19,
    "pitchDescription": "Two-seam FB/Sinker",
    "pitchCode": "FT/SI",
    "pitchResult": "Ball - Called",
    "batter": "Jose Abreu"
  },
  {
    "id": "4:BOTTOM:3:0:32:125",
    "zone": 5,
    "x": -0.11,
    "z": 2.54,
    "pitchDescription": "Four-seam FB",
    "pitchCode": "FF",
    "pitchResult": "Hit Into Play - Out(s)  José Abreu grounds out to shortstop, Xander Bogaerts to Mitch Moreland.",
    "batter": "Jose Abreu"
  },
  {
    "id": "4:BOTTOM:4:0:33:126",
    "zone": 12,
    "x": 1.17,
    "z": 3.3,
    "pitchDescription": "Two-seam FB/Sinker",
    "pitchCode": "FT/SI",
    "pitchResult": "Ball - Called",
    "batter": "James McCann"
  },
  {
    "id": "4:BOTTOM:4:0:33:127",
    "zone": 13,
    "x": -1.31,
    "z": 2.24,
    "pitchDescription": "Four-seam FB",
    "pitchCode": "FF",
    "pitchResult": "Ball - Called",
    "batter": "James McCann"
  },
  {
    "id": "4:BOTTOM:4:0:33:128",
    "zone": 12,
    "x": 1.24,
    "z": 4.06,
    "pitchDescription": "Changeup",
    "pitchCode": "CH",
    "pitchResult": "Ball - Called",
    "batter": "James McCann"
  },
  {
    "id": "4:BOTTOM:4:0:33:129",
    "zone": 1,
    "x": -0.42,
    "z": 3.16,
    "pitchDescription": "Four-seam FB",
    "pitchCode": "FF",
    "pitchResult": "Strike - Called",
    "batter": "James McCann"
  },
  {
    "id": "4:BOTTOM:4:0:33:130",
    "zone": 14,
    "x": 0.72,
    "z": 2.34,
    "pitchDescription": "Two-seam FB/Sinker",
    "pitchCode": "FT/SI",
    "pitchResult": "Strike - Swinging",
    "batter": "James McCann"
  },
  {
    "id": "4:BOTTOM:4:0:33:131",
    "zone": 13,
    "x": -0.59,
    "z": 1.21,
    "pitchDescription": "Slider",
    "pitchCode": "SL",
    "pitchResult": "Strike - Foul",
    "batter": "James McCann"
  },
  {
    "id": "4:BOTTOM:4:0:33:132",
    "zone": 3,
    "x": 0.3,
    "z": 3.04,
    "pitchDescription": "Four-seam FB",
    "pitchCode": "FF",
    "pitchResult": "Strike - Foul",
    "batter": "James McCann"
  },
  {
    "id": "4:BOTTOM:4:0:33:133",
    "zone": 11,
    "x": -0.81,
    "z": 2.52,
    "pitchDescription": "Four-seam FB",
    "pitchCode": "FF",
    "pitchResult": "Strike - Foul",
    "batter": "James McCann"
  },
  {
    "id": "4:BOTTOM:4:0:33:134",
    "zone": 5,
    "x": -0.18,
    "z": 2.53,
    "pitchDescription": "Slider",
    "pitchCode": "SL",
    "pitchResult": "Strike - Foul",
    "batter": "James McCann"
  },
  {
    "id": "4:BOTTOM:4:0:33:135",
    "zone": 12,
    "x": 0.5,
    "z": 3.45,
    "pitchDescription": "Slider",
    "pitchCode": "SL",
    "pitchResult": "Strike - Called  James McCann called out on strikes.",
    "batter": "James McCann"
  },
  {
    "id": "4:BOTTOM:5:0:34:136",
    "zone": 5,
    "x": -0.01,
    "z": 2.2,
    "pitchDescription": "Changeup",
    "pitchCode": "CH",
    "pitchResult": "Strike - Called",
    "batter": "Yoan Moncada"
  },
  {
    "id": "4:BOTTOM:5:0:34:137",
    "zone": 7,
    "x": -0.36,
    "z": 1.81,
    "pitchDescription": "Four-seam FB",
    "pitchCode": "FF",
    "pitchResult": "Strike - Called",
    "batter": "Yoan Moncada"
  },
  {
    "id": "4:BOTTOM:5:0:34:138",
    "zone": 14,
    "x": 1.57,
    "z": 1.06,
    "pitchDescription": "Slider",
    "pitchCode": "SL",
    "pitchResult": "Ball - Called",
    "batter": "Yoan Moncada"
  },
  {
    "id": "4:BOTTOM:5:0:34:139",
    "zone": 5,
    "x": -0.19,
    "z": 2.39,
    "pitchDescription": "Four-seam FB",
    "pitchCode": "FF",
    "pitchResult": "Hit Into Play - No Out(s)  Yoán Moncada singles to center field.",
    "batter": "Yoan Moncada"
  },
  {
    "id": "4:BOTTOM:6:0:35:140",
    "zone": 8,
    "x": -0.19,
    "z": 1.77,
    "pitchDescription": "Slider",
    "pitchCode": "SL",
    "pitchResult": "Strike - Foul",
    "batter": "Jose Rondon"
  },
  {
    "id": "4:BOTTOM:6:0:35:141",
    "zone": 14,
    "x": 1.12,
    "z": 1.57,
    "pitchDescription": "Slider",
    "pitchCode": "SL",
    "pitchResult": "Ball - Called",
    "batter": "Jose Rondon"
  },
  {
    "id": "4:BOTTOM:6:0:35:142",
    "zone": 13,
    "x": -1.06,
    "z": 2.35,
    "pitchDescription": "Slider",
    "pitchCode": "SL",
    "pitchResult": "Ball - Called",
    "batter": "Jose Rondon"
  },
  {
    "id": "4:BOTTOM:6:0:35:143",
    "zone": 12,
    "x": 1.76,
    "z": 2.76,
    "pitchDescription": "Changeup",
    "pitchCode": "CH",
    "pitchResult": "Ball - Called  ",
    "batter": "Jose Rondon"
  },
  {
    "id": "5:BOTTOM:1:0:44:174",
    "zone": 14,
    "x": 0.36,
    "z": 1.4,
    "pitchDescription": "Two-seam FB/Sinker",
    "pitchCode": "FT/SI",
    "pitchResult": "Ball - Called",
    "batter": "Leury Garcia"
  },
  {
    "id": "5:BOTTOM:1:0:44:175",
    "zone": 14,
    "x": 1.34,
    "z": 1.53,
    "pitchDescription": "Two-seam FB/Sinker",
    "pitchCode": "FT/SI",
    "pitchResult": "Ball - Called",
    "batter": "Leury Garcia"
  },
  {
    "id": "5:BOTTOM:1:0:44:176",
    "zone": 12,
    "x": 0.41,
    "z": 3.32,
    "pitchDescription": "Changeup",
    "pitchCode": "CH",
    "pitchResult": "Strike - Called",
    "batter": "Leury Garcia"
  },
  {
    "id": "5:BOTTOM:1:0:44:177",
    "zone": 12,
    "x": 0.88,
    "z": 3.04,
    "pitchDescription": "Slider",
    "pitchCode": "SL",
    "pitchResult": "Strike - Called",
    "batter": "Leury Garcia"
  },
  {
    "id": "5:BOTTOM:1:0:44:178",
    "zone": 5,
    "x": 0.03,
    "z": 2.41,
    "pitchDescription": "Four-seam FB",
    "pitchCode": "FF",
    "pitchResult": "Strike - Swinging  Leury García strikes out swinging.",
    "batter": "Leury Garcia"
  },
  {
    "id": "5:BOTTOM:6:0:40:162",
    "zone": 8,
    "x": 0.2,
    "z": 1.91,
    "pitchDescription": "Four-seam FB",
    "pitchCode": "FF",
    "pitchResult": "Strike - Called",
    "batter": "Jose Rondon"
  },
  {
    "id": "5:BOTTOM:6:0:40:163",
    "zone": 13,
    "x": -1.57,
    "z": 2.29,
    "pitchDescription": "Four-seam FB",
    "pitchCode": "FF",
    "pitchResult": "Ball - Called",
    "batter": "Jose Rondon"
  },
  {
    "id": "5:BOTTOM:6:0:40:164",
    "zone": 1,
    "x": -0.25,
    "z": 2.8,
    "pitchDescription": "Four-seam FB",
    "pitchCode": "FF",
    "pitchResult": "Hit Into Play - No Out(s)  José Rondón doubles to deep right field.",
    "batter": "Jose Rondon"
  },
  {
    "id": "5:BOTTOM:7:0:41:165",
    "zone": 5,
    "x": -0.22,
    "z": 2.63,
    "pitchDescription": "Two-seam FB/Sinker",
    "pitchCode": "FT/SI",
    "pitchResult": "Strike - Called",
    "batter": "Welington Castillo"
  },
  {
    "id": "5:BOTTOM:7:0:41:166",
    "zone": 13,
    "x": -2.55,
    "z": -0.14,
    "pitchDescription": "Slider",
    "pitchCode": "SL",
    "pitchResult": "Ball - Hit by Pitch  Welington Castillo hit by pitch.",
    "batter": "Welington Castillo"
  },
  {
    "id": "5:BOTTOM:8:0:42:167",
    "zone": 11,
    "x": -1.11,
    "z": 2.95,
    "pitchDescription": "Slider",
    "pitchCode": "SL",
    "pitchResult": "Ball - Called",
    "batter": "Ryan Cordell"
  },
  {
    "id": "5:BOTTOM:8:0:42:168",
    "zone": 7,
    "x": -0.61,
    "z": 1.99,
    "pitchDescription": "Slider",
    "pitchCode": "SL",
    "pitchResult": "Strike - Called",
    "batter": "Ryan Cordell"
  },
  {
    "id": "5:BOTTOM:8:0:42:169",
    "zone": 4,
    "x": -0.3,
    "z": 2.85,
    "pitchDescription": "Four-seam FB",
    "pitchCode": "FF",
    "pitchResult": "Strike - Swinging",
    "batter": "Ryan Cordell"
  },
  {
    "id": "5:BOTTOM:8:0:42:170",
    "zone": 6,
    "x": 0.69,
    "z": 2.73,
    "pitchDescription": "Slider",
    "pitchCode": "SL",
    "pitchResult": "Strike - Called  Ryan Cordell called out on strikes.",
    "batter": "Ryan Cordell"
  },
  {
    "id": "5:BOTTOM:9:0:43:171",
    "zone": 6,
    "x": 0.59,
    "z": 2.41,
    "pitchDescription": "Slider",
    "pitchCode": "SL",
    "pitchResult": "Strike - Called",
    "batter": "Adam Engel"
  },
  {
    "id": "5:BOTTOM:9:0:43:172",
    "zone": 13,
    "x": -0.16,
    "z": 1.48,
    "pitchDescription": "Slider",
    "pitchCode": "SL",
    "pitchResult": "Strike - Foul",
    "batter": "Adam Engel"
  },
  {
    "id": "5:BOTTOM:9:0:43:173",
    "zone": 12,
    "x": 0.66,
    "z": 3.55,
    "pitchDescription": "Four-seam FB",
    "pitchCode": "FF",
    "pitchResult": "Strike - Swinging  Adam Engel strikes out swinging.",
    "batter": "Adam Engel"
  },
  {
    "id": "6:BOTTOM:2:0:54:212",
    "zone": 6,
    "x": 0.55,
    "z": 2.49,
    "pitchDescription": "Two-seam FB/Sinker",
    "pitchCode": "FT/SI",
    "pitchResult": "Strike - Called",
    "batter": "Tim Anderson"
  },
  {
    "id": "6:BOTTOM:2:0:54:213",
    "zone": 2,
    "x": 0.06,
    "z": 3.12,
    "pitchDescription": "Four-seam FB",
    "pitchCode": "FF",
    "pitchResult": "Strike - Foul",
    "batter": "Tim Anderson"
  },
  {
    "id": "6:BOTTOM:2:0:54:214",
    "zone": 13,
    "x": -1.31,
    "z": -0.47,
    "pitchDescription": "Slider",
    "pitchCode": "SL",
    "pitchResult": "Ball - Called",
    "batter": "Tim Anderson"
  },
  {
    "id": "6:BOTTOM:2:0:54:215",
    "zone": 13,
    "x": -2.25,
    "z": 0.15,
    "pitchDescription": "Slider",
    "pitchCode": "SL",
    "pitchResult": "Strike - Swinging Blocked  Tim Anderson strikes out swinging.",
    "batter": "Tim Anderson"
  },
  {
    "id": "6:BOTTOM:3:0:55:216",
    "zone": 8,
    "x": -0.16,
    "z": 1.74,
    "pitchDescription": "Two-seam FB/Sinker",
    "pitchCode": "FT/SI",
    "pitchResult": "Strike - Called",
    "batter": "Jose Abreu"
  },
  {
    "id": "6:BOTTOM:3:0:55:217",
    "zone": 11,
    "x": -0.17,
    "z": 3.75,
    "pitchDescription": "Four-seam FB",
    "pitchCode": "FF",
    "pitchResult": "Strike - Swinging",
    "batter": "Jose Abreu"
  },
  {
    "id": "6:BOTTOM:3:0:55:218",
    "zone": 14,
    "x": 1.11,
    "z": 1.66,
    "pitchDescription": "Slider",
    "pitchCode": "SL",
    "pitchResult": "Ball - Called",
    "batter": "Jose Abreu"
  },
  {
    "id": "6:BOTTOM:3:0:55:219",
    "zone": 4,
    "x": -0.45,
    "z": 2.39,
    "pitchDescription": "Four-seam FB",
    "pitchCode": "FF",
    "pitchResult": "Strike - Foul",
    "batter": "Jose Abreu"
  },
  {
    "id": "6:BOTTOM:3:0:55:220",
    "zone": 9,
    "x": 0.62,
    "z": 1.97,
    "pitchDescription": "Changeup",
    "pitchCode": "CH",
    "pitchResult": "Hit Into Play - Out(s)  José Abreu grounds out to shortstop, Xander Bogaerts to Mitch Moreland.",
    "batter": "Jose Abreu"
  },
  {
    "id": "6:BOTTOM:4:0:56:221",
    "zone": 1,
    "x": -0.67,
    "z": 2.81,
    "pitchDescription": "Slider",
    "pitchCode": "SL",
    "pitchResult": "Ball - Called",
    "batter": "James McCann"
  },
  {
    "id": "6:BOTTOM:4:0:56:222",
    "zone": 13,
    "x": -1.12,
    "z": 2.29,
    "pitchDescription": "Changeup",
    "pitchCode": "CH",
    "pitchResult": "Ball - Called",
    "batter": "James McCann"
  },
  {
    "id": "6:BOTTOM:4:0:56:223",
    "zone": 14,
    "x": 0.63,
    "z": 1.53,
    "pitchDescription": "Two-seam FB/Sinker",
    "pitchCode": "FT/SI",
    "pitchResult": "Strike - Foul",
    "batter": "James McCann"
  },
  {
    "id": "6:BOTTOM:4:0:56:224",
    "zone": 7,
    "x": -0.32,
    "z": 1.82,
    "pitchDescription": "Changeup",
    "pitchCode": "CH",
    "pitchResult": "Strike - Called",
    "batter": "James McCann"
  },
  {
    "id": "6:BOTTOM:4:0:56:225",
    "zone": 12,
    "x": 2.33,
    "z": 2.61,
    "pitchDescription": "Slider",
    "pitchCode": "SL",
    "pitchResult": "Ball - Called",
    "batter": "James McCann"
  },
  {
    "id": "6:BOTTOM:4:0:56:226",
    "zone": 2,
    "x": -0.18,
    "z": 3.01,
    "pitchDescription": "Slider",
    "pitchCode": "SL",
    "pitchResult": "Hit Into Play - No Out(s)  James McCann doubles to third base.",
    "batter": "James McCann"
  },
  {
    "id": "6:BOTTOM:5:0:57:227",
    "zone": 3,
    "x": 0.65,
    "z": 2.83,
    "pitchDescription": "Changeup",
    "pitchCode": "CH",
    "pitchResult": "Strike - Foul",
    "batter": "Yoan Moncada"
  },
  {
    "id": "6:BOTTOM:5:0:57:228",
    "zone": 14,
    "x": 0.74,
    "z": 1.76,
    "pitchDescription": "Changeup",
    "pitchCode": "CH",
    "pitchResult": "Strike - Swinging",
    "batter": "Yoan Moncada"
  },
  {
    "id": "6:BOTTOM:5:0:57:229",
    "zone": 12,
    "x": 2.09,
    "z": 4.72,
    "pitchDescription": "Four-seam FB",
    "pitchCode": "FF",
    "pitchResult": "Ball - Called",
    "batter": "Yoan Moncada"
  },
  {
    "id": "6:BOTTOM:5:0:57:230",
    "zone": 9,
    "x": 0.58,
    "z": 1.55,
    "pitchDescription": "Slider",
    "pitchCode": "SL",
    "pitchResult": "Ball - Called",
    "batter": "Yoan Moncada"
  },
  {
    "id": "6:BOTTOM:5:0:57:231",
    "zone": 14,
    "x": 0.9,
    "z": 1.93,
    "pitchDescription": "Slider",
    "pitchCode": "SL",
    "pitchResult": "Strike - Called  Yoán Moncada called out on strikes.",
    "batter": "Yoan Moncada"
  }
]
}

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>
  <PitchChart data={data} height={300}></PitchChart>
  </div>
}
