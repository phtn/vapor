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
		console.log(this.url);
		Session.set('ejuice-name', this.name)
		Meteor.call('insertToCart', this._id, this.name, this.desc, this.url, this.price)
		Bert.alert({
				type: 'addThis',
				style: 'fixed-bottom',
				message: Session.get('ejuice-name') + ' added to your cart!',
				icon: 'fa-check'
			})
	} 
});