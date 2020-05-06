//https://www.codewars.com/kata/55e2adece53b4cdcb900006c/train/javascript

function race(v1, v2, g) {
    var hoursFraction = g / (v2 - v1);
    
    return v1 > v2 ? null : [Math.floor(hoursFraction), Math.floor((hoursFraction * 60) % 60), Math.floor((hoursFraction * 3600) % 60)]
}