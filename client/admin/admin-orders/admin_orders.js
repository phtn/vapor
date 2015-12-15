
Meteor.subscribe('showOrders');
Meteor.subscribe('showCartSubmit');

// EVENTS
Template.adminOrders.events({
	'click #done' () {
		//console.log(this);
		Session.setPersistent('order-list-id', this._id);
		Session.setPersistent('order-list-owner', this.owner);
		Session.setPersistent('order-list-cust', this.name)
	},
	'click #paid' () {
		Meteor.call('removeAfterPay', Session.get('order-list-id'), Session.get('order-list-owner'))
	},
	'click .it' () {
		console.log(this.owner)
	}
});

// HELPERS
Template.adminOrders.helpers({
	orders () {
		return Orders.find()
	},
	ordersCount () {
		return Orders.find().count()
	},
	customer () {
		return Session.get('order-list-cust')
	},
	items () {
		return CartSubmit.find({owner: Session.get('order-list-owner')})
	},
	profile () {
		return Profiles.findOne({owner: Session.get('order-list-owner')})
	}

});