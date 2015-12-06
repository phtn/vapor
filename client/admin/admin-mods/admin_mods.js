Template.adminMods.rendered = ()=> {
	var modDoc = Mods.find({}, {sort: {createdAt: 1}, limit: 1});

	modDoc.forEach((first)=>{
		Session.setPersistent('current-mod-date', first.createdAt)
		$('#edit-mod-name').val(first.name)
		$('#edit-mod-desc').val(first.desc)
		$('#edit-mod-kit').val(first.kit)
		$('#edit-mod-url').val(first.url)
		$('#edit-mod-price').val(first.price)
		Session.setPersistent('current-mod-name', first.name)
		Session.setPersistent('current-mod-id', first._id)
	});
}

Template.adminMods.events({
	'click #add-mod-btn' () {
		// ADD MOD
		Meteor.call('insertMod', 
			$('#name-mod').val(),
			$('#price-mod').val(),
			$('#desc-mod').val(),
			$('#kit-mod').val(),
			$('#url-mod').val()
		);
		// Clear inputs
		$('#name-mod').val('');
		$('#price-mod').val('');
		$('#desc-mod').val('');
		$('#kit-mod').val('');
		$('#url-mod').val('');
		$('#name-mod').focus();
		// Alert
		Bert.alert({
		  type: 'admin-add',
		  message: 'Mod added to store.',
		  style: 'growl-top-right',
		  icon: 'ion-plus-round'
		});
	},
	'click #prev-mod-btn' () {
		var modDoc = Mods.find({createdAt: {$lt: Session.get('current-mod-date')}}, {sort: {createdAt: -1}, limit: 1})
	
		modDoc.forEach((doc)=> {
			Session.setPersistent('current-mod-date', doc.createdAt)
			$('#edit-mod-name').val(doc.name)
			$('#edit-mod-desc').val(doc.desc)
			$('#edit-mod-kit').val(doc.kit)
			$('#edit-mod-url').val(doc.url)
			$('#edit-mod-price').val(doc.price)
			Session.setPersistent('current-mod-name', doc.name)
			Session.setPersistent('current-mod-id', doc._id)
		})
	},
	'click #next-mod-btn' () {
		var modDoc = Mods.find({createdAt: {$gt: Session.get('current-mod-date')}}, {sort: {createdAt: 1}, limit: 1})
	
		modDoc.forEach((doc)=> {
			Session.setPersistent('current-mod-date', doc.createdAt)
			$('#edit-mod-name').val(doc.name)
			$('#edit-mod-desc').val(doc.desc)
			$('#edit-mod-kit').val(doc.kit)
			$('#edit-mod-url').val(doc.url)
			$('#edit-mod-price').val(doc.price)
			Session.setPersistent('current-mod-name', doc.name)
			Session.setPersistent('current-mod-id', doc._id)
		})
	},
	'click #save-mod-btn' () {
		Meteor.call('updateMod', Session.get('current-mod-id'), $('#edit-mod-name').val(), $('#edit-mod-desc').val(), $('#edit-mod-kit').val(), $('#edit-mod-url').val(), $('#edit-mod-price').val())
		Bert.alert({
		  type: 'admin-edit',
		  message: 'Update Successful!',
		  style: 'growl-top-right',
		  icon: 'ion-checkmark-round'
		});
	},
	'click #remove-mod-admin-list' () {
		Meteor.call('removeModAdmin', this._id)
	}
});

Template.adminMods.helpers({
	mod () {
		return Mods.find({})
	},
	modCount () {
		return Mods.find({}).count()
	}
 });