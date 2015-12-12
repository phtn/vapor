Meteor.methods({
	addModToCart (owner, id, name, desc, kit, price, type) {
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
	}
});