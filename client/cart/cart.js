Meteor.subscribe('showCart');

// HELPERS
Template.cart.helpers({
	cartItems () {
		return Cart.find({owner: Meteor.userId()})
	},
	subtotal () {
		// SHIPPING
		Session.setPersistent('shipping-rate', 4)
		// SUBTOTAL
		var subtotal = 0;
		Cart.find({owner: Meteor.userId()}).map((doc) => {
		  	subtotal += doc.price;
			Session.setPersistent('subtotal', parseFloat(subtotal.toFixed(2)));
		});
		return Session.get('subtotal')
	},
	tax () {
		Session.setPersistent('tax',((Session.get('subtotal') + Session.get('shipping-rate')) * .06).toFixed(2));
		return Session.get('tax');
	},
	total () {
		var total = parseFloat(Session.get('subtotal')) + parseFloat(Session.get('tax')) + parseFloat(Session.get('shipping-rate'));
		Session.setPersistent('total', total.toFixed(2));
		return Session.get('total')
	},
	cartNotEmpty () {
		return Cart.find({}).count()
	}
})

// EVENTS
Template.cart.events({
	'click #trash' () {
		Meteor.call('removeItemFromCart', this._id);
		Meteor.call('removeItemFromCartSubmit', this.item);
		Bert.alert({
		  type: 'remove-from-cart',
		  message: this.name + ' removed.',
		  style: 'growl-top-right',
		  icon: 'ion-ios-minus'
		});
	},
	'click #checkout' () {

	// CHECK IF SHIPPING ADDRESS IS COMPLETE
		if (Profiles.find({owner: Meteor.userId(), address: {$ne: null}}).count() !== 0) {
			
			FlowRouter.go('/payments')

		} else {

			FlowRouter.go('/profile')
			// ALERT
			Bert.alert({
			  type: 'must-signin',
			  message: 'Enter Complete Shipping Address.',
			  style: 'growl-top-right',
			  icon: 'ion-ios-location'
			});
		}
	
	/*
	// INSERT TO ORDERS
		var file = Profiles.findOne({owner: Meteor.userId()})
		if (Profiles.find({owner: Meteor.userId(), address: {$ne: null}}).count() !== 0) {
			Meteor.call('addToOrders',
				Meteor.userId(),
				file.name,
				file.phone,
				file.email,
				Session.get('total'),
				'new order',
				'ion-bag',
			);

		// DELETE CART
			Meteor.call('removeAfterSubmit', Meteor.userId());

		// ROUTE
			FlowRouter.go('/order-submitted')

		} else {
			FlowRouter.go('/profile')
			Bert.alert({
			  type: 'must-signin',
			  message: 'Enter Complete Shipping Address.',
			  style: 'growl-top-right',
			  icon: 'ion-ios-location'
			});
		}
	*/



	
	}
});

// RENDERED
Template.cart.rendered = ()=> {
	Session.setPersistent('go-back-to-cart', 'cart')
}
