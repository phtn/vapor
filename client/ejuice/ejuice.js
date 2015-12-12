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
	$('#slide-ej-btn').focus();
	//let desc = $('.desc');
	//desc.text(desc.text().substring(0,10))
}

Template.ejuice.helpers({
	ejuice () {
		return Ejuice.find({})
	},
	shortDesc () {
		//return
	},
	ejuices () {
		return Ejuices.find()
	},
	image () {
		return EjuiceImages.findOne({ejuiceId: this._id})
	}
});

Template.ejuice.events({
	'click #add-to-cart-ej' () {
		console.log(this.url);
		Meteor.call('insertToCart', this._id, this.name, this.desc, this.url, this.price)
		Bert.alert({
				type: 'addThis',
				style: 'fixed-bottom',
				message: Session.get('ejuice-name') + ' added to your cart!',
				icon: 'fa-check'
			})
	},
	'click .grid-thumbnail' () {
		Session.setPersistent('ejuice-id', this._id);
		Session.setPersistent('ejuice-name', this.name);
		Session.setPersistent('ejuice-desc', this.desc);
		Session.setPersistent('ejuice-url', this.url);
		FlowRouter.go('/ejuice-temp')
	}
});