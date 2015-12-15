BookPrice = new Mongo.Collection('boot-price');

BookPrice.allow({
	insert () {
		return Meteor.userId() === 'TFseLKgPTFr6zHwn2'
		//return true
	},
	update () {
		return Meteor.userId() === 'TFseLKgPTFr6zHwn2'	
		//return true
	}
})

BookPriceSchema = new SimpleSchema({
	tax: {
		type: Number,
		label: 'Tax Rate',
		autoform: {
			decimal: true
		}
	}
});