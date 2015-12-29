

// BOTTLE SIZES
Meteor.publish('showBottleSizes', ()=> {
	return BottleSizes.find({})
});

// NICOTINE LEVELS
Meteor.publish('showNicotineLevels', ()=> {
	return NicotineLevels.find({})
});

// CART
Meteor.publish('showCart', ()=> {
	return Cart.find({})
});

// CART SUBMIT
Meteor.publish('showCartSubmit', ()=> {
	return CartSubmit.find({})
});

// PROFILES
Meteor.publish('showProfile', ()=> {
	return Profiles.find({})
});
// CREDIT CARD
Meteor.publish('showCard', function() {
	var currentUserId = this.userId;
	return PaymentInfo.find({owner: currentUserId});
});

// USER ORDERS
Meteor.publish('showUserOrders', function() {
	var currentUserId = this.userId;
	return Orders.find({owner: currentUserId, status: 'new order'});
});

// HOME

Meteor.publish('showHomeImages', ()=> {
	return HomeImages.find()
});

Meteor.publish('showHomeCarousel', ()=> {
	return HomeCarousel.find()
});