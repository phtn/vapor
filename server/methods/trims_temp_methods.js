Meteor.methods({
	addTrimToCart (owner, id, name, desc, kit, price, type) {
		Cart.insert({
			owner: owner,
			item: id,
			name: name,
			desc: desc,
			kit: kit,
			price: parseFloat(price),
			type: type,
			createdAt: new Date()
		})
	},
	addTrimToCartSubmit (owner, id, name, desc, kit, price, type) {
		CartSubmit.insert({
			owner: owner,
			item: id,
			name: name,
			desc: desc,
			kit: kit,
			price: parseFloat(price),
			type: type,
			status: 'staged',
			createdAt: new Date(),
			editedAt: new Date()
		})
	}
});