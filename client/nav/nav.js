Template.nav.rendered = () => {
	$.material.init();

// NAV FOCUS
	var focus = 'focus'; 
	var $nav = $('.lg-screen li').click(function(e) {
	    e.preventDefault();
	
	    $nav.removeClass(focus);
	    $(this).addClass(focus);
	});

// FIRST NAME
	if (Meteor.userId() != null) {
		Session.setPersistent('firstName', Meteor.user().profile.name )
	}
}

// EVENTS
Template.nav.events({
	'click #home' () {
		FlowRouter.go('/home')
	},
	'click #e-juice' () {
		FlowRouter.go('/ejuice')
	},
	'click #mods' () {
		FlowRouter.go('/mods')
	},
	'click #trims' () {
		FlowRouter.go('/trims')
	},
	'click #social' () {
		//FlowRouter.go('/social')
	},
	'click #cart' () {
		FlowRouter.go('/cart')
	},
	'click #sign-in' () {
		FlowRouter.go('/login')
	},
	'click #user' () {
		FlowRouter.go('/profile')
	}
});
// SUBSCRIBE
Meteor.subscribe('userData');

// HELPERS
Template.nav.helpers({
	countCart () {
		return Cart.find({owner: Meteor.userId()}).count()
	},
	user () {
		return getFirstName(Meteor.user().profile.name)
	}
});

function getFirstName(name) {
    if (name.indexOf(' ') === -1)
        return name;
    else
        return name.substr(0, name.indexOf(' '));
};