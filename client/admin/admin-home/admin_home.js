Meteor.subscribe('showHomeImages');
Meteor.subscribe('showHomeCarousel');

AutoForm.hooks({
 insertHomeImagesForm: { // autoform id
   after: {
     insert (error, result, template) {
       insertedFile = HomeImages.findOne(result).imageFile;
       HomeCarousel.update({_id: insertedFile}, {$set: {'itemId': result}});
     
     // Alert notification
		Bert.alert({
		  type: 'admin-add',
		  message: 'Image added to Home Page.',
		  style: 'growl-top-right',
		  icon: 'ion-images'
		});
     }
   }
 }
});

// HELPERS
Template.adminHome.helpers({
	image () {
		return HomeCarousel.find()
	}
});

// EVENTS
Template.adminHome.events({
	'click #remove-image-admin-list' () {
		Meteor.call('removeThisImage', this._id)
		console.log(this._id)
	}
})