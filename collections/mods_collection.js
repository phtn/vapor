Mods = new Mongo.Collection('mods');

Mods.allow({
	insert () {
		return Meteor.userId() === 'TFseLKgPTFr6zHwn2'
		//return true
	},
	update () {
		return Meteor.userId() === 'TFseLKgPTFr6zHwn2'	
		//return true
	},
	remove () {
		return Meteor.userId() === 'TFseLKgPTFr6zHwn2'	
		//return true
	}
});

ModSchema = new SimpleSchema({
	name: {
		type: String,
		label: 'Name',
		autoform: {
			label: false
		}
	},
	desc: {
		type: String,
		label: 'Description',
		optional: true,
		autoform: {
			label: false
		}
	},
	kit: {
		type: String,
		label: 'Kit Includes',
		optional: true,
		autoform: {
			label: false
		}
	},
	price: {
		type: Number,
		decimal: true,
		label: 'Size',
		optional: true,
		autoform: {
			label: false
		}
	},
	imgId: {
		type: String,
		autoform: {
			afFieldInput: {
				type: 'cfs-file',
				collection: 'mods-images'
				
			},
			label: false
		}
	},
	createdAt: {
		type: Date,
		label: 'Created At',
		autoValue () {
			return new Date()
		},
		autoform: {
			type: 'hidden'
		}
	},
	editedAt: {
		type: Date,
		label: 'Edited At',
		autoValue () {
			return new Date()
		},
		autoform: {
			type: 'hidden'
		}
	}
});

Mods.attachSchema( ModSchema );

ModsImages = new FS.Collection('mods-images', {
	stores:[new FS.Store.FileSystem('mods-images', {path: '~/vaportimme/images/mods'})]
});

ModsImages.allow({
	insert () {
		return true
	},
	update () {
		return true
	},
	download () {
		return true
	},
	remove () {
		return true
	}
});



