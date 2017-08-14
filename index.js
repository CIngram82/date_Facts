const chalk = require('chalk');

console.log(chalk.blue('Hello world!'));
var moment = require('moment');

console.log("It is " + chalk.blue(moment().format("dddd, MMMM Do YYYY, h:mm:ss a")) + ".");
console.log("It is the " + chalk.magenta(moment().format("DDDo")) + " day of the year.");
let timeInSec = (moment().hour()*3600)+(moment().minutes()*60)+(moment().seconds());


console.log("It is " + chalk.cyan(timeInSec) + " seconds into the day.");
let dst;
if (moment().isDST()) {
  dst = "is";
} else {
  dst = "is not";
}
console.log("It " + chalk.green(dst) + " during Daylight Savings Time.");
let leapYear;
if (moment().isLeapYear()) {
  leapYear = "is";
} else {
  leapYear = "is not";
}
console.log("It " + chalk.red(leapYear) + " not a leap year.");
