Template.ejuiceTemp.rendered = ()=> {
	Session.seDefault('ejuice-price', 13.99)
}

Template.ejuiceTemp.helpers({
	name () {
		return Session.get('ejuice-name')
	},
	desc () {
		return Session.get('ejuice-desc')
	},
	url () {
		return Session.get('ejuice-url')
	},
	price () {
		return Session.get('ejuice-price')
	}
});

