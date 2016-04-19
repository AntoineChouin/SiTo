import {
  Template
}
from 'meteor/templating';

//import { Tasks } from '../api/tasks.js';

import './navigation.html';

Template.navigation.events({
  '#wrapper onload': function (e) {
     $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
  });
  }
});

Template.navigation.events = function () {

}

Template.navigation.events({
  'click .dropdown-menu' () {
    // Set the checked property to the opposite of its current value
    console.log("This is how we roll");
  },
  'click .delete' () {
    Tasks.remove(this._id);
  },
});