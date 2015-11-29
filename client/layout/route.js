function renderThisTemplate(template) {
	BlazeLayout.render('layout', {nav: "nav", body: template})
}
FlowRouter.route('/', {
	name: "Landing",
	action(params) {
		BlazeLayout.render('landing')
	}
});

FlowRouter.route('/home', {
	name: "Home",
	action(params) {
		renderThisTemplate('home')
	}
});

FlowRouter.route('/ejuice', {
	name: "E-Juice",
	action(params) {
		renderThisTemplate('ejuice')
	}
});

FlowRouter.route('/cart', {
	name: 'Cart',
	action(params) {
		renderThisTemplate('cart')
	}
});

FlowRouter.route('/admin', {
	name: 'Admin',
	action(params) {
		renderThisTemplate('admin')
	}
});