Meteor.methods({
	addModToCart (id, name, price, url, type) {
		Cart.insert({
			item: id,
			name: name,
			price: parseFloat(price),
			url: url,
			type: type,
			createdAt: new Date()
		})
	}
});