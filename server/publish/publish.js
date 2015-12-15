

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