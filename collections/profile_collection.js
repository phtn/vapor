Profiles = new Mongo.Collection('profiles');

Profiles.allow({
	insert (userId, profile) {
		return profile.owner ===  userId;
	}
})