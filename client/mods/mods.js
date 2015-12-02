Meteor.subscribe('showMods');

Template.mods.helpers({
	mods () {
		return Mods.find({})
	}
});

Template.mods.events({
	'click .grid-thumbnail' () {
		Session.setPersistent('id-mod', this._id);
		Session.setPersistent('name-mod',this.name);
		Session.setPersistent('price-mod',this.price);
		Session.setPersistent('desc-mod',this.desc);
		Session.setPersistent('kit-mod',this.kit);
		Session.setPersistent('url-mod',this.url);
		FlowRouter.go('/mods-temp')
	}
})