import { Template} from 'meteor/templating';

//import { Tasks } from '../api/tasks.js';

import './navigation.html';

Template.navigation.events({

  '#wrapper onload': function () {
    $(document).ready(function () {
      var trigger = $('.hamburger'),
        overlay = $('.overlay'),
        isClosed = false;

      trigger.click(function () {
        hamburger_cross();
      });

      function hamburger_cross() {

        if (isClosed == true) {
          overlay.hide();
          trigger.removeClass('is-open');
          trigger.addClass('is-closed');
          isClosed = false;
        } else {
          overlay.show();
          trigger.removeClass('is-closed');
          trigger.addClass('is-open');
          isClosed = true;
        }
      }

      $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
      });
    });

}
});

Template.navigation.onload = function () {
  var X = "dfa"
  console.log("eaf" + " " + X);
}

Template.navigation.events({
  'click .dropdown-menu' () {
    // Set the checked property to the opposite of its current value
    console.log("This is how we roll");
    console.log("eaf");
  },
  'click .delete' () {
    Tasks.remove(this._id);
  },
});