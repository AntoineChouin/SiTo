import {
  Template
}
from 'meteor/templating';
import {
  moment
}
from 'moment';

//import { font-awesome } from 'font-awesome';
//import { Tasks } from '../api/tasks.js';
import './formTask.html';

Template.formTask.onRendered(function () {

  $('.awesome-form input').focusout(function () {
    var text_val = $(this).val();
    if (text_val == '') {
      $(this).removeClass('has-value');
      console.log("This is working")
    } else {
      $(this).addClass('has-value');
    }
  });
});
