Template.admin.rendered = () => {
	$('#ejuice-ad').click()
	$('#add-content').click()
}

Template.admin.events({
	'click #add-ejuice-btn' () {

		Meteor.call('insertEjuiceFlavor', 
			$('#name-ej').val(),
			$('#desc-ej').val(),
			$('#url-ej').val()
		);
		$('#name-ej').val('');
		$('#desc-ej').val('');
		$('#url-ej').val('');
		$('#name-ej').focus()
	},
	'click #add-bottle-size-btn' () {
		Meteor.call('insertBottleSize', $('#bottle-size-input').val(), $('#price-input').val());
		$('#bottle-size-input').val('');
		$('#price-input').val('');
		$('#bottle-size-input').focus()
	},
	'click #add-nicotine-level-btn' () {
		Meteor.call('insertNicotineLevel', $('#nicotine-level-input').val());
		$('#nicotine-level-input').val('');
		$('#nicotine-level-input').focus()
	},
	'click #add-mods-btn' () {
		Meteor.call('insertMod', 
			$('#name-mods').val(),
			$('#price-mods').val(),
			$('#desc-mods').val(),
			$('#kit-mods').val(),
			$('#url-mods').val()
		);
		$('#name-mods').val('');
		$('#price-mods').val('');
		$('#desc-mods').val('');
		$('#kit-mods').val('');
		$('#url-mods').val('');
		$('#name-mods').focus();
	}
});