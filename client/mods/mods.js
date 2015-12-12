Meteor.subscribe('showMods');

Template.mods.helpers({
	mods () {
		return Mods.find({})
	},
	image () {
		return ModsImages.findOne({modId: this._id})
	}
});

Template.mods.events({
	
	'click .grid-thumbnail' () {
		Session.setPersistent('mod-id', this._id);
		Session.setPersistent('mod-name',this.name);
		Session.setPersistent('mod-desc',this.desc);
		Session.setPersistent('mod-kit',this.kit);
		Session.setPersistent('mod-price',this.price);

		FlowRouter.go('/mods-temp')
	}
})