'use strict'
const NUMBER = [4, 3, 2, 1];
var result = ["-"];

//for single digits
const numberName = function (digit) {
    let answer;
    switch (digit) {
        case 0:
            break;
        case 1:
            answer = "one";
            break;
        case 2:
            answer = "two";
            break;
        case 3:
            answer = "three";
            break;
        case 4:
            answer = "four";
            break;
        case 5:
            answer = "five";
            break;
        case 6:
            answer = "six";
            break;
        case 7:
            answer = "seven";
            break;
        case 8:
            answer = "eight";
            break;
        case 9:
            answer = "nine";
            break;
        default:
            console.log("nothing");
            break;
    }
    result.push = answer;
    return;
}
//for thousands
const thousand = function () {
    result.push = "thousand";
    return;
}
//for hundreds
const hundred = function () {
    result.push = "hundred";
    return;
}
//for ties
const ties = function (tie) {
    let answer;
    switch (tie) {
        case 0:
            return;
            break;
        case 2:
            answer = "twenty";
            break;
        case 3:
            answer = "thirty";
            break;
        case 4:
            answer = "fourty";
            break;
        case 5:
            answer = "fifty";
            break;
        case 6:
            answer = "sixty";
            break;
        case 7:
            answer = "seventy";
            break;
        case 8:
            answer = "eighty";
            break;
        case 9:
            answer = "ninety";
            break;
        default:
            console.log("nothing");
            break;
    }
    result.push = answer;
    return;
}
//check length and call desired functions
const toalpha = function (number) {
    let length = number.length;
    for (let index = length; index >= 1; index--) {
        for (let mainIndex = 0; mainIndex < length; mainIndex++) {
            switch (index) {
                case 4:
                    numberName(number[mainIndex]);
                    thousand();
                    break;
                case 3:
                    numberName(number[mainIndex]);
                    hundred();
                    break;
                case 2:
                    ties(number[mainIndex]);
                    break;
                case 1:
                    numberName(number[mainIndex]);
                    break;
                default:
                    console.log("invalid size");
                    break;
            }
        }
    }
    return result;
}
console.log(toalpha(NUMBER));