Meteor.methods({
	insertBillingAddress (id, address, city, state, zip) {
		BillingAddress.insert({
			owner: id,
			address: address,
			city: city,
			state: state,
			zip: zip,
			country: 'US',
			createdAt: new Date(),
			editedAt: new Date()
		})
	}
});