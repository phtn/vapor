Meteor.methods({
	
	setForDelivery (id) {
		Orders.update({_id: id}, {
			$set: {
				status: 'for delivery',
				editedAt: new Date()
			}
		})
	},
	setOrderCompleted (id) {
		Orders.update({_id: id}, {
			$set: {
				status: 'order fulfilled',
				editedAt: new Date()
			}
		})
	},
	sendToArchives (id) {
		Orders.update({_id: id}, {
			$set: {
				status: 'archived',
				editedAt: new Date()
			}
		})
	},
	removeAfterPay (id, owner) {
		Orders.remove({_id: id})
		CartSubmit.remove({owner: owner})
	} 
});