Meteor.methods({
	insertEjuice (name, desc, url, size1, size2, size3, size4, price1, price2, price3, price4, nicLev1, nicLev2, nicLev3, nicLev4, nicLev5, nicLev6, nicLev7, nicLev8) {
		Ejuice.insert({
			name: name,
			desc: desc,
			url: url,
			xs: {
				size: size1,
				price: price1
			},
			sm: {
				size: size2,
				price: price2
			},
			md: {
				size: size3,
				price: price3
			},
			lg: {
				size: size4,
				price: price4
			},
			nicLev1: nicLev1,
			nicLev2: nicLev2,
			nicLev3: nicLev3, 
			nicLev4: nicLev4,
			nicLev5: nicLev5,
			nicLev6: nicLev6,
			nicLev7: nicLev7,
			nicLev8: nicLev8,
			createdAt: new Date()
		});
	}
});