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

//Template.changeColor.onRendered(function () {
//
// $('.changeColor input').focusout(function () {
//    var text_val = $(this).val();
//    if (text_val == '') {
//      $(this).removeClass('has-value');
//      console.log("This is working")
//    } else {
//      $(this).addClass('has-value');
//    }
//  });
//});

//template.changeColor.onclick(function () {
//  $('.changeColor input').focusout(function () {
//    $('list-group-item').addClass('bg-danger');
//    else {
//      $('list-group-item').removeClass('bg-danger');
//    }
//  });
//});

//Template.task.events({
//  'click .toggle-checked'() {
//    // Set the checked property to the opposite of its current value
//    Meteor.call('tasks.setChecked', this._id, !this.checked);
//  },
//  'click .delete'() {
//    Meteor.call('tasks.remove', this._id);
//  },
//});