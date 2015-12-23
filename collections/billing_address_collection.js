BillingAddress = new Mongo.Collection('billing-address')

BillingAddress.allow({
	insert () {
		return true 
	},
	update (userId, doc) {
		return true
	}
});

BillingAddressSchema = new SimpleSchema({
	owner: {
		type: String,
		label: 'Owner Id',
		autoValue () {
			return Meteor.userId()
		},
		autoform: {
			address: {
		type: String,
		label: 'Address',
		autoform: {
			label: false
		}
	},
			type: 'hidden'
		}
	},
	address: {
		type: String,
		label: 'Address',
		autoform: {
			label: false
		}
	},
	city: {
		type: String,
		label: 'Address',
		autoform: {
			label: false
		}
	},
	state: {
		type: String,
		label: 'Address',
		autoform: {
			label: false
		}
	},
	zip: {
		type: String,
		label: 'Address',
		autoform: {
			label: false
		}
	}
});

BillingAddress.attachSchema( BillingAddressSchema );