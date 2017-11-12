// Main viewmodel class
define(['knockout','UserModel'], function(ko, UserModel) {
    return function UserPageModel() {
        var self = this;

        self.title = ko.observable('User management');
        self.users = ko.observableArray([]);
        self.selectedUser = ko.observable();

        self.init = function() {
            self.loadUsers();
        };

        self.loadUsers = function() {
            $.getJSON('/json/users.php',{},function(json) {
                $.each(json, function(i,data) {
                    var user = new UserModel(data);
                    self.users.push(user);
                });
            });
        };

        self.setSelectedUser = function(user) {
            self.selectedUser(user);
            
        };

        self.init();
    };
});