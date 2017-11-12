// Main viewmodel class
define(['knockout'], function(ko) {
    return function Navigation(data) {
        var self = this;
        self.id = ko.observable(data.id);
        self.title = ko.observable(data.title);
    };
});