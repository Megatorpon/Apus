function User(username, full_name email, phone) {
	this.username = username;
	this.full_name = full_name
	this.email = email;
	this.phone = phone;
}

User.prototype.getUsername = function() {
	return this.username;
}

User.prototype.getName = function() {
	return this.full_name;
}

User.prototype.getEmail = function() {
	return this.email;
}

User.prototype.getPhone = function() {
	return this.phone;
}
