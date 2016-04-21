import {Template} from 'meteor/templating';
import { Tasks } from '../../api/tasks.js';

import './task.html';

Template.task.events({
  'click .toggle-checked'() {
    // Set the checked property to the opposite of its current value
    Meteor.call('tasks.setChecked', this._id, !this.checked);
  },
  'click .delete'() {
    Meteor.call('tasks.remove', this._id);
  },
});

Template.task.events({
  'sumit .addTask': function(event) {
    // prevent from submission
   event.preventDefault();
    
    //get value
    var c = event.target.querySelector ('#content').value;
    
    //insert into Tasks
    Message.insert({content: c, date: new Date()});
    
    //reset form fields
    event.target.reset();
  },
  'click .delete'() {
    Meteor.call('tasks.remove', this._id);
  },
});