Meteor.methods({
	addToOrders (owner, name, phone, email, amount, status, type) {
		Orders.insert({
			owner: owner,
			name: name,
			phone: phone,
			email: email,
			amount: amount,
			status: status,
			type: type,
			payment: null,
			createdAt: new Date(),
			editedAt: new Date() 
		})
	},
	removeAfterPay (id, owner) {
		Orders.remove({_id: id})
		CartSubmit.remove({owner: owner})
	} 
});