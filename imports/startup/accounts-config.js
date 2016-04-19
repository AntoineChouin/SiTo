import {
  Accounts
}
from 'meteor/accounts-base';
//import { accounts-facebook } from 'accounts-facebook';

Accounts.ui.config({
  requestPermissions: {
    facebook: ['user_likes'],
    github: ['user', 'repo']
  },
  passwordSignupFields: 'USERNAME_ONLY',
  //  service: "facebook";
});


Meteor.startup(function () {
  // Add Facebook configuration entry
  ServiceConfiguration.configurations.update({
    service: "facebook"
  }, {
    $set: {
      appId: "955842617839935",
      secret: "055dc5c46b389a43c810193e7414d072"
    }
  }, {
    upsert: true
  });
});
