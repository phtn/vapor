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
			'15 ml', '30 ml', '50 ml', '100 ml',
			parseFloat($('#price-one').val()),
			parseFloat($('#price-two').val()),
			parseFloat($('#price-three').val()),
			parseFloat($('#price-four').val()),
			'0 mg', '1.5 mg', '3 mg', '6 mg', 
			'9 mg', '12 mg', '18 mg', '24 mg' 
		)
	} 
});