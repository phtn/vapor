BottleSizes = new Mongo.Collection('bottle-sizes');

BottleSizes.allow({
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

SizeSchema = new SimpleSchema({
	size: {
		type: String,
		label: 'Size',
		//placeholder: 'Bottle Size in ml',
		autoform: {
			label: false
		}
	},
	price: {
		type: Number,
		decimal: true,
		label: 'Size',
		//placeholder: 'Set Price',
		autoform: {
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

BottleSizes.attachSchema( SizeSchema )

