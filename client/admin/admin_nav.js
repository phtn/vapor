Template.adminNav.events({
	'click #admin-ejuice' () {
		FlowRouter.go('/admin/ejuice')
	},
	'click #admin-mods' () {
		FlowRouter.go('/admin/mods')
	},
	'click #admin-trims' () {
		FlowRouter.go('/admin/trims')
	},
	'click #admin-orders' () {
		FlowRouter.go('/admin/orders')
	}
});