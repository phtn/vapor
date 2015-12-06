Meteor.methods({
	insertMod (name, price, desc, kit, url) {
		Mods.insert({
			name: name,
			price: price,
			desc: desc,
			kit: kit,
			url: '/assets/img/ejuice/' + url,
			createdAt: new Date(),
			editedAt: new Date
		})
	},
	updateMod (id, name, desc, kit, url, price) {
		Mods.update({_id: id}, 
			{$set: {
				name: name,
				desc: desc,
				kit: kit,
				url: url,
				price: price,
				editedAt: new Date()
			}
		})
	},
	removeModAdmin (id) {
		Mods.remove({_id: id})
	}
});