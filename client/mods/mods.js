Meteor.subscribe('showMods');

Template.mods.helpers({
	mods () {
		return Mods.find({})
	}
});

Template.mods.events({
	'click .grid-thumbnail' () {
		console.log(this.name)
	}
})