Template.modsTemp.helpers({
	name () {
		return Session.get('name-mod')
	},
	price () {
		return Session.get('price-mod')
	},
	desc () {
		return Session.get('desc-mod')
	},
	kit () {
		return Session.get('kit-mod')
	},
	url () {
		return Session.get('url-mod')
	}
});

Template.modsTemp.events({
	'click #back-to-mods' () {
		FlowRouter.go('/mods')
	}
})