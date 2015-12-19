Meteor.subscribe('showBottleSizes');
Meteor.subscribe('showNicotineLevels');

// RENDERED
Template.ejuiceTemp.rendered = ()=> {
	Session.setDefault('ejuice-price', 13.99);
	Session.setDefault('nicotine-level', '0');
	Session.setPersistent('current-temp-page', 'ejuice-temp');
	
	var highlight = 'highlight'; 
	var $size = $('.size-btn').click(function(e) {
	    e.preventDefault();
	    $size.removeClass(highlight);
	    $(this).addClass(highlight);
	});
	
	var $nic = $('.nic-btn').click(function(e) {
	    e.preventDefault();
	    
	    $nic.removeClass(highlight);
	    $(this).addClass(highlight);
	});
	
	$('.size-btn').first().click();
	$('.nic-btn').first().click();
	
}

// HELPERS
Template.ejuiceTemp.helpers({
	name () {
		return Session.get('ejuice-name')
	},
	desc () {
		return Session.get('ejuice-desc')
	},
	image () {
		return EjuiceImages.findOne({ejuiceId: Session.get('ejuice-id')})
	},
	price () {
		return Session.get('ejuice-price')
	},
	bottleSizes () {
		return BottleSizes.find({})
	},
	nicotineLevels () {
		return NicotineLevels.find({})
	}
});

// EVENTS
Template.ejuiceTemp.events({
	'click #back-to-ejuice' () {
		FlowRouter.go('/ejuice');
	},
	'click .size-btn' () {
		Session.setPersistent('ejuice-price', this.price)
		Session.setPersistent('ejuice-size',this.size)
	},
	'click .nic-btn' () {
		Session.setPersistent('ejuice-nicotine-level', this.level)
	},
	'click #add-to-cart-ejuice' () {
		if (Meteor.userId() !== null) {
		
		// CART	
			Meteor.call('addEjuiceToCart',
			Meteor.userId(), 
			Session.get('ejuice-id'), 
			Session.get('ejuice-name'), 
			Session.get('ejuice-price'), 
			Session.get('ejuice-url'), 
			Session.get('ejuice-size'), 
			Session.get('ejuice-nicotine-level'), 
			'ion-waterdrop');
		
		// CART SUBMIT	
			Meteor.call('addEjuiceToCartSubmit',
			Meteor.userId(), 
			Session.get('ejuice-id'), 
			Session.get('ejuice-name'), 
			Session.get('ejuice-price'), 
			Session.get('ejuice-url'), 
			Session.get('ejuice-size'), 
			Session.get('ejuice-nicotine-level'), 
			'ion-waterdrop');

			Bert.alert({
			  type: 'add-to-cart',
			  message: 'Successfully added to cart!',
			  style: 'growl-top-right',
			  icon: 'ion-android-checkmark-circle'
			});
		} else {
			FlowRouter.go('/login')
			Bert.alert({
			  type: 'must-signin',
			  message: 'You must be signed in to add items to cart.',
			  style: 'growl-top-right',
			  icon: 'ion-log-in'
			});
		}
	}
})



