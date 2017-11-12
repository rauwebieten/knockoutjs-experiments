// Main viewmodel class
define(['knockout'], function (ko) {
    return function EditUserForm(data) {
        var self = this;

        self.user = data.user;

        self.fname = ko.observable(self.user().fname());
        self.lname = ko.observable(self.user().lname());

        /*self.save = function () {
            self.user().fname(self.fname());
            self.user().lname(self.lname());
        }*/
    };
});