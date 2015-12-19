Meteor.methods({
	insertEjuiceFlavor (name, desc, url) {
		Ejuice.insert({
			name: name.toUpperCase(),
			desc: desc,
			url: '/assets/img/ejuice/' + url,
			createdAt: new Date(),
			editedAt: new Date()
		});
	},
	insertBottleSize (size, price, i, p) {
		BottleSizes.insert({
			size: size,
			price: parseFloat(price),
			createdAt: new Date(),
			editedAt: new Date()
		})
	},
	insertNicotineLevel (level) {
		NicotineLevels.insert({
			level: level,
			createdAt: new Date(),
			editedAt: new Date()
		})
	},
	updateEjuice (id, name, desc) {
		Ejuices.update({_id: id}, 
		{$set: {
			name: name,
			desc: desc,
			editedAt: new Date()
			}
		})
	},
	updateSizePrice(id, size, price) {
		BottleSizes.update({_id: id},
		{$set: {
			size: size,
			price: price,
			editedAt: new Date()
			}
		})
	},
	removeEjuiceAdmin (id) {
		Ejuices.remove({_id: id})
	},
	removeSizeAdmin (id) {
		BottleSizes.remove({_id: id})
	},
	removeNicAdmin (id) {
		NicotineLevels.remove({_id: id})
	}
});