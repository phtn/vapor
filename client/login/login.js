
// EVENTS
Template.login.events({
	
	'click #google' () {
		Meteor.loginWithGoogle({
			requestPermission: ['email','profile']
		}, function(err) {
			if (err) {
				// ERROR
			}
		});
	},
	'click #facebook' () {
		Meteor.loginWithFacebook({
			requestPermission: ['email','profile']
		}, function(err) {
			if (err) {
				// ERROR
			}
		});
	}
});

// RENDERED
Template.login.rendered = ()=> {

// REDIRECT AFTER LOGGED IN
	Tracker.autorun(()=> {
		if (Meteor.userId() !== null) {
			if (Session.get('current-temp-page') === undefined) {
				FlowRouter.go('/profile');	
			} else {
				FlowRouter.go('/' + Session.get('current-temp-page'))
			}
		
				

		// ALERT
			Bert.alert({
			  	type: 'welcome-note',
			  	title: 'Hi, ' + Session.get('firstName') + '!',
			  	message: 'Welcome to Vaportimme New Hope',
			  	style: 'growl-top-right',
			  	icon: 'ion-ios-heart'
			});
	}	
	})
	
}