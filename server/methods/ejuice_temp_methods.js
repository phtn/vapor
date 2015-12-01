Meteor.methods({
	setActiveSize (id) {
		BottleSizes.update({_id: id}, {$set: {
			className: 'fa fa-square fa-stack-2x active-size'
		}})
	}
})