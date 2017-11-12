// Main viewmodel class
define(['knockout'], function(ko) {
    return function User(data) {
        var self = this;
        self.fname = ko.observable(data.fname);
        self.lname = ko.observable(data.lname);
        self.address = ko.observable(data.address);
    };
});