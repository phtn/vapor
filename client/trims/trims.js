
// EVENTS
Template.trims.events({

	'click .grid-thumbnail' () {
		Session.setPersistent('trim-id', this._id);
		Session.setPersistent('trim-name',this.name);
		Session.setPersistent('trim-desc',this.desc);
		Session.setPersistent('trim-kit',this.kit);
		Session.setPersistent('trim-price',this.price);

		FlowRouter.go('/trims-temp')
	}
});

// HELPERS
Template.trims.helpers({
	trims () {
		return Trims.find({})
	},
	image () {
		return TrimsImages.findOne({trimId: this._id})
	}
})