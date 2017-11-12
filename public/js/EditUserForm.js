// Main viewmodel class
define(['knockout'], function(ko, UserModel) {
    return function EditUserForm(data) {
        var self = this;

        self.user = data.user;

        self.test = ko.observable('test');
    };
});