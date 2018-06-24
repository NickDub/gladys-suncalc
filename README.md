Gladys Sunclac
=======================

This module allows you to get sun and moon position (altidute and azimuth) and lunar phase in Gladys.

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

## Installation

To install this module :

- Install the module in Gladys 
- Reboot Gladys 

## Usage
### Sun
To get actual position :
```javascript
var options = {
    latitude: 45,
    longitude: 45
};

gladys.modules.suncalc.sun.position(options)
    .then((result) => {
        console.log(result);
        console.log(result.altitude);
        console.log(result.azimuth);
    })
    .catch(console.log);
```

### Moon
To get actual position :
```javascript
var options = {
    latitude: 45,
    longitude: 45
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

To get actual illumination :
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
