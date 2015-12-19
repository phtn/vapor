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
	addToOrders (owner, name, phone, email, amount, status, type) {
		Orders.insert({
			owner: owner,
			name: name,
			phone: phone,
			email: email,
			amount: amount,
			status: status,
			type: type,
			payment: null,
			createdAt: new Date(),
			editedAt: new Date() 
		})
	},
	removeItemFromCart (id) {
		Cart.remove({_id: id})
	},
	removeItemFromCartSubmit(item) {
		CartSubmit.remove({item: item})
	},
	removeAfterSubmit (owner) {
		Cart.remove({owner: owner})
	}
})