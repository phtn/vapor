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