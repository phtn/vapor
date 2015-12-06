Template.adminEjuice.events({
	'click #add-ejuice-btn' () {
		// Insert E-Juice
		Meteor.call('insertEjuiceFlavor', 
			$('#name-ej').val(),
			$('#desc-ej').val(),
			$('#url-ej').val()
		);
		// Clear inputs
		$('#name-ej').val('');
		$('#desc-ej').val('');
		$('#url-ej').val('');
		$('#name-ej').focus();
		// Alert notification
		Bert.alert({
		  type: 'admin-add',
		  message: 'E-juice added to inventory.',
		  style: 'growl-top-right',
		  icon: 'ion-plus-round'
		});
	},
	'click #add-bottle-size-btn' () {
		// Insert Bottle Size
		Meteor.call('insertBottleSize', $('#bottle-size-input').val(), $('#price-input').val());
		// Clear inputs
		$('#bottle-size-input').val('');
		$('#price-input').val('');
		$('#bottle-size-input').focus();
		// Alert notification
		Bert.alert({
		  type: 'admin-add',
		  message: 'Bottle size added to database.',
		  style: 'growl-top-right',
		  icon: 'ion-plus-round'
		});
	},
	'click #add-nicotine-level-btn' () {
		// Insert Nicotine Level
		Meteor.call('insertNicotineLevel', $('#nicotine-level-input').val());
		// Clear inputs
		$('#nicotine-level-input').val('');
		$('#nicotine-level-input').focus();
		// Alert notification
		Bert.alert({
		  type: 'admin-add',
		  message: 'Nicotine Level added to database.',
		  style: 'growl-top-right',
		  icon: 'ion-plus-round'
		});
	},
	'click #next-ejuice-btn' () {
		var ejDoc = Ejuice.find({createdAt: {$gt: Session.get('current-ejuice-date')}}, {sort: {createdAt: 1}, limit: 1});

		ejDoc.forEach((doc)=> {
			$('#edit-ejuice-name').val(doc.name)
			$('#edit-ejuice-desc').val(doc.desc)
			$('#edit-ejuice-url').val(doc.url)
			Session.setPersistent('current-ejuice-name', doc.name)
			Session.setPersistent('current-ejuice-date', doc.createdAt)
			Session.setPersistent('current-ejuice-id', doc._id)
		});
		//console.log('test')
	},
	'click #prev-ejuice-btn' () {
		var ejDoc = Ejuice.find({createdAt: {$lt: Session.get('current-ejuice-date')}}, {sort: {createdAt: -1}, limit: 1});

		ejDoc.forEach((doc)=> {
			$('#edit-ejuice-name').val(doc.name)
			$('#edit-ejuice-desc').val(doc.desc)
			$('#edit-ejuice-url').val(doc.url)
			Session.setPersistent('current-ejuice-name', doc.name)
			Session.setPersistent('current-ejuice-date', doc.createdAt)
			Session.setPersistent('current-ejuice-id', doc._id)
		});
		//console.log('test')
	},
	'click #save-ejuice-btn' () {
		// Update edit
		Meteor.call('updateEjuice', Session.get('current-ejuice-id'), $('#edit-ejuice-name').val(), $('#edit-ejuice-desc').val(), $('#edit-ejuice-url').val())
		// Alert Notification
		Bert.alert({
		  type: 'admin-edit',
		  message: 'Update Successful!',
		  style: 'growl-top-right',
		  icon: 'ion-checkmark-round'
		});
	},
	'click #prev-size-btn' () {
		var sizeDoc = BottleSizes.find({createdAt: {$lt: Session.get('current-size-date')}}, {sort: {createdAt: -1}, limit: 1})
	
		sizeDoc.forEach((doc)=> {
			$('#edit-bottle-size').val(doc.size);
			$('#edit-bottle-price').val(doc.price);
			Session.setPersistent('current-size-date', doc.createdAt)
			Session.setPersistent('current-size-id', doc._id)
		})
	},
	'click #next-size-btn' () {
		var sizeDoc = BottleSizes.find({createdAt: {$gt: Session.get('current-size-date')}}, {sort: {createdAt: 1}, limit: 1})
	
		sizeDoc.forEach((doc)=> {
			$('#edit-bottle-size').val(doc.size);
			$('#edit-bottle-price').val(doc.price);
			Session.setPersistent('current-size-date', doc.createdAt)
			Session.setPersistent('current-size-id', doc._id)
		})
	},
	'click #save-size-btn' () {
		// Update Size & Price
		Meteor.call('updateSizePrice', Session.get('current-size-id'), $('#edit-bottle-size').val(), $('#edit-bottle-price').val())
		// Alert Notification
		Bert.alert({
		  type: 'admin-edit',
		  message: 'Update Successful!',
		  style: 'growl-top-right',
		  icon: 'ion-checkmark-round'
		});
	},
	'click #remove-ejuice-admin-list' () {
		// Remove Ejuice
		Meteor.call('removeEjuiceAdmin', this._id);
		Bert.alert({
		  type: 'admin-remove',
		  message: 'Ejuice Removed!',
		  style: 'growl-top-right',
		  icon: 'ion-close-round'
		});
	},
	'click #remove-size-admin-list' () {
		// Remove Size
		Meteor.call('removeSizeAdmin', this._id)
		Bert.alert({
		  type: 'admin-remove',
		  message: 'Bottle Size Removed!',
		  style: 'growl-top-right',
		  icon: 'ion-close-round'
		});
	},
	'click #remove-nic-admin-list' () {
		// Remove Nic Level
		Meteor.call('removeNicAdmin', this._id)
		Bert.alert({
		  type: 'admin-remove',
		  message: 'Nicotine Level Removed!',
		  style: 'growl-top-right',
		  icon: 'ion-close-round'
		});
	}
});


Template.adminEjuice.helpers({
	ejuice () {
		return Ejuice.find({})
	},
	sizes () {
		return BottleSizes.find({})
	},
	nic () {
		return NicotineLevels.find({})
	}
});

Template.adminEjuice.rendered = ()=> {
	var ej = Ejuice.find({}, {sort: {createdAt: 1}, limit: 1});

	ej.forEach((first)=>{
		Session.setPersistent('current-ejuice-date', first.createdAt)
		$('#edit-ejuice-name').val(first.name)
		$('#edit-ejuice-desc').val(first.desc)
		$('#edit-ejuice-url').val(first.url)
		Session.setPersistent('current-ejuice-name', first.name)
		Session.setPersistent('current-ejuice-id', first._id)
	});

	var sizes = BottleSizes.find({}, {sort: {createdAt: 1}, limit: 1});

	sizes.forEach((first)=> {
		Session.setPersistent('current-size-date', first.createdAt)
		Session.setPersistent('current-size-id', first._id)
		$('#edit-bottle-size').val(first.size)
		$('#edit-bottle-price').val(first.price)
	});
}