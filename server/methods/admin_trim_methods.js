Meteor.methods({
	insertTrim (name, desc, kit, url, price) {
		Trims.insert({
			name: name,
			desc: desc,
			kit: kit,
			url: url,
			price: price,
			createdAt: new Date(),
			editedAt: new Date()
		})
	},
	updateTrim (id, name, desc, kit, url, price) {
		Trims.update({_id: id}, {
			$set: {
				name: name,
				desc: desc,
				kit: kit,
				url: url,
				price: price,
				editedAt: new Date()
			}
		})
	},
	removeTrimAdmin (id) {
		Trims.remove({_id: id})
	} 
})