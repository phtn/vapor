Meteor.subscribe('showCart');

Template.cart.helpers({
	cartItems () {
		return Cart.find({})
	}
})

Template.cart.events({
	'click #trash' () {
		Meteor.call('removeItemFromCart', this._id)
	}
})