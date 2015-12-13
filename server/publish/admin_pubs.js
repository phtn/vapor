
// E-JUICE
Meteor.publish('showEjuices', ()=> {
	return Ejuices.find()
});
// E-JUICE IMAGES
Meteor.publish('showEjuiceImages', ()=> {
	return EjuiceImages.find()
});
// MODS
Meteor.publish('showMods', ()=> {
	return Mods.find()
});
// MODS IMAGES
Meteor.publish('showModsImages', ()=> {
	return ModsImages.find()
});
// TRIMS
Meteor.publish('showTrims', ()=> {
	return Trims.find()
});
// TRIMS IMAGES
Meteor.publish('showTrimsImages', ()=> {
	return TrimsImages.find()
});

// USER
Meteor.publish('userData', ()=> {
	return Meteor.users.find({}, {fields: {profile: 1}})
});

// ORDES
Meteor.publish('showOrders', ()=>{
	return Orders.find()
})