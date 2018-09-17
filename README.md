![gladys version](https://badgen.net/badge/Gladys/%3E=%203.9/purple)
![license](https://badgen.net/github/license/NicolasD-62/gladys-suncalc)
[![dependencies Status](https://badgen.net/david/dep/NicolasD-62/gladys-suncalc)](https://david-dm.org/NicolasD-62/gladys-suncalc)

# gladys-sunclac
Gladys module to get sun and moon position (altidute and azimuth) and lunar phase in Gladys.

## Installation

Install the module through Gladys modules pannel and reboot Gladys when it's done. 

## Usage

### Sun data

To get actual position: 
```javascript
var options = {
    latitude: 48.8583,
    longitude: 2.2922
};

gladys.modules.suncalc.sun.position(options)
    .then((result) => {
        console.log(result);
        console.log(result.altitude);
        console.log(result.azimuth);
    })
    .catch(console.log);
```

### Moon data

Moon phase value should be interpreted like this:

| Phase | Name            |
| ----: | --------------- |
|     0 | New Moon        |
|       | Waxing Crescent |
|  0.25 | First Quarter   |
|       | Waxing Gibbous  |
|   0.5 | Full Moon       |
|       | Waning Gibbous  |
|  0.75 | Last Quarter    |
|       | Waning Crescent |

To get actual position: 
```javascript
var options = {
    latitude: 48.8583,
    longitude: 2.2922
};

gladys.modules.suncalc.moon.position(options)
    .then((result) => {
        console.log(result);
        console.log(result.altitude);
        console.log(result.azimuth);
        console.log(result.distance);
        console.log(result.parallacticAngle);
    })
    .catch(console.log);
```

To get actual illumination: 
```javascript
gladys.modules.suncalc.moon.illumination()
    .then((result) => {
        console.log(result);
        console.log(result.fraction);
        console.log(result.phase);
        console.log(result.angle);
    })
    .catch(console.log);
```
