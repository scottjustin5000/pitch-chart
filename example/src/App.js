import React from 'react'
import { PitchChart } from 'pitch-chart'
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

const data2 = {
  pitcher: 'Clayton Kershaw',
  number: 22,
  title: '2020-08-14 @ LAA',
  headShot: 'https://images.fantasypros.com/images/players/mlb/3215/headshot/500x500.webp',
  pitches: [
    {
      "id": "1:BOTTOM:1:0:6:19:p",
      "zone": 4,
      "x": -0.7,
      "z": 2.67,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Strike - Called",
      "batter": "Ketel Marte"
    },
    {
      "id": "1:BOTTOM:1:0:6:20:p",
      "zone": 13,
      "x": -0.45,
      "z": 0.47,
      "pitchDescription": "Slider",
      "pitchCode": "SL",
      "pitchResult": "Ball - Called",
      "batter": "Ketel Marte"
    },
    {
      "id": "1:BOTTOM:1:0:6:21:p",
      "zone": 12,
      "x": 1.04,
      "z": 2.74,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Strike - Called",
      "batter": "Ketel Marte"
    },
    {
      "id": "1:BOTTOM:1:0:6:22:p",
      "zone": 13,
      "x": -1.25,
      "z": -0.04,
      "pitchDescription": "Slider",
      "pitchCode": "SL",
      "pitchResult": "Ball - Called",
      "batter": "Ketel Marte"
    },
    {
      "id": "1:BOTTOM:1:0:6:23:p",
      "zone": 9,
      "x": 0.69,
      "z": 1.87,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Strike - Called  Ketel Marte called out on strikes.",
      "batter": "Ketel Marte"
    },
    {
      "id": "1:BOTTOM:2:0:7:24:p",
      "zone": 13,
      "x": -0.74,
      "z": 1.48,
      "pitchDescription": "Slider",
      "pitchCode": "SL",
      "pitchResult": "Strike - Called",
      "batter": "Starling Marte"
    },
    {
      "id": "1:BOTTOM:2:0:7:25:p",
      "zone": 9,
      "x": 0.55,
      "z": 2.14,
      "pitchDescription": "Curveball",
      "pitchCode": "CU",
      "pitchResult": "Strike - Swinging",
      "batter": "Starling Marte"
    },
    {
      "id": "1:BOTTOM:2:0:7:26:p",
      "zone": 8,
      "x": -0.05,
      "z": 1.58,
      "pitchDescription": "Slider",
      "pitchCode": "SL",
      "pitchResult": "Strike - Swinging  Starling Marte strikes out swinging.",
      "batter": "Starling Marte"
    },
    {
      "id": "1:BOTTOM:3:0:8:27:p",
      "zone": 14,
      "x": 2.28,
      "z": 2.1,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Ball - Called",
      "batter": "Christian Walker"
    },
    {
      "id": "1:BOTTOM:3:0:8:28:p",
      "zone": 3,
      "x": 0.58,
      "z": 2.86,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Strike - Called",
      "batter": "Christian Walker"
    },
    {
      "id": "1:BOTTOM:3:0:8:29:p",
      "zone": 2,
      "x": 0.23,
      "z": 2.95,
      "pitchDescription": "Curveball",
      "pitchCode": "CU",
      "pitchResult": "Strike - Foul",
      "batter": "Christian Walker"
    },
    {
      "id": "1:BOTTOM:3:0:8:30:p",
      "zone": 12,
      "x": 0.17,
      "z": 3.49,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Strike - Foul",
      "batter": "Christian Walker"
    },
    {
      "id": "1:BOTTOM:3:0:8:31:p",
      "zone": 14,
      "x": 0.94,
      "z": 2.37,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Hit Into Play - Out(s)  Christian Walker grounds out to shallow center field, Kiké Hernández to Max Muncy.",
      "batter": "Christian Walker"
    },
    {
      "id": "2:BOTTOM:4:0:12:41:p",
      "zone": 12,
      "x": 0.73,
      "z": 3.51,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Ball - Called",
      "batter": "Eduardo Escobar"
    },
    {
      "id": "2:BOTTOM:4:0:12:42:p",
      "zone": 4,
      "x": -0.34,
      "z": 2.56,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Hit Into Play - Out(s)  Eduardo Escobar grounds out to shortstop, Chris Taylor to Max Muncy.",
      "batter": "Eduardo Escobar"
    },
    {
      "id": "2:BOTTOM:5:0:13:43:p",
      "zone": 11,
      "x": -0.24,
      "z": 3.18,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Strike - Called",
      "batter": "Kole Calhoun"
    },
    {
      "id": "2:BOTTOM:5:0:13:44:p",
      "zone": 14,
      "x": 0.82,
      "z": 1.38,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Ball - Called",
      "batter": "Kole Calhoun"
    },
    {
      "id": "2:BOTTOM:5:0:13:45:p",
      "zone": 6,
      "x": 0.44,
      "z": 2.4,
      "pitchDescription": "Slider",
      "pitchCode": "SL",
      "pitchResult": "Hit Into Play - Out(s)  Kole Calhoun flies out to deep right field to Mookie Betts.",
      "batter": "Kole Calhoun"
    },
    {
      "id": "2:BOTTOM:6:0:14:46:p",
      "zone": 14,
      "x": 0.96,
      "z": 2.34,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Ball - Called",
      "batter": "Carson Kelly"
    },
    {
      "id": "2:BOTTOM:6:0:14:47:p",
      "zone": 6,
      "x": 0.24,
      "z": 2.22,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Strike - Called",
      "batter": "Carson Kelly"
    },
    {
      "id": "2:BOTTOM:6:0:14:48:p",
      "zone": 2,
      "x": 0.01,
      "z": 2.91,
      "pitchDescription": "Slider",
      "pitchCode": "SL",
      "pitchResult": "Hit Into Play - Out(s)  Carson Kelly grounds out to shallow infield, Chris Taylor to Max Muncy.",
      "batter": "Carson Kelly"
    },
    {
      "id": "3:BOTTOM:7:0:19:64:p",
      "zone": 7,
      "x": -0.5,
      "z": 1.56,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Strike - Called",
      "batter": "David Peralta"
    },
    {
      "id": "3:BOTTOM:7:0:19:65:p",
      "zone": 13,
      "x": -0.38,
      "z": 1.16,
      "pitchDescription": "Slider",
      "pitchCode": "SL",
      "pitchResult": "Ball - Called",
      "batter": "David Peralta"
    },
    {
      "id": "3:BOTTOM:7:0:19:66:p",
      "zone": 14,
      "x": 0.96,
      "z": 1.7,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Ball - Called",
      "batter": "David Peralta"
    },
    {
      "id": "3:BOTTOM:7:0:19:67:p",
      "zone": 12,
      "x": 0.53,
      "z": 4.01,
      "pitchDescription": "Slider",
      "pitchCode": "SL",
      "pitchResult": "Ball - Called",
      "batter": "David Peralta"
    },
    {
      "id": "3:BOTTOM:7:0:19:68:p",
      "zone": 6,
      "x": 0.57,
      "z": 2.48,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Strike - Swinging",
      "batter": "David Peralta"
    },
    {
      "id": "3:BOTTOM:7:0:19:69:p",
      "zone": 9,
      "x": 0.62,
      "z": 2.17,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Strike - Foul",
      "batter": "David Peralta"
    },
    {
      "id": "3:BOTTOM:7:0:19:70:p",
      "zone": 5,
      "x": 0.19,
      "z": 2.3,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Strike - Foul",
      "batter": "David Peralta"
    },
    {
      "id": "3:BOTTOM:7:0:19:71:p",
      "zone": 14,
      "x": 1.01,
      "z": 1.52,
      "pitchDescription": "Slider",
      "pitchCode": "SL",
      "pitchResult": "Strike - Swinging  David Peralta strikes out swinging.",
      "batter": "David Peralta"
    },
    {
      "id": "3:BOTTOM:8:0:20:72:p",
      "zone": 4,
      "x": -0.24,
      "z": 2.15,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Strike - Called",
      "batter": "Ildemaro Vargas"
    },
    {
      "id": "3:BOTTOM:8:0:20:73:p",
      "zone": 9,
      "x": 0.62,
      "z": 1.84,
      "pitchDescription": "Curveball",
      "pitchCode": "CU",
      "pitchResult": "Strike - Called",
      "batter": "Ildemaro Vargas"
    },
    {
      "id": "3:BOTTOM:8:0:20:74:p",
      "zone": 14,
      "x": 0.77,
      "z": 2.29,
      "pitchDescription": "Curveball",
      "pitchCode": "CU",
      "pitchResult": "Strike - Foul",
      "batter": "Ildemaro Vargas"
    },
    {
      "id": "3:BOTTOM:8:0:20:75:p",
      "zone": 4,
      "x": -0.62,
      "z": 2.58,
      "pitchDescription": "Slider",
      "pitchCode": "SL",
      "pitchResult": "Strike - Foul",
      "batter": "Ildemaro Vargas"
    },
    {
      "id": "3:BOTTOM:8:0:20:76:p",
      "zone": 13,
      "x": -0.06,
      "z": 0.02,
      "pitchDescription": "Slider",
      "pitchCode": "SL",
      "pitchResult": "Ball - Called",
      "batter": "Ildemaro Vargas"
    },
    {
      "id": "3:BOTTOM:8:0:20:77:p",
      "zone": 13,
      "x": -0.78,
      "z": 1.17,
      "pitchDescription": "Slider",
      "pitchCode": "SL",
      "pitchResult": "Strike - Foul",
      "batter": "Ildemaro Vargas"
    },
    {
      "id": "3:BOTTOM:8:0:20:78:p",
      "zone": 6,
      "x": 0.65,
      "z": 2.28,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Hit Into Play - Out(s)  Ildemaro Vargas grounds out to shallow infield, Chris Taylor to Max Muncy.",
      "batter": "Ildemaro Vargas"
    },
    {
      "id": "3:BOTTOM:9:0:21:79:p",
      "zone": 14,
      "x": 0.87,
      "z": 1.69,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Strike - Called",
      "batter": "Nick Ahmed"
    },
    {
      "id": "3:BOTTOM:9:0:21:80:p",
      "zone": 14,
      "x": 1.52,
      "z": 1.76,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Ball - Called",
      "batter": "Nick Ahmed"
    },
    {
      "id": "3:BOTTOM:9:0:21:81:p",
      "zone": 13,
      "x": -0.78,
      "z": 0.9,
      "pitchDescription": "Slider",
      "pitchCode": "SL",
      "pitchResult": "Ball - Called",
      "batter": "Nick Ahmed"
    },
    {
      "id": "3:BOTTOM:9:0:21:82:p",
      "zone": 7,
      "x": -0.63,
      "z": 1.72,
      "pitchDescription": "Slider",
      "pitchCode": "SL",
      "pitchResult": "Strike - Swinging",
      "batter": "Nick Ahmed"
    },
    {
      "id": "3:BOTTOM:9:0:21:83:p",
      "zone": 13,
      "x": -0.22,
      "z": 1.28,
      "pitchDescription": "Slider",
      "pitchCode": "SL",
      "pitchResult": "Strike - Swinging  Nick Ahmed strikes out swinging.",
      "batter": "Nick Ahmed"
    },
    {
      "id": "4:BOTTOM:1:0:27:95:p",
      "zone": 7,
      "x": -0.36,
      "z": 2.06,
      "pitchDescription": "Slider",
      "pitchCode": "SL",
      "pitchResult": "Strike - Swinging",
      "batter": "Ketel Marte"
    },
    {
      "id": "4:BOTTOM:1:0:27:96:p",
      "zone": 13,
      "x": -0.81,
      "z": 0.97,
      "pitchDescription": "Slider",
      "pitchCode": "SL",
      "pitchResult": "Ball - Called",
      "batter": "Ketel Marte"
    },
    {
      "id": "4:BOTTOM:1:0:27:97:p",
      "zone": 12,
      "x": 1.73,
      "z": 2.7,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Ball - Called",
      "batter": "Ketel Marte"
    },
    {
      "id": "4:BOTTOM:1:0:27:98:p",
      "zone": 3,
      "x": 0.57,
      "z": 3,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Strike - Foul",
      "batter": "Ketel Marte"
    },
    {
      "id": "4:BOTTOM:1:0:27:99:p",
      "zone": 1,
      "x": -0.44,
      "z": 3.15,
      "pitchDescription": "Slider",
      "pitchCode": "SL",
      "pitchResult": "Hit Into Play - Out(s)  Ketel Marte pops out to shallow infield to Max Muncy.",
      "batter": "Ketel Marte"
    },
    {
      "id": "4:BOTTOM:2:0:28:100:p",
      "zone": 12,
      "x": 0.74,
      "z": 3.2,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Strike - Called",
      "batter": "Starling Marte"
    },
    {
      "id": "4:BOTTOM:2:0:28:101:p",
      "zone": 13,
      "x": -0.75,
      "z": 1.49,
      "pitchDescription": "Slider",
      "pitchCode": "SL",
      "pitchResult": "Strike - Swinging",
      "batter": "Starling Marte"
    },
    {
      "id": "4:BOTTOM:2:0:28:102:p",
      "zone": 5,
      "x": 0.07,
      "z": 2.47,
      "pitchDescription": "Slider",
      "pitchCode": "SL",
      "pitchResult": "Hit Into Play - No Out(s)  Starling Marte singles to shallow center field.",
      "batter": "Starling Marte"
    },
    {
      "id": "4:BOTTOM:3:0:29:103:p",
      "zone": 7,
      "x": -0.27,
      "z": 2.02,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Hit Into Play - No Out(s)  Christian Walker singles to center field. Starling Marte to second.",
      "batter": "Christian Walker"
    },
    {
      "id": "4:BOTTOM:4:0:30:104:p",
      "zone": 8,
      "x": -0.12,
      "z": 1.64,
      "pitchDescription": "Curveball",
      "pitchCode": "CU",
      "pitchResult": "Strike - Called",
      "batter": "Eduardo Escobar"
    },
    {
      "id": "4:BOTTOM:4:0:30:105:p",
      "zone": 13,
      "x": -1.18,
      "z": 1.87,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Strike - Swinging",
      "batter": "Eduardo Escobar"
    },
    {
      "id": "4:BOTTOM:4:0:30:106:p",
      "zone": 5,
      "x": -0.02,
      "z": 2.15,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Hit Into Play - Out(s)  Eduardo Escobar grounds out to shallow infield, Kiké Hernández to Max Muncy. Christian Walker to second. Starling Marte to third.",
      "batter": "Eduardo Escobar"
    },
    {
      "id": "4:BOTTOM:5:0:31:107:p",
      "zone": 13,
      "x": -0.82,
      "z": 1.33,
      "pitchDescription": "Slider",
      "pitchCode": "SL",
      "pitchResult": "Strike - Swinging",
      "batter": "Kole Calhoun"
    },
    {
      "id": "4:BOTTOM:5:0:31:108:p",
      "zone": 9,
      "x": 0.42,
      "z": 1.78,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Strike - Called",
      "batter": "Kole Calhoun"
    },
    {
      "id": "4:BOTTOM:5:0:31:109:p",
      "zone": 13,
      "x": -0.77,
      "z": 1,
      "pitchDescription": "Slider",
      "pitchCode": "SL",
      "pitchResult": "Ball - Called",
      "batter": "Kole Calhoun"
    },
    {
      "id": "4:BOTTOM:5:0:31:110:p",
      "zone": 8,
      "x": 0.13,
      "z": 1.7,
      "pitchDescription": "Slider",
      "pitchCode": "SL",
      "pitchResult": "Strike - Swinging  Kole Calhoun strikes out swinging.",
      "batter": "Kole Calhoun"
    },
    {
      "id": "5:BOTTOM:6:0:38:139:p",
      "zone": 6,
      "x": 0.34,
      "z": 2.46,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Strike - Called",
      "batter": "Carson Kelly"
    },
    {
      "id": "5:BOTTOM:6:0:38:140:p",
      "zone": 12,
      "x": 1.37,
      "z": 4.49,
      "pitchDescription": "Curveball",
      "pitchCode": "CU",
      "pitchResult": "Ball - Called",
      "batter": "Carson Kelly"
    },
    {
      "id": "5:BOTTOM:6:0:38:141:p",
      "zone": 8,
      "x": -0.09,
      "z": 2.12,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Hit Into Play - Out(s)  Carson Kelly grounds out to shallow left field, Chris Taylor to Max Muncy.",
      "batter": "Carson Kelly"
    },
    {
      "id": "5:BOTTOM:7:0:39:142:p",
      "zone": 9,
      "x": 0.45,
      "z": 1.83,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Strike - Foul",
      "batter": "David Peralta"
    },
    {
      "id": "5:BOTTOM:7:0:39:143:p",
      "zone": 14,
      "x": 0.08,
      "z": 0.4,
      "pitchDescription": "Slider",
      "pitchCode": "SL",
      "pitchResult": "Ball - Called",
      "batter": "David Peralta"
    },
    {
      "id": "5:BOTTOM:7:0:39:144:p",
      "zone": 12,
      "x": 0.93,
      "z": 3.42,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Ball - Called",
      "batter": "David Peralta"
    },
    {
      "id": "5:BOTTOM:7:0:39:145:p",
      "zone": 14,
      "x": 0.3,
      "z": 1.27,
      "pitchDescription": "Slider",
      "pitchCode": "SL",
      "pitchResult": "Hit Into Play - Out(s)  David Peralta grounds out to second base, Justin Turner to Max Muncy.",
      "batter": "David Peralta"
    },
    {
      "id": "5:BOTTOM:8:0:40:146:p",
      "zone": 13,
      "x": -0.16,
      "z": 0.73,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Ball - Called",
      "batter": "Ildemaro Vargas"
    },
    {
      "id": "5:BOTTOM:8:0:40:147:p",
      "zone": 8,
      "x": 0.18,
      "z": 1.77,
      "pitchDescription": "Slider",
      "pitchCode": "SL",
      "pitchResult": "Strike - Swinging",
      "batter": "Ildemaro Vargas"
    },
    {
      "id": "5:BOTTOM:8:0:40:148:p",
      "zone": 14,
      "x": 0.94,
      "z": 1.48,
      "pitchDescription": "Slider",
      "pitchCode": "SL",
      "pitchResult": "Ball - Called",
      "batter": "Ildemaro Vargas"
    },
    {
      "id": "5:BOTTOM:8:0:40:149:p",
      "zone": 8,
      "x": -0.01,
      "z": 1.83,
      "pitchDescription": "Slider",
      "pitchCode": "SL",
      "pitchResult": "Strike - Foul",
      "batter": "Ildemaro Vargas"
    },
    {
      "id": "5:BOTTOM:8:0:40:150:p",
      "zone": 12,
      "x": 0.86,
      "z": 2.83,
      "pitchDescription": "Slider",
      "pitchCode": "SL",
      "pitchResult": "Hit Into Play - No Out(s)  Ildemaro Vargas singles to shallow infield.",
      "batter": "Ildemaro Vargas"
    },
    {
      "id": "5:BOTTOM:9:0:41:151:p",
      "zone": 5,
      "x": 0.16,
      "z": 2.73,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Strike - Foul",
      "batter": "Nick Ahmed"
    },
    {
      "id": "5:BOTTOM:9:0:41:152:p",
      "zone": 1,
      "x": -0.5,
      "z": 3.06,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Strike - Foul",
      "batter": "Nick Ahmed"
    },
    {
      "id": "5:BOTTOM:9:0:41:153:p",
      "zone": 13,
      "x": -0.26,
      "z": 0.6,
      "pitchDescription": "Slider",
      "pitchCode": "SL",
      "pitchResult": "Ball - Ball In Dirt",
      "batter": "Nick Ahmed"
    },
    {
      "id": "5:BOTTOM:9:0:41:154:p",
      "zone": 14,
      "x": 1.1,
      "z": -0.16,
      "pitchDescription": "Curveball",
      "pitchCode": "CU",
      "pitchResult": "Ball - Ball In Dirt",
      "batter": "Nick Ahmed"
    },
    {
      "id": "5:BOTTOM:9:0:41:155:p",
      "zone": 14,
      "x": 0.34,
      "z": 1.38,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Strike - Called  Nick Ahmed called out on strikes.",
      "batter": "Nick Ahmed"
    },
    {
      "id": "6:BOTTOM:1:0:46:170:p",
      "zone": 13,
      "x": -0.19,
      "z": 1.47,
      "pitchDescription": "Slider",
      "pitchCode": "SL",
      "pitchResult": "Strike - Foul",
      "batter": "Ketel Marte"
    },
    {
      "id": "6:BOTTOM:1:0:46:171:p",
      "zone": 14,
      "x": 1.85,
      "z": 1.75,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Ball - Called",
      "batter": "Ketel Marte"
    },
    {
      "id": "6:BOTTOM:1:0:46:172:p",
      "zone": 14,
      "x": 0,
      "z": 0.99,
      "pitchDescription": "Slider",
      "pitchCode": "SL",
      "pitchResult": "Ball - Called",
      "batter": "Ketel Marte"
    },
    {
      "id": "6:BOTTOM:1:0:46:173:p",
      "zone": 13,
      "x": -0.1,
      "z": 1.29,
      "pitchDescription": "Slider",
      "pitchCode": "SL",
      "pitchResult": "Strike - Swinging",
      "batter": "Ketel Marte"
    },
    {
      "id": "6:BOTTOM:1:0:46:174:p",
      "zone": 14,
      "x": 0.41,
      "z": 1.39,
      "pitchDescription": "Curveball",
      "pitchCode": "CU",
      "pitchResult": "Hit Into Play - Out(s)  Ketel Marte grounds out to shortstop, Chris Taylor to Max Muncy.",
      "batter": "Ketel Marte"
    },
    {
      "id": "6:BOTTOM:2:0:47:175:p",
      "zone": 7,
      "x": -0.57,
      "z": 1.58,
      "pitchDescription": "Slider",
      "pitchCode": "SL",
      "pitchResult": "Strike - Foul Tip",
      "batter": "Starling Marte"
    },
    {
      "id": "6:BOTTOM:2:0:47:176:p",
      "zone": 3,
      "x": 0.43,
      "z": 2.95,
      "pitchDescription": "Curveball",
      "pitchCode": "CU",
      "pitchResult": "Hit Into Play - Out(s)  Starling Marte grounds out to third base, Justin Turner to Max Muncy.",
      "batter": "Starling Marte"
    }
  ]
}

