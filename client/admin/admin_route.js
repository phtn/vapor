function accessAdmin(template) {
	BlazeLayout.render('admin-layout', {nav: 'adminNav', body: template})
}

FlowRouter.route('/admin', {
	name: 'Admin',
	action(params) {
		if (Meteor.user()) {
			accessAdmin('adminLanding')	
		}	
		
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

FlowRouter.route('/admin/home', {
	name: 'Admin Home',
	action(params) {
		accessAdmin('adminHome')
	}
});

FlowRouter.route('/admin/orders', {
	name: 'Admin Orders',
	action(params) {
		accessAdmin('adminOrders')
	}
});

