Template.nav.rendered = () => {
	$.material.init();

	var focus = 'focus'; 
	var $nav = $('.lg-screen li').click(function(e) {
	    e.preventDefault();
	
	    $nav.removeClass(focus);
	    $(this).addClass(focus);
	});
}

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
		//FlowRouter.go('/trims')
	},
	'click #social' () {
		//FlowRouter.go('/social')
	},
	'click #cart' () {
		FlowRouter.go('/cart')
	},
	'click #sign-in' () {
		//FlowRouter.go('/sign-in')
	},
});

Template.nav.helpers({
	countCart () {
		return Cart.find({}).count()
	}
});

