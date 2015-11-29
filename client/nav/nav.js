Template.nav.rendered = () => {
	$.material.init();
}

Template.nav.events({
	'click #home' () {
		FlowRouter.go('/home')
		//$(this).
	},
	'click #e-juice' () {
		FlowRouter.go('/ejuice')
	}
});

Template.nav.helpers({
	countCart () {
		return Cart.find({}).count()
	}
});