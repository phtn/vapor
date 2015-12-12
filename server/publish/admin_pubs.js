

Meteor.publish('showEjuices', ()=> {
	return Ejuices.find()
});

Meteor.publish('showEjuiceImages', ()=> {
	return EjuiceImages.find()
});