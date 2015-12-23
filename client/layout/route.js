function renderThisTemplate(template) {
	BlazeLayout.render('layout', {nav: 'nav', body: template})
}

function accessAdmin(template) {
	BlazeLayout.render('admin-layout', {nav: 'adminNav', body: template})
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

FlowRouter.route('/ejuice-temp', {
	name: "E-Juice-temp",
	action(params) {
		renderThisTemplate('ejuiceTemp')
	}
});

FlowRouter.route('/mods', {
	name: "Mods",
	action(params) {
		renderThisTemplate('mods')
	}
});

FlowRouter.route('/faqs', {
	name: 'Vaping FAQs',
	action(params) {
		renderThisTemplate('faqs')
	}
});

FlowRouter.route('/findus', {
	name: 'Find Us',
	action(params) {
		renderThisTemplate('findus')
	}
});

FlowRouter.route('/cart', {
	name: 'Cart',
	action(params) {
		renderThisTemplate('cart')
	}
});

FlowRouter.route('/login', {
	name: 'Login',
	action(params) {
		renderThisTemplate('login')
	}
});

FlowRouter.route('/profile', {
	name: 'Profile',
	action(params) {
		renderThisTemplate('profile')
	}
});

FlowRouter.route('/payments', {
	name: 'Payments',
	action(params) {
		renderThisTemplate('payments')
	}
});

FlowRouter.route('/order-submitted', {
	name: 'Thanks',
	action(params) {
		renderThisTemplate('thanks')
	}
});