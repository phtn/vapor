Meteor.methods({
	addToOrders (owner,name, phone, email, address, amount, status, type) {
		Orders.insert({
			owner: owner,
			name: name,
			phone: phone,
			email: email,
			address: address,
			amount: amount,
			status: status,
			type: type,
			payment: null,
			createdAt: new Date(),
			editedAt: new Date() 
		})
	}
});