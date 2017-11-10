jQuery(document).ready(function($) {

    // https://code.tutsplus.com/tutorials/building-large-maintainable-and-testable-knockoutjs-applications--net-30996

    var Page1 = function() {
        var self = this;
        self.id = 'page1';
        self.title = ko.observable('Page 1');
        self.init = function() {
        };
    };
    var Page2 = function() {
        var self = this;
        self.id = 'users';
        self.title = ko.observable('User management');
        self.users = ko.observableArray([]);
        self.init = function() {
            self.loadUsers();
        };
        self.loadUsers = function() {
            $.getJSON('/json/users.php',{},function(json) {
                $.each(json, function(i,data) {
                    var user = new User(data);
                    self.users.push(user);
                });
            });
        }
    };
    var User = function(data) {
        var self = this;
        self.name = ko.observable(data.name);
        self.address = ko.observable(data.address);
    };

    var ViewModel = function() {
        var self = this;
        self.pages = ko.observableArray([
            new Page1(),
            new Page2()
        ]);
        self.selectedPage = ko.observable();
        self.applicationName = 'Knockout JS experiments';
        self.setPage = function(page) {
            self.selectedPage(page);
            location.hash = page.id;
            page.init();
        };
        self.setPage(self.pages()[0]);
    };

    var viewModel = new ViewModel();
    ko.applyBindings(viewModel);

});