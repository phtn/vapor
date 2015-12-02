Meteor.methods({
	insertEjuiceFlavor (name, desc, url) {
		Ejuice.insert({
			name: name.toUpperCase(),
			desc: desc,
			url: url,
			createdAt: new Date()
		});
	},
	insertBottleSize (size, price, i, p) {
		BottleSizes.insert({
			size: size,
			price: parseFloat(price),
			createdAt: new Date()
		})
	},
	insertNicotineLevel (level) {
		NicotineLevels.insert({
			level: level,
			createdAt: new Date()
		})
	},
	insertMod (name, price, desc, kit, url) {
		Mods.insert({
			name: name,
			price: price,
			desc: desc,
			kit: kit,
			url: url,
			createdAt: new Date()
		})
	}
});