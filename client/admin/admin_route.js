function accessAdmin(template) {
	BlazeLayout.render('admin-layout', {nav: 'adminNav', body: template})
}

FlowRouter.route('/admin', {
	name: 'Admin',
	action(params) {
		accessAdmin('adminLanding')
	}
});

FlowRouter.route('/admin/ejuice', {
	name: 'Admin E-juice',
	action(params) {
		accessAdmin('adminEjuice')
	}
});

FlowRouter.route('/admin/mods', {
	name: 'Admin Mods',
	action(params) {
		accessAdmin('adminMods')
	}
});

FlowRouter.route('/admin/trims', {
	name: 'Admin Trims',
	action(params) {
		accessAdmin('adminTrims')
	}
});

FlowRouter.route('/admin/orders', {
	name: 'Admin Orders',
	action(params) {
		accessAdmin('adminOrders')
	}
});

