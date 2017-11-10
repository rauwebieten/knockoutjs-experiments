requirejs.config({
    shim : {
        "bootstrap" : { "deps" :['jquery'] }
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

require(['knockout', 'ApplicationViewModel', 'bootstrap', 'domReady'], function (ko, appViewModel, bootstrap, domReady) {

    ko.components.register('like-widget', {
        viewModel: function(params) {
            this.test = 'OWJE'
        },
        template:
            'MY TPL <strong data-bind="text: test"></strong>'
    });
    ko.components.register('like-or-dislike', {
        viewModel: { require: 'TestModel' },
        template: { require: 'text!../templates/test.html' }
    });

    ko.applyBindings(new appViewModel());
    domReady(function() {});
});