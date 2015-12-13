
// RENDERED
Template.trimsTemp.rendered = ()=> {
	Session.setPersistent('current-temp-page', 'trims-temp');
};

// HELPERS
Template.trimsTemp.helpers({
	name () {
		return Session.get('trim-name')
	},
	desc () {
		return Session.get('trim-desc')
	},
	kit () {
		return Session.get('trim-kit')
	},
	price () {
		return Session.get('trim-price')
	},
	image () {
		return TrimsImages.findOne({trimId: Session.get('trim-id')})
	}
});

// EVENTS
Template.trimsTemp.events({
	'click #back-to-trims' () {
		FlowRouter.go('/trims')
	},
	'click #add-to-cart-trim' () {
		if (Meteor.userId() !== null) {

		// CART	
			Meteor.call('addTrimToCart', 
				Meteor.userId(),
				Session.get('trim-id'),
				Session.get('trim-name'), 
				Session.get('trim-desc'), 
				Session.get('trim-kit'), 
				Session.get('trim-price'), 
				'fa fa-plug')

		// CART	SUBMIT
			Meteor.call('addTrimToCartSubmit', 
				Meteor.userId(),
				Session.get('trim-id'),
				Session.get('trim-name'), 
				Session.get('trim-desc'), 
				Session.get('trim-kit'), 
				Session.get('trim-price'), 
				'fa fa-plug')

			Bert.alert({
			  type: 'add-to-cart',
			  message: Session.get('trim-name') +' added to cart!',
			  style: 'growl-top-right',
			  icon: 'ion-android-checkmark-circle'
			});
		} else {
			FlowRouter.go('/login')
		}
	}
})