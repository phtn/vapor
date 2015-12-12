NicotineLevels = new Mongo.Collection('nicotine-levels');

NicotineLevels.allow({
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

NicotineSchema = new SimpleSchema({
	level: {
		type: String,
		label: 'Nicotine Level',
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

NicotineLevels.attachSchema( NicotineSchema )

