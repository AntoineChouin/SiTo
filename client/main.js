import '../imports/startup/accounts-config.js';
import '../imports/ui/body.js';

// index.js 
var moment = require('moment');
var output1 = moment().format('LLLL');
var output2 = moment().format('llll');
console.log(output1 + " " + output2);


if (Meteor.isClient) {
 
}