Template.modsTemp.helpers({
	name () {
		return Session.get('name-mod')
	},
	price () {
		return Session.get('price-mod')
	},
	desc () {
		return Session.get('desc-mod')
	},
	kit () {
		return Session.get('kit-mod')
	},
	url () {
		return Session.get('url-mod')
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