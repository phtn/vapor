Template.admin.rendered = () => {
	$('#ejuice-ad').click()
	$('#add-content').click()
}

Template.admin.events({
	'click #add-ejuice-btn' () {
		Meteor.call('insertEjuice', 
			$('#name-ej').val(), 
			$('#desc-ej').val(),
			$('#url-ej').val(),
			$('#price-ej').val()
		)
	} 
});