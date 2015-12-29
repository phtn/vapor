Meteor.methods({
	removeThisImage (id) {
		HomeImages.remove({imageFile: id})
		HomeCarousel.remove({_id: id})
	}
});