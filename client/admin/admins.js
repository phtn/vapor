Meteor.subscribe('showAdmin')

Template.adminNav.events({
	'click #admin-login' () {
		$('.login-admin-nav').fadeOut('fast');
		$('.auth-admin-nav').fadeIn(3000);
	}
})