// Main viewmodel class
define(['knockout'], function (ko) {
    return function appViewModel() {
        this.appName = ko.observable('Knockout JS experiments');
        this.pages = ko.observableArray(['home','users']);
    };
});