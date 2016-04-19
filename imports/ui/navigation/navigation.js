import {Template} from 'meteor/templating';

//import { Tasks } from '../api/tasks.js';

import './navigation.html';


Template.navigation.events({
  'click .dropdown-menu' () {
    // Set the checked property to the opposite of its current value
   console.log("This is how we roll");
  },
  'click .delete' () {
    Tasks.remove(this._id);
  },
});