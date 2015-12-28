Meteor.methods({
	insertProfile (owner, name, phone, email, address, city, state, zip) {
		Profiles.insert({
			owner: owner,
			name: name,
			phone: phone,
			email: email,
			address: address,
			city: city,
			state: state,
			zip: zip,
			country: 'US',
			createdAt: new Date(),
			editedAt: new Date()
		})
	},
	updateProfile (owner, name, phone, email, address, city, state, zip) {
		Profiles.update({owner: owner},{
			$set: {
				name: name,
				phone: phone,
				email: email,
				address: address,
				city: city,
				state: state,
				zip: zip,
				editedAt: new Date()
			}
		})
	}
})