const data3 = {
  pitcher: 'Max Scherzer',
  number: 31,
  title: '2019-10-07 vs LAD',
  headShot: 'https://images.fantasypros.com/images/players/mlb/3744/headshot/500x500.webp',
  pitches:[
    {
      "id": "1:TOP:1:0:1:1",
      "zone": 1,
      "x": -0.47,
      "z": 3.02,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Strike - Called",
      "batter": "Joc Pederson"
    },
    {
      "id": "1:TOP:1:0:1:2",
      "zone": 4,
      "x": -0.69,
      "z": 2.41,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Strike - Called",
      "batter": "Joc Pederson"
    },
    {
      "id": "1:TOP:1:0:1:3",
      "zone": 13,
      "x": -0.11,
      "z": 0.7,
      "pitchDescription": "Changeup",
      "pitchCode": "CH",
      "pitchResult": "Ball - Called",
      "batter": "Joc Pederson"
    },
    {
      "id": "1:TOP:1:0:1:4",
      "zone": 11,
      "x": -0.11,
      "z": 3.54,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Strike - Foul",
      "batter": "Joc Pederson"
    },
    {
      "id": "1:TOP:1:0:1:5",
      "zone": 3,
      "x": 0.38,
      "z": 3.27,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Hit Into Play - Out(s)  Joc Pederson pops out to shallow center field to Anthony Rendon.",
      "batter": "Joc Pederson"
    },
    {
      "id": "1:TOP:2:0:2:6",
      "zone": 2,
      "x": -0.23,
      "z": 2.68,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Strike - Called",
      "batter": "Max Muncy"
    },
    {
      "id": "1:TOP:2:0:2:7",
      "zone": 13,
      "x": -0.81,
      "z": 1.58,
      "pitchDescription": "Curveball",
      "pitchCode": "CU",
      "pitchResult": "Strike - Called",
      "batter": "Max Muncy"
    },
    {
      "id": "1:TOP:2:0:2:8",
      "zone": 2,
      "x": -0.23,
      "z": 2.65,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Hit Into Play - Out(s)  Max Muncy flies out to right field to Adam Eaton.",
      "batter": "Max Muncy"
    },
    {
      "id": "1:TOP:3:0:3:10",
      "zone": 1,
      "x": -0.43,
      "z": 3.04,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Hit Into Play - Run(s)",
      "batter": "Justin Turner"
    },
    {
      "id": "1:TOP:3:0:3:9",
      "zone": 14,
      "x": 0.51,
      "z": 1.17,
      "pitchDescription": "Slider",
      "pitchCode": "SL",
      "pitchResult": "Strike - Swinging  Justin Turner homers to center field.",
      "batter": "Justin Turner"
    },
    {
      "id": "1:TOP:4:1:4:11",
      "zone": 9,
      "x": 0.28,
      "z": 2.21,
      "pitchDescription": "Curveball",
      "pitchCode": "CU",
      "pitchResult": "Strike - Called",
      "batter": "Cody Bellinger"
    },
    {
      "id": "1:TOP:4:1:4:12",
      "zone": 9,
      "x": 0.31,
      "z": 2.43,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Strike - Foul",
      "batter": "Cody Bellinger"
    },
    {
      "id": "1:TOP:4:1:4:13",
      "zone": 13,
      "x": -0.86,
      "z": 1.92,
      "pitchDescription": "Changeup",
      "pitchCode": "CH",
      "pitchResult": "Hit Into Play - Out(s)  Cody Bellinger flies out to center field to Michael A. Taylor.",
      "batter": "Cody Bellinger"
    },
    {
      "id": "2:TOP:5:1:9:32",
      "zone": 1,
      "x": -0.38,
      "z": 2.99,
      "pitchDescription": "Curveball",
      "pitchCode": "CU",
      "pitchResult": "Strike - Called",
      "batter": "Corey Seager"
    },
    {
      "id": "2:TOP:5:1:9:33",
      "zone": 7,
      "x": -0.66,
      "z": 2.2,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Strike - Foul",
      "batter": "Corey Seager"
    },
    {
      "id": "2:TOP:5:1:9:34",
      "zone": 2,
      "x": -0.08,
      "z": 2.86,
      "pitchDescription": "Changeup",
      "pitchCode": "CH",
      "pitchResult": "Hit Into Play - No Out(s)  Corey Seager doubles to deep right field.",
      "batter": "Corey Seager"
    },
    {
      "id": "2:TOP:6:1:10:35",
      "zone": 4,
      "x": -0.39,
      "z": 2.65,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Strike - Foul",
      "batter": "Matt Beaty"
    },
    {
      "id": "2:TOP:6:1:10:36",
      "zone": 13,
      "x": -0.37,
      "z": 1.6,
      "pitchDescription": "Curveball",
      "pitchCode": "CU",
      "pitchResult": "Hit Into Play - Out(s)  Matt Beaty lines out to center field to Michael A. Taylor.",
      "batter": "Matt Beaty"
    },
    {
      "id": "2:TOP:7:1:11:37",
      "zone": 4,
      "x": -0.25,
      "z": 2.59,
      "pitchDescription": "Curveball",
      "pitchCode": "CU",
      "pitchResult": "Strike - Foul",
      "batter": "Gavin Lux"
    },
    {
      "id": "2:TOP:7:1:11:38",
      "zone": 12,
      "x": 0.4,
      "z": 4.55,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Ball - Called",
      "batter": "Gavin Lux"
    },
    {
      "id": "2:TOP:7:1:11:39",
      "zone": 11,
      "x": -1.4,
      "z": 3.49,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Ball - Called",
      "batter": "Gavin Lux"
    },
    {
      "id": "2:TOP:7:1:11:40",
      "zone": 11,
      "x": -0.72,
      "z": 2.77,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Strike - Foul",
      "batter": "Gavin Lux"
    },
    {
      "id": "2:TOP:7:1:11:41",
      "zone": 2,
      "x": 0.05,
      "z": 3.06,
      "pitchDescription": "Cutter",
      "pitchCode": "FC",
      "pitchResult": "Hit Into Play - Out(s)  Gavin Lux pops out to shallow infield to Ryan Zimmerman.",
      "batter": "Gavin Lux"
    },
    {
      "id": "2:TOP:8:1:12:42",
      "zone": null,
      "x": null,
      "z": null,
      "pitchDescription": null,
      "pitchCode": null,
      "pitchResult": "Ball - Automatic  Will Smith is intentionally walked.",
      "batter": "Will Smith"
    },
    {
      "id": "2:TOP:9:1:13:43",
      "zone": 7,
      "x": -0.69,
      "z": 1.97,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Strike - Foul",
      "batter": "Rich Hill"
    },
    {
      "id": "2:TOP:9:1:13:44",
      "zone": 11,
      "x": -1.46,
      "z": 2.86,
      "pitchDescription": "Curveball",
      "pitchCode": "CU",
      "pitchResult": "Ball - Called",
      "batter": "Rich Hill"
    },
    {
      "id": "2:TOP:9:1:13:45",
      "zone": 9,
      "x": 0.47,
      "z": 2.11,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Strike - Foul",
      "batter": "Rich Hill"
    },
    {
      "id": "2:TOP:9:1:13:46",
      "zone": 12,
      "x": 1.57,
      "z": 3.28,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Ball - Called",
      "batter": "Rich Hill"
    },
    {
      "id": "2:TOP:9:1:13:47",
      "zone": 3,
      "x": 0.58,
      "z": 2.98,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Strike - Foul",
      "batter": "Rich Hill"
    },
    {
      "id": "2:TOP:9:1:13:48",
      "zone": 14,
      "x": 0.67,
      "z": 1.58,
      "pitchDescription": "Curveball",
      "pitchCode": "CU",
      "pitchResult": "Strike - Swinging  Rich Hill strikes out swinging.",
      "batter": "Rich Hill"
    },
    {
      "id": "3:TOP:1:1:17:61",
      "zone": 7,
      "x": -0.51,
      "z": 2.12,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Strike - Called",
      "batter": "Joc Pederson"
    },
    {
      "id": "3:TOP:1:1:17:62",
      "zone": 13,
      "x": -0.07,
      "z": 1.36,
      "pitchDescription": "Changeup",
      "pitchCode": "CH",
      "pitchResult": "Ball - Called",
      "batter": "Joc Pederson"
    },
    {
      "id": "3:TOP:1:1:17:63",
      "zone": 13,
      "x": -0.85,
      "z": 1.65,
      "pitchDescription": "Changeup",
      "pitchCode": "CH",
      "pitchResult": "Hit Into Play - Out(s)  Joc Pederson grounds out to shallow right field, Howie Kendrick to Ryan Zimmerman.",
      "batter": "Joc Pederson"
    },
    {
      "id": "3:TOP:2:1:18:64",
      "zone": 13,
      "x": -1.24,
      "z": 1.5,
      "pitchDescription": "Changeup",
      "pitchCode": "CH",
      "pitchResult": "Ball - Called",
      "batter": "Max Muncy"
    },
    {
      "id": "3:TOP:2:1:18:65",
      "zone": 5,
      "x": -0.18,
      "z": 2.38,
      "pitchDescription": "Curveball",
      "pitchCode": "CU",
      "pitchResult": "Strike - Called",
      "batter": "Max Muncy"
    },
    {
      "id": "3:TOP:2:1:18:66",
      "zone": 13,
      "x": -1.25,
      "z": 1.52,
      "pitchDescription": "Changeup",
      "pitchCode": "CH",
      "pitchResult": "Strike - Swinging",
      "batter": "Max Muncy"
    },
    {
      "id": "3:TOP:2:1:18:67",
      "zone": 14,
      "x": 1.72,
      "z": 0.73,
      "pitchDescription": "Cutter",
      "pitchCode": "FC",
      "pitchResult": "Ball - Called",
      "batter": "Max Muncy"
    },
    {
      "id": "3:TOP:2:1:18:68",
      "zone": 14,
      "x": 1.21,
      "z": 0.87,
      "pitchDescription": "Cutter",
      "pitchCode": "FC",
      "pitchResult": "Ball - Called",
      "batter": "Max Muncy"
    },
    {
      "id": "3:TOP:2:1:18:69",
      "zone": 13,
      "x": -0.95,
      "z": 1.81,
      "pitchDescription": "Curveball",
      "pitchCode": "CU",
      "pitchResult": "Hit Into Play - Out(s)  Max Muncy grounds out to second base, Howie Kendrick to Ryan Zimmerman.",
      "batter": "Max Muncy"
    },
    {
      "id": "3:TOP:3:1:19:70",
      "zone": 6,
      "x": 0.54,
      "z": 2.61,
      "pitchDescription": "Slider",
      "pitchCode": "SL",
      "pitchResult": "Hit Into Play - Out(s)  Justin Turner flies out to left field to Juan Soto.",
      "batter": "Justin Turner"
    },
    {
      "id": "4:TOP:4:1:28:110",
      "zone": 13,
      "x": -0.14,
      "z": 1.73,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Hit Into Play - No Out(s)  Cody Bellinger singles to right center field.",
      "batter": "Cody Bellinger"
    },
    {
      "id": "4:TOP:5:1:29:111",
      "zone": 4,
      "x": -0.36,
      "z": 2.4,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Strike - Foul",
      "batter": "Corey Seager"
    },
    {
      "id": "4:TOP:5:1:29:112",
      "zone": 12,
      "x": 1.22,
      "z": 4.01,
      "pitchDescription": "Slider",
      "pitchCode": "SL",
      "pitchResult": "Ball - Called",
      "batter": "Corey Seager"
    },
    {
      "id": "4:TOP:5:1:29:113",
      "zone": 14,
      "x": 1.82,
      "z": 2.12,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Ball - Called",
      "batter": "Corey Seager"
    },
    {
      "id": "4:TOP:5:1:29:114",
      "zone": 13,
      "x": -0.35,
      "z": 1.1,
      "pitchDescription": "Changeup",
      "pitchCode": "CH",
      "pitchResult": "Strike - Foul",
      "batter": "Corey Seager"
    },
    {
      "id": "4:TOP:5:1:29:115",
      "zone": 5,
      "x": -0.2,
      "z": 2.68,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Strike - Foul",
      "batter": "Corey Seager"
    },
    {
      "id": "4:TOP:5:1:29:116",
      "zone": 14,
      "x": 1.26,
      "z": 1.11,
      "pitchDescription": "Cutter",
      "pitchCode": "FC",
      "pitchResult": "Strike - Swinging  Corey Seager strikes out swinging.",
      "batter": "Corey Seager"
    },
    {
      "id": "4:TOP:6:1:30:117",
      "zone": 12,
      "x": 0.87,
      "z": 3,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Ball - Called",
      "batter": "Matt Beaty"
    },
    {
      "id": "4:TOP:6:1:30:118",
      "zone": 13,
      "x": -0.09,
      "z": 1.36,
      "pitchDescription": "Curveball",
      "pitchCode": "CU",
      "pitchResult": "Ball - Called",
      "batter": "Matt Beaty"
    },
    {
      "id": "4:TOP:6:1:30:119",
      "zone": 11,
      "x": -0.55,
      "z": 3.63,
      "pitchDescription": "Curveball",
      "pitchCode": "CU",
      "pitchResult": "Ball - Called",
      "batter": "Matt Beaty"
    },
    {
      "id": "4:TOP:6:1:30:120",
      "zone": 2,
      "x": 0.12,
      "z": 2.89,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Hit Into Play - Out(s)  Matt Beaty flies out to center field to Juan Soto.",
      "batter": "Matt Beaty"
    },
    {
      "id": "4:TOP:7:1:31:121",
      "zone": 7,
      "x": -0.42,
      "z": 1.81,
      "pitchDescription": "Curveball",
      "pitchCode": "CU",
      "pitchResult": "Strike - Called",
      "batter": "Gavin Lux"
    },
    {
      "id": "4:TOP:7:1:31:122",
      "zone": 6,
      "x": 0.48,
      "z": 2.48,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Strike - Called",
      "batter": "Gavin Lux"
    },
    {
      "id": "4:TOP:7:1:31:123",
      "zone": 12,
      "x": 0.1,
      "z": 3.69,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Strike - Swinging  Gavin Lux strikes out swinging.",
      "batter": "Gavin Lux"
    },
    {
      "id": "5:TOP:1:1:39:152",
      "zone": 12,
      "x": 1.04,
      "z": 2.84,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Ball - Called",
      "batter": "Joc Pederson"
    },
    {
      "id": "5:TOP:1:1:39:153",
      "zone": 12,
      "x": 1.12,
      "z": 3.98,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Ball - Called",
      "batter": "Joc Pederson"
    },
    {
      "id": "5:TOP:1:1:39:154",
      "zone": 8,
      "x": -0.03,
      "z": 2.03,
      "pitchDescription": "Changeup",
      "pitchCode": "CH",
      "pitchResult": "Strike - Swinging",
      "batter": "Joc Pederson"
    },
    {
      "id": "5:TOP:1:1:39:155",
      "zone": 14,
      "x": 0.75,
      "z": 2.49,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Strike - Foul",
      "batter": "Joc Pederson"
    },
    {
      "id": "5:TOP:1:1:39:156",
      "zone": 13,
      "x": -0.13,
      "z": 0.48,
      "pitchDescription": "Changeup",
      "pitchCode": "CH",
      "pitchResult": "Ball - Called",
      "batter": "Joc Pederson"
    },
    {
      "id": "5:TOP:1:1:39:157",
      "zone": 13,
      "x": -1.11,
      "z": 2.47,
      "pitchDescription": "Changeup",
      "pitchCode": "CH",
      "pitchResult": "Strike - Swinging  Joc Pederson strikes out swinging.",
      "batter": "Joc Pederson"
    },
    {
      "id": "5:TOP:8:1:36:141",
      "zone": 5,
      "x": 0.17,
      "z": 2.53,
      "pitchDescription": "Slider",
      "pitchCode": "SL",
      "pitchResult": "Strike - Called",
      "batter": "Will Smith"
    },
    {
      "id": "5:TOP:8:1:36:142",
      "zone": 12,
      "x": 0.77,
      "z": 2.49,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Strike - Called",
      "batter": "Will Smith"
    },
    {
      "id": "5:TOP:8:1:36:143",
      "zone": 14,
      "x": 0.56,
      "z": -0.06,
      "pitchDescription": "Slider",
      "pitchCode": "SL",
      "pitchResult": "Ball - Called",
      "batter": "Will Smith"
    },
    {
      "id": "5:TOP:8:1:36:144",
      "zone": 3,
      "x": 0.54,
      "z": 3.27,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Strike - Foul",
      "batter": "Will Smith"
    },
    {
      "id": "5:TOP:8:1:36:145",
      "zone": 14,
      "x": 0.08,
      "z": 0.37,
      "pitchDescription": "Slider",
      "pitchCode": "SL",
      "pitchResult": "Ball - Called",
      "batter": "Will Smith"
    },
    {
      "id": "5:TOP:8:1:36:146",
      "zone": 13,
      "x": -0.05,
      "z": 1.24,
      "pitchDescription": "Slider",
      "pitchCode": "SL",
      "pitchResult": "Strike - Swinging  Will Smith strikes out swinging.",
      "batter": "Will Smith"
    },
    {
      "id": "5:TOP:9:1:38:147",
      "zone": 14,
      "x": 0.89,
      "z": 0.2,
      "pitchDescription": "Cutter",
      "pitchCode": "FC",
      "pitchResult": "Ball - Called",
      "batter": "AJ Pollock"
    },
    {
      "id": "5:TOP:9:1:38:148",
      "zone": 14,
      "x": 0.8,
      "z": 2.01,
      "pitchDescription": "Slider",
      "pitchCode": "SL",
      "pitchResult": "Strike - Swinging",
      "batter": "AJ Pollock"
    },
    {
      "id": "5:TOP:9:1:38:149",
      "zone": 14,
      "x": 0.82,
      "z": 2.07,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Strike - Called",
      "batter": "AJ Pollock"
    },
    {
      "id": "5:TOP:9:1:38:150",
      "zone": 14,
      "x": 1.96,
      "z": 2.35,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Ball - Called",
      "batter": "AJ Pollock"
    },
    {
      "id": "5:TOP:9:1:38:151",
      "zone": 14,
      "x": 1.48,
      "z": 1.08,
      "pitchDescription": "Slider",
      "pitchCode": "SL",
      "pitchResult": "Strike - Swinging  A.J. Pollock strikes out swinging.",
      "batter": "AJ Pollock"
    },
    {
      "id": "6:TOP:2:1:51:192",
      "zone": 13,
      "x": -1.36,
      "z": 1.82,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Ball - Called",
      "batter": "Max Muncy"
    },
    {
      "id": "6:TOP:2:1:51:193",
      "zone": 2,
      "x": 0.13,
      "z": 3.01,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Strike - Foul",
      "batter": "Max Muncy"
    },
    {
      "id": "6:TOP:2:1:51:194",
      "zone": 6,
      "x": 0.38,
      "z": 2.12,
      "pitchDescription": "Curveball",
      "pitchCode": "CU",
      "pitchResult": "Strike - Swinging",
      "batter": "Max Muncy"
    },
    {
      "id": "6:TOP:2:1:51:195",
      "zone": 1,
      "x": -0.33,
      "z": 3.2,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Hit Into Play - Out(s)  Max Muncy pops out to shallow right field to Howie Kendrick.",
      "batter": "Max Muncy"
    },
    {
      "id": "6:TOP:3:1:52:196",
      "zone": 9,
      "x": 0.59,
      "z": 2.14,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Strike - Called",
      "batter": "Justin Turner"
    },
    {
      "id": "6:TOP:3:1:52:197",
      "zone": 14,
      "x": 0.29,
      "z": 1.23,
      "pitchDescription": "Slider",
      "pitchCode": "SL",
      "pitchResult": "Ball - Called",
      "batter": "Justin Turner"
    },
    {
      "id": "6:TOP:3:1:52:198",
      "zone": 14,
      "x": 1.54,
      "z": 0.94,
      "pitchDescription": "Slider",
      "pitchCode": "SL",
      "pitchResult": "Ball - Called",
      "batter": "Justin Turner"
    },
    {
      "id": "6:TOP:3:1:52:199",
      "zone": 2,
      "x": 0.24,
      "z": 2.85,
      "pitchDescription": "Slider",
      "pitchCode": "SL",
      "pitchResult": "Strike - Foul",
      "batter": "Justin Turner"
    },
    {
      "id": "6:TOP:3:1:52:200",
      "zone": 14,
      "x": 0.48,
      "z": 0.93,
      "pitchDescription": "Curveball",
      "pitchCode": "CU",
      "pitchResult": "Hit Into Play - Out(s)  Justin Turner grounds out to third base, Anthony Rendon to Ryan Zimmerman.",
      "batter": "Justin Turner"
    },
    {
      "id": "6:TOP:4:1:53:201",
      "zone": 6,
      "x": 0.25,
      "z": 3.16,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Strike - Swinging",
      "batter": "Cody Bellinger"
    },
    {
      "id": "6:TOP:4:1:53:202",
      "zone": 13,
      "x": -0.94,
      "z": -0.15,
      "pitchDescription": "Changeup",
      "pitchCode": "CH",
      "pitchResult": "Ball - Called",
      "batter": "Cody Bellinger"
    },
    {
      "id": "6:TOP:4:1:53:203",
      "zone": 12,
      "x": 0.28,
      "z": 3.57,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Hit Into Play - Out(s)  Cody Bellinger flies out to center field to Michael A. Taylor.",
      "batter": "Cody Bellinger"
    },
    {
      "id": "7:TOP:1:1:65:246",
      "zone": 6,
      "x": 0.34,
      "z": 2.3,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Strike - Foul",
      "batter": "Joc Pederson"
    },
    {
      "id": "7:TOP:1:1:65:247",
      "zone": 7,
      "x": -0.41,
      "z": 1.94,
      "pitchDescription": "Changeup",
      "pitchCode": "CH",
      "pitchResult": "Hit Into Play - Out(s)  Joc Pederson grounds out to second base, Howie Kendrick to Ryan Zimmerman.",
      "batter": "Joc Pederson"
    },
    {
      "id": "7:TOP:5:1:59:221",
      "zone": 5,
      "x": 0.18,
      "z": 2.34,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Strike - Foul",
      "batter": "Corey Seager"
    },
    {
      "id": "7:TOP:5:1:59:222",
      "zone": 12,
      "x": 0.1,
      "z": 3.79,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Hit Into Play - Out(s)  Corey Seager flies out to deep right center field to Adam Eaton.",
      "batter": "Corey Seager"
    },
    {
      "id": "7:TOP:6:1:60:223",
      "zone": 11,
      "x": -0.32,
      "z": 3.79,
      "pitchDescription": "Curveball",
      "pitchCode": "CU",
      "pitchResult": "Ball - Called",
      "batter": "Matt Beaty"
    },
    {
      "id": "7:TOP:6:1:60:224",
      "zone": 9,
      "x": 0.33,
      "z": 1.69,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Hit Into Play - No Out(s)  Matt Beaty singles to right field.",
      "batter": "Matt Beaty"
    },
    {
      "id": "7:TOP:7:1:61:225",
      "zone": 11,
      "x": -0.85,
      "z": 3.22,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Strike - Foul",
      "batter": "Gavin Lux"
    },
    {
      "id": "7:TOP:7:1:61:226",
      "zone": 14,
      "x": 0.85,
      "z": 1.11,
      "pitchDescription": "Changeup",
      "pitchCode": "CH",
      "pitchResult": "Ball - Called",
      "batter": "Gavin Lux"
    },
    {
      "id": "7:TOP:7:1:61:227",
      "zone": 1,
      "x": -0.41,
      "z": 3.11,
      "pitchDescription": "Changeup",
      "pitchCode": "CH",
      "pitchResult": "Strike - Swinging",
      "batter": "Gavin Lux"
    },
    {
      "id": "7:TOP:7:1:61:228",
      "zone": 14,
      "x": 1.74,
      "z": 1.5,
      "pitchDescription": "Cutter",
      "pitchCode": "FC",
      "pitchResult": "Ball - Called",
      "batter": "Gavin Lux"
    },
    {
      "id": "7:TOP:7:1:61:229",
      "zone": 6,
      "x": 0.69,
      "z": 2.45,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Strike - Foul",
      "batter": "Gavin Lux"
    },
    {
      "id": "7:TOP:7:1:61:230",
      "zone": 12,
      "x": 0.87,
      "z": 2.99,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Strike - Foul",
      "batter": "Gavin Lux"
    },
    {
      "id": "7:TOP:7:1:61:231",
      "zone": 13,
      "x": -0.77,
      "z": 1.52,
      "pitchDescription": "Curveball",
      "pitchCode": "CU",
      "pitchResult": "Ball - Called",
      "batter": "Gavin Lux"
    },
    {
      "id": "7:TOP:7:1:61:232",
      "zone": 14,
      "x": 1.17,
      "z": 2.08,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Ball - Called  Gavin Lux walks. Matt Beaty to second.",
      "batter": "Gavin Lux"
    },
    {
      "id": "7:TOP:8:1:62:233",
      "zone": 14,
      "x": 1.21,
      "z": 2.14,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Ball - Called",
      "batter": "Will Smith"
    },
    {
      "id": "7:TOP:8:1:62:234",
      "zone": 14,
      "x": 1.57,
      "z": 2.07,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Ball - Called",
      "batter": "Will Smith"
    },
    {
      "id": "7:TOP:8:1:62:235",
      "zone": 9,
      "x": 0.53,
      "z": 1.77,
      "pitchDescription": "Slider",
      "pitchCode": "SL",
      "pitchResult": "Strike - Called",
      "batter": "Will Smith"
    },
    {
      "id": "7:TOP:8:1:62:236",
      "zone": 14,
      "x": 1.16,
      "z": 2.02,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Ball - Called",
      "batter": "Will Smith"
    },
    {
      "id": "7:TOP:8:1:62:237",
      "zone": 14,
      "x": 1.91,
      "z": 1.02,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Ball - Called  Will Smith walks. Gavin Lux to second. Matt Beaty to third.",
      "batter": "Will Smith"
    },
    {
      "id": "7:TOP:9:1:64:238",
      "zone": 6,
      "x": 0.7,
      "z": 2.58,
      "pitchDescription": "Slider",
      "pitchCode": "SL",
      "pitchResult": "Strike - Swinging",
      "batter": "Chris Taylor"
    },
    {
      "id": "7:TOP:9:1:64:239",
      "zone": 4,
      "x": -0.48,
      "z": 2.35,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Strike - Foul",
      "batter": "Chris Taylor"
    },
    {
      "id": "7:TOP:9:1:64:240",
      "zone": 13,
      "x": -0.11,
      "z": 1.32,
      "pitchDescription": "Changeup",
      "pitchCode": "CH",
      "pitchResult": "Ball - Called",
      "batter": "Chris Taylor"
    },
    {
      "id": "7:TOP:9:1:64:241",
      "zone": 11,
      "x": -1.27,
      "z": 3.58,
      "pitchDescription": "Four-seam FB",
      "pitchCode": "FF",
      "pitchResult": "Ball - Called",
      "batter": "Chris Taylor"
    },
    {
      "id": "7:TOP:9:1:64:242",
      "zone": 7,
      "x": -0.25,
      "z": 1.97,
      "pitchDescription": "Slider",
      "pitchCode": "SL",
      "pitchResult": "Strike - Foul",
      "batter": "Chris Taylor"
    },
    {
      "id": "7:TOP:9:1:64:243",
      "zone": 14,
      "x": 0.16,
      "z": 1.35,
      "pitchDescription": "Slider",
      "pitchCode": "SL",
      "pitchResult": "Ball - Called",
      "batter": "Chris Taylor"
    },
    {
      "id": "7:TOP:9:1:64:244",
      "zone": 4,
      "x": -0.45,
      "z": 2.7,
      "pitchDescription": "Slider",
      "pitchCode": "SL",
      "pitchResult": "Strike - Foul",
      "batter": "Chris Taylor"
    },
    {
      "id": "7:TOP:9:1:64:245",
      "zone": 4,
      "x": -0.29,
      "z": 2.8,
      "pitchDescription": "Slider",
      "pitchCode": "SL",
      "pitchResult": "Strike - Swinging  Chris Taylor strikes out swinging.",
      "batter": "Chris Taylor"
    }
  ]
}


const App = () => {
  return <div style={{
    display:'flex', 
    justifyContent:'space-evenly', 
    margin:'2em', 
    padding:'2em',
    backgroundColor: '#f5f5f5'
    }}>
  <PitchChart data={data} height={300}></PitchChart>
  <PitchChart data={data2} height={300}></PitchChart>
  <PitchChart data={data3} height={300}></PitchChart>
  </div>
}

export default App


