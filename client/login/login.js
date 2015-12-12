Template.login.events({
	'click #google' () {
		Meteor.loginWithGoogle({
			requestPermission: ['email','profile']
		}, function(err) {
			if (err) {
				// ERROR
			}
		});
	}
})