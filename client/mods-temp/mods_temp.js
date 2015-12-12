Template.modsTemp.helpers({
	name () {
		return Session.get('mod-name')
	},
	desc () {
		return Session.get('mod-desc')
	},
	kit () {
		return Session.get('mod-kit')
	},
	price () {
		return Session.get('mod-price')
	},
	image () {
		return ModsImages.findOne({modId: Session.get('mod-id')})
	}
});

Template.modsTemp.events({
	'click #back-to-mods' () {
		FlowRouter.go('/mods')
	},
	'click #add-to-cart-mod' () {
		if (Meteor.userId != '') {
			Meteor.call('addModToCart', 
				Meteor.userId(),
				Session.get('mod-id'),
				Session.get('mod-name'), 
				Session.get('mod-desc'), 
				Session.get('mod-kit'), 
				Session.get('mod-price'), 
				'ion-ios-gear')

			Bert.alert({
			  type: 'add-to-cart-ejuice',
			  message: Session.get('mod-name') +' added to cart!',
			  style: 'growl-top-right',
			  icon: 'ion-android-checkmark-circle'
			});
		} else {
			FlowRouter.go('/login')
		}
	}
})