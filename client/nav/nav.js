Template.nav.rendered = () => {
	$.material.init();
}

Template.nav.events({
	//
});

Template.nav.helpers({
	countCart () {
		return Cart.find({}).count()
	}
});