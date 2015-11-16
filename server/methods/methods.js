Meteor.methods({
	insertEjuice (name, desc, url, price) {
		Ejuice.insert({
			name: name,
			desc: desc,
			url: url,
			price: price,
			createdAt: new Date()
		});
	}
});