Meteor.methods({
	addEjuiceToCart (id,name, price, url, size, nic, type) {
		Cart.insert({
			item: id,
			name: name,
			price: price,
			url: url,
			size: size + 'ml',
			nic: nic + 'mg',
			type: type,
			createdAt: new Date()
		})
	}
});