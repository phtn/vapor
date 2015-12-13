
Meteor.subscribe('showOrders');
Meteor.subscribe('showCartSubmit');

// EVENTS
Template.adminOrders.events({

});

// HELPERS
Template.adminOrders.helpers({
	orders () {
		return Orders.find()
	},
	ordersCount () {
		return Orders.find().count()
	}
});