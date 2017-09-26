(function () {
    'use strict';
    var appModule = angular.module('myWeb', ['ui.router', 'angularTypewrite']);

    appModule.run(function ($rootScope) {
        $rootScope.$on("$stateChangeError", console.log.bind(console));
    });

    appModule.config(function ($stateProvider, $urlRouterProvider) {
        var states = [
            {
                name: 'Home',
                url: '',
                template: '<home></home>'
            },
            {
                name: 'Home2',
                url: '/',
                template: '<home></home>'
            },
            {
                name: 'Education',
                url: '/education',
                template: '<education></education>'
            },
            {
                name: 'Work',
                url: '/work',
                template: '<work></work>'
            },
            {
                name: 'Skills',
                url: '/skills',
                template: '<skills></skills>'
            },
            {
                name: 'Projects',
                url: '/projects',
                template: '<projects></projects>'
            }
        ];
        $urlRouterProvider.otherwise('/');
        states.forEach(function (state) {       
            $stateProvider.state(state);
        });
    })
}());