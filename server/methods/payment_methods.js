Meteor.methods({
	removeCard (id) {
		PaymentInfo.remove({id: id})
	}
})