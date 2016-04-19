import '../imports/api/tasks.js';
//
//if (ServiceConfiguration.configurations.find({
//    service: 'facebook'
//  }).count() === 0) {
//  ServiceConfiguration.configurations.insert({
//    service: "facebook",
//    appId: "955842617839935",
//    secret: "055dc5c46b389a43c810193e7414d072"
//  });
//}
//
//// bonus: get some additional profile info from facebook and cache on the user document
//Accounts.onCreateUser(function (options, user) {
//  check(options, Object);
//  check(user, Object);
//
//  options.profile.email = user.services.facebook.email;
//  options.profile.facebookId = user.services.facebook.id;
//
//  user.profile = options.profile;
//
//  return user;
//});
