Ejuices = new Mongo.Collection('ejuices');

Ejuices.allow({
	insert () {
		return Meteor.userId() === 'TFseLKgPTFr6zHwn2'
		//return true
	},
	update () {
		return Meteor.userId() === 'TFseLKgPTFr6zHwn2'	
		//return true
	}
});

EjuiceSchema = new SimpleSchema({
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
	imgId: {
		type: String,
		autoform: {
			afFieldInput: {
				type: 'cfs-file',
				collection: 'ejuice-images'
				
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

Ejuices.attachSchema( EjuiceSchema );

SimpleSchema.debug = true;

EjuiceImages = new FS.Collection('ejuice-images', {
	stores:[new FS.Store.FileSystem('ejuice-images', {path: '~/vaportimme/images/ejuice'})]
});

EjuiceImages.allow({
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
