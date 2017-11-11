// Main viewmodel class
define(['knockout'], function (ko) {
    return function appViewModel() {
        this.firstName = ko.observable('Peter');
        this.pages = ko.observableArray(['home','users']);
    };
});