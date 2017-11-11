// Main viewmodel class
define(['knockout'], function(ko) {
    return function HomePageModel() {
        var self = this;
        self.title = ko.observable('Home');

        self.init = function() {};
        self.init();
    };
});