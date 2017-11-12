// Main viewmodel class
define(['knockout', 'Navigation'], function (ko, Navigation) {
    return function appViewModel() {
        var self = this;
        self.appName = ko.observable('Knockout JS experiments');
        self.pages = ko.observableArray(['home','users'])
        self.navigation = ko.observableArray([
            new Navigation({id:'home', title:'Homepage'}),
            new Navigation({id:'users', title:'User management'}),
        ]);
        self.selectedNavigation = ko.observable(self.navigation()[0]);

        self.setNavigation = function(navigation) {
            self.selectedNavigation(navigation);
        };
    };
});