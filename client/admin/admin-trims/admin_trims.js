AutoForm.hooks({
 	insertTrimForm: { // autoform id
	   	after: {
	     	insert (error, result, template) {
		      	insertedFile = Trims.findOne(result).imgId;
		      	TrimsImages.update({_id: insertedFile}, {$set: {'trimId': result}});
	      	
	      	// Alert notification
				Bert.alert({
					type: 'admin-add',
					message: 'Trim added to store.',
					style: 'growl-top-right',
					icon: 'ion-plus-round'
				});
	     	}
	   	}
 	}
});

Meteor.subscribe('showTrims');
Meteor.subscribe('showTrimsImages');


Template.adminTrims.rendered = ()=> {
	var trimDoc = Trims.find({}, {sort: {createdAt: 1}, limit: 1});

	trimDoc.forEach((first)=>{
		Session.setPersistent('current-trim-date', first.createdAt)
		$('#edit-trim-name').val(first.name)
		$('#edit-trim-desc').val(first.desc)
		$('#edit-trim-kit').val(first.kit)
		$('#edit-trim-url').val(first.url)
		$('#edit-trim-price').val(first.price)
		Session.setPersistent('current-trim-name', first.name)
		Session.setPersistent('current-trim-id', first._id)
	});
}

Template.adminTrims.events({
	
	'click #prev-trim-btn' () {
		var trimDoc = Trims.find({createdAt: {$lt: Session.get('current-trim-date')}}, {sort: {createdAt: -1}, limit: 1})
	
		trimDoc.forEach((doc)=> {
			Session.setPersistent('current-trim-date', doc.createdAt)
			$('#edit-trim-name').val(doc.name)
			$('#edit-trim-desc').val(doc.desc)
			$('#edit-trim-kit').val(doc.kit)
			$('#edit-trim-url').val(doc.url)
			$('#edit-trim-price').val(doc.price)
			Session.setPersistent('current-trim-name', doc.name)
			Session.setPersistent('current-trim-id', doc._id)
		})
	},
	'click #next-trim-btn' () {
		var trimDoc = Trims.find({createdAt: {$gt: Session.get('current-trim-date')}}, {sort: {createdAt: 1}, limit: 1})
	
		trimDoc.forEach((doc)=> {
			Session.setPersistent('current-trim-date', doc.createdAt)
			$('#edit-trim-name').val(doc.name)
			$('#edit-trim-desc').val(doc.desc)
			$('#edit-trim-kit').val(doc.kit)
			$('#edit-trim-url').val(doc.url)
			$('#edit-trim-price').val(doc.price)
			Session.setPersistent('current-trim-name', doc.name)
			Session.setPersistent('current-trim-id', doc._id)
		})
	},
	'click #save-trim-btn' () {
		Meteor.call('updateTrim', Session.get('current-trim-id'), $('#edit-trim-name').val(), $('#edit-trim-desc').val(), $('#edit-trim-kit').val(), $('#edit-trim-url').val(), $('#edit-trim-price').val())
		Bert.alert({
		  type: 'admin-edit',
		  message: 'Update Successful!',
		  style: 'growl-top-right',
		  icon: 'ion-checkmark-round'
		});
	},
	'click #remove-trim-admin-list' () {
		Meteor.call('removeTrimAdmin', this._id)
	}
});

Template.adminTrims.helpers({
	trim () {
		return Trims.find({})
	},
	trimCount () {
		return Trims.find({}).count()
	}
});