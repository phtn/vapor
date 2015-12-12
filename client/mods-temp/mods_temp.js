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
		Meteor.call('addModToCart', Session.get('id-mod'), Session.get('name-mod'), Session.get('price-mod'), Session.get('url-mod'), 'ion-ios-gear')

		Bert.alert({
		  type: 'add-to-cart-ejuice',
		  message: Session.get('name-mod') +' added to cart!',
		  style: 'growl-top-right',
		  icon: 'ion-android-checkmark-circle'
		});
	}
})