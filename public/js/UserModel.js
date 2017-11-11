// Main viewmodel class
define(['knockout'], function(ko) {
    return function User(data) {
        var self = this;
        self.name = ko.observable(data.name);
        self.address = ko.observable(data.address);
    };
});