import '../imports/startup/accounts-config.js';
import '../imports/ui/body.js';

// index.js 
var moment = require('moment');
var output1 = moment().format('LLLL');
var output2 = moment().format('llll');
console.log(output1);
alert(ouput);

if (Meteor.isClient) {
  $(function () {
    $('.awesome-form input').focusout(function () {
      var text_val = $(this).val();
      if (text_val == '') {
        $(this).removeClass('has-value');
      } else {
        $(this).addClass('has-value');
      }
    });
  });
}