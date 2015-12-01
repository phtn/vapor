// E - JUICE
Meteor.publish('showEjuice', ()=> {
	return Ejuice.find({})
});

// BOTTLE SIZES
Meteor.publish('showBottleSizes', ()=> {
	return BottleSizes.find({});
});

// NICOTINE LEVELS
Meteor.publish('showNicotineLevels', ()=> {
	return NicotineLevels.find({});
});

//Cart
Meteor.publish('showCart', ()=> {
	return Cart.find({})
});