Meteor.subscribe('showEjuice');

Template.ejuice.rendered = () => {
	$(".owl-carousel").owlCarousel({
		items: 3,
		itemsDesktop : [1000,3],
        itemsDesktopSmall : [900,3],
		itemsTablet: [600, 2],
		itemsMobile: false,
		responsive: true,
		lazyEffect: 'fade',
		lazyLoad: true
	});
	$('#slide-ej-btn').click();
	$('#slide-ej-btn').focus()
}

Template.ejuice.helpers({
	ejuice () {
		return Ejuice.find({})
	}
});

Template.ejuice.events({
	'click #add-to-cart-ej' () {
		console.log(this.name)
	} 
});