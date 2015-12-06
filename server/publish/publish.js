// ADMIN
Meteor.publish('showAdmin', () => {
	return Administrators.find({})
});

// E - JUICE
Meteor.publish('showEjuice', ()=> {
	return Ejuice.find({})
});

// BOTTLE SIZES
Meteor.publish('showBottleSizes', ()=> {
	return BottleSizes.find({})
});

// NICOTINE LEVELS
Meteor.publish('showNicotineLevels', ()=> {
	return NicotineLevels.find({})
});

// MODS
Meteor.publish('showMods', ()=> {
	return Mods.find({})
});

// TRIMS
Meteor.publish('showTrims', ()=> {
	return Trims.find({})
});

// CART
Meteor.publish('showCart', ()=> {
	return Cart.find({})
});