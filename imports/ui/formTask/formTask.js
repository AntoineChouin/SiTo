import {Template} from 'meteor/templating';
import {moment} from 'moment';

//import { font-awesome } from 'font-awesome';
//import { Tasks } from '../api/tasks.js';
import './formTask.html';

Template.formTask.events({
//  'click input.checkbox' () {
//    // Set the checked property to the opposite of its current value
//    console.log("This is how we roll");
//  },
  'click .delete' () {
    Tasks.remove(this._id);
  },
  'click #button': function (e) {
    // Instead of using $(this), you can do:
   alert("afd");
    // Your usual code here, e.g.:
    console.log("adfdfa");
  }

});