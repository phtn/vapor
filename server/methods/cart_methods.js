Meteor.methods({
	insertToCart (id, name, desc, url, price) {
		Cart.insert({
			item: id,
			name: name,
			desc: desc,
			url: url,
			price: price
		})
	},
	removeItemFromCart (id) {
		Cart.remove({_id: id})
	}
})