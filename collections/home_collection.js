HomeImages = new Mongo.Collection('home-images');

HomeImages.allow({
	insert () {
		return true
	},
	update () {
		return true
	}
});

HomeSchema = new SimpleSchema({
	
	imageFile: {
		type: String,
		autoform: {
			afFieldInput: {
				type: 'cfs-file',
				collection: 'files',
				label: 'Image File'
			}
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
	}
});

HomeImages.attachSchema( HomeSchema )


HomeCarousel = new FS.Collection('home-carousel', {
	stores:[new FS.Store.FileSystem('home-carousel', {path: '~/vaportimme/images/home'})]
});

HomeCarousel.allow({
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


