Trims = new Mongo.Collection('trims');

Trims.allow({
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

TrimSchema = new SimpleSchema({
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
		autoform: {
			label: false
		}
	},
	kit: {
		type: String,
		label: 'Kit Includes',
		autoform: {
			label: false
		}
	},
	price: {
		type: Number,
		decimal: true,
		label: 'Price',
		autoform: {
			label: false
		}
	},
	imgId: {
		type: String,
		autoform: {
			afFieldInput: {
				type: 'cfs-file',
				collection: 'trims-images'
				
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

Trims.attachSchema( TrimSchema );

TrimsImages = new FS.Collection('trims-images', {
	stores:[new FS.Store.FileSystem('trims-images', {path: '~/vaportimme/images/trims'})]
});

TrimsImages.allow({
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



