

// BOTTLE SIZES
Meteor.publish('showBottleSizes', ()=> {
	return BottleSizes.find({})
});

// NICOTINE LEVELS
Meteor.publish('showNicotineLevels', ()=> {
	return NicotineLevels.find({})
});



// TRIMS
Meteor.publish('showTrims', ()=> {
	return Trims.find({})
});

// CART
Meteor.publish('showCart', ()=> {
	return Cart.find({})
});