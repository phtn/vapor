
Meteor.subscribe('showOrders');
Meteor.subscribe('showCartSubmit');
Meteor.subscribe('showBilling');

// EVENTS
Template.adminOrders.events({
	'click #view-order-list' () {
		//console.log(this);
		Session.setPersistent('order-list-id', this._id);
		Session.setPersistent('order-list-owner', this.owner);
		Session.setPersistent('order-list-cust', this.name)
	},
	'click #action' () {
		if (Session.get('order-status') === 'new order') {
			Meteor.call('setForDelivery', Session.get('order-list-id'))
		} else if (Session.get('order-status') === 'for delivery') {
			Meteor.call('setOrderCompleted', Session.get('order-list-id'))
		} else if (Session.get('order-status') === 'order fulfilled') {
			Meteor.call('sendToArchives', Session.get('order-list-id'))
		}
	},
	'click .it' () {
		console.log(this.owner)
	},
	'click #orders-count' () {
		Session.setPersistent('order-status', 'new order')
	},
	'click #delivery' () {
		Session.setPersistent('order-status', 'for delivery')
	},
	'click #completed' () {
		Session.setPersistent('order-status', 'order fulfilled')
	}
});

// HELPERS
Template.adminOrders.helpers({
	orders () {
		return Orders.find({status: Session.get('order-status')})
	},
	newOrdersCount () {
		return Orders.find({status: 'new order'}).count()
	},
	forDeliveryCount () {
		return Orders.find({status: 'for delivery'}).count()
	},
	completedCount () {
		return Orders.find({status: 'order fulfilled'}).count()
	},
	archivesCount () {
		return Orders.find({status: 'archived'}).count()
	},
	archives () {
		return Orders.find({status: 'archived'})
	},
	customer () {
		return Session.get('order-list-cust')
	},
	items () {
		return CartSubmit.find({owner: Session.get('order-list-owner')})
	},
	profile () {
		return Profiles.findOne({owner: Session.get('order-list-owner')})
	},
	billing () {
		return BillingAddress.findOne({owner: Session.get('order-list-owner')})
	},
	creditCardInfo () {
		return PaymentInfo.findOne({owner: Session.get('order-list-owner')})
	},
	action () {
		if (Session.get('order-status') === 'new order') {
			return 'Send for Delivery'
		} else if (Session.get('order-status') === 'for delivery') {
			return 'Set Order as Fulfilled'
		} else {
			return 'Send Record to Archives'
		}
	}

});

Template.adminOrders.rendered = ()=> {
	Session.setPersistent('order-status', 'new order')
}