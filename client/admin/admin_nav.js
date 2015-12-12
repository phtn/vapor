Template.adminNav.rendered = ()=> {
	var focus = 'focus'; 
	var $nav = $('.auth-admin-nav li').click(function(e) {
	    e.preventDefault();
	
	    $nav.removeClass(focus);
	    $(this).addClass(focus);
	});
}

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

