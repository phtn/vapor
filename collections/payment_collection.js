PaymentInfo = new Mongo.Collection('payment-info')

PaymentInfo.allow({
	insert () {
		return true 
	},
	update (userId, doc) {
		if (doc.userId === userId) {
			return true
		}
	}
});

PaymentSchema = new SimpleSchema({
	owner: {
		type: String,
		label: 'Owner Id',
		autoValue () {
			return Meteor.userId()
		},
		autoform: {
			type: 'hidden'
		}
	},
	creditCard: {
		type: String,
		custom: PaymentsHelpers.CreditCardValidation,
		autoform: {
			label: false,
			type: 'payments/creditCard'
		}
	},
	cvc: {
		type: String,
		custom: PaymentsHelpers.CVCValidation,
		autoform: {
			label: false,
			type: 'payments/creditCardCVC'
		}
	},
	expiration: {
		type: String,
		custom: PaymentsHelpers.CCExpiryValidation,
		autoform: {
			label: false,
			type: 'payments/creditCardExpiry'
		}
	}
});

PaymentInfo.attachSchema( PaymentSchema );