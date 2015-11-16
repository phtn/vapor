// E - JUICE
Meteor.publish('showEjuice', ()=> {
	return Ejuice.find({})
})