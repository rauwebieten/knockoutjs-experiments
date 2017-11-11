requirejs.config({
    shim: {
        "bootstrap": {"deps": ['jquery']}
    },
    paths: {
        "jquery": "/bower_components/jquery/dist/jquery.min",
        "knockout": "/bower_components/knockout/dist/knockout",
        "bootstrap": "/bower_components/bootstrap/dist/js/bootstrap.min",
        "domReady": "/bower_components/domReady/domReady",
        "text": "/bower_components/text/text",
        "ApplicationViewModel": "/js/ApplicationViewModel"
    }
});

require(['knockout', 'ApplicationViewModel', 'bootstrap', 'domReady'], function (ko, ApplicationViewModel, bootstrap, domReady) {

    ko.components.register('user-page', {
        viewModel: {require: 'UserPageModel'},
        template: {require: 'text!../templates/users.html'}
    });

    ko.applyBindings(new ApplicationViewModel());
    domReady(function () {
    });
});