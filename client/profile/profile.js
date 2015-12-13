
// EVENTS
Template.profile.events({
	'click #logout' () {
		Meteor.logout();
		FlowRouter.go('/home')
	}
});

// HELPERS
Template.profile.helpers({

});

// RENDERED
Template.profile.rendered = ()=> {
	if (Meteor.userId() === null) {
		FlowRouter.go('/home');
	}
};

