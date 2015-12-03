Meteor.subscribe('showCart');

Template.cart.helpers({
	cartItems () {
		return Cart.find({})
	},
	subtotal () {
		var subtotal = 0;
		Cart.find({}).map((doc) => {
		  	subtotal += doc.price;
			Session.setPersistent('subtotal', subtotal.toFixed(2));
		});
		return Session.get('subtotal')
	},
	tax () {
		Session.setPersistent('tax',(Session.get('subtotal') * .08).toFixed(2));
		return Session.get('tax');
	},
	total () {
		var total = parseFloat(Session.get('subtotal')) + parseFloat(Session.get('tax'));
		Session.setPersistent('total', total.toFixed(2));
		return Session.get('total')
	},
	cartNotEmpty () {
		return Cart.find({}).count()
	}
})

Template.cart.events({
	'click #trash' () {
		Meteor.call('removeItemFromCart', this._id)
		Bert.alert({
		  type: 'remove-from-cart',
		  message: this.name + ' REMOVED FROM CART',
		  style: 'growl-top-right',
		  icon: 'ion-ios-close-outline'
		});
	}
})

Tracker.autorun(function() {
	
});
