// E - JUICE
Meteor.publish('showEjuice', ()=> {
	return Ejuice.find({})
});
//Cart
Meteor.publish('showCart', ()=> {
	return Cart.find({})
});