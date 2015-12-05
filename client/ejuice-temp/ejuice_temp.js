Meteor.subscribe('showBottleSizes');
Meteor.subscribe('showNicotineLevels');

Template.ejuiceTemp.rendered = ()=> {
	Session.setDefault('ejuice-price', 13.99);
	Session.setDefault('nicotine-level', '0');

	
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

Template.ejuiceTemp.helpers({
	name () {
		return Session.get('ejuice-name')
	},
	desc () {
		return Session.get('ejuice-desc')
	},
	url () {
		return Session.get('ejuice-url')
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
		Meteor.call('addEjuiceToCart', 
			Session.get('ejuice-id'), 
			Session.get('ejuice-name'), 
			Session.get('ejuice-price'), 
			Session.get('ejuice-url'), 
			Session.get('ejuice-size'), 
			Session.get('ejuice-nicotine-level'), 
			'ion-waterdrop');

		Bert.alert({
		  type: 'add-to-cart-ejuice',
		  message: 'Successfully added to cart!',
		  style: 'growl-top-right',
		  icon: 'ion-android-checkmark-circle'
		});
	}
})



