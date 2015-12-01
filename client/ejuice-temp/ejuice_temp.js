Template.ejuiceTemp.helpers({
	name () {
		return Session.get('ejuice-name')
	},
	desc () {
		return Session.get('ejuice-desc')
	},
	url () {
		return Session.get('ejuice-url')
	}
})