
Meteor.subscribe('showProfile')

// EVENTS
Template.profile.events({
	'click #logout' () {
		Meteor.logout();
		FlowRouter.go('/home')
	},
	'click #save-profile' () {
		if ($('#profile-address').val() === '') {
			Session.setPersistent('profile-address', null)

		} else  {
			Session.setPersistent('profile-address', $('#profile-address').val())
		}



		if (Profiles.find({owner: Meteor.userId()}).count() === 0 ) {
			Meteor.call('insertProfile', Meteor.userId(), $('#profile-name').val(), $('#profile-phone').val(), $('#profile-email').val(), Session.get('profile-address'), $('#profile-city').val(), $('#profile-state').val(), $('#profile-zip').val())
			console.log('no profile')
		} else {
			Meteor.call('updateProfile', Meteor.userId(), $('#profile-name').val(), $('#profile-phone').val(), $('#profile-email').val(), Session.get('profile-address'), $('#profile-city').val(), $('#profile-state').val(), $('#profile-zip').val())
		}
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
	Session.setPersistent('current-temp-page', 'home')

	var file = Profiles.findOne({owner: Meteor.userId()})
	
		$('#profile-name').val(file.name)
		$('#profile-phone').val(file.phone)
		$('#profile-email').val(file.email)
		$('#profile-address').val(file.address)
		$('#profile-city').val(file.city)
		$('#profile-state').val(file.state)
		$('#profile-zip').val(file.zip)
	
	
	
};

Template.profile.onCreated = ()=> {
	i
}

