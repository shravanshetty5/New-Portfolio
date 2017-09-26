(function () {
    'use strict';
    var appModule = angular.module('myWeb', ['ui.router', 'angularTypewrite']);

    appModule.run(function ($rootScope) {
        $rootScope.$on("$stateChangeError", console.log.bind(console));
    });

    appModule.config(function ($stateProvider, $urlRouterProvider) {
        var states = [
            {
                name: 'home',
                url: '',
                template: '<home></home>'
            },
            {
                name: 'home2',
                url: '/',
                template: '<home></home>'
            },
            {
                name: 'education',
                url: '/education',
                template: '<education></education>'
            },
            {
                name: 'work',
                url: '/work',
                template: '<work></work>'
            },
            {
                name: 'skills',
                url: '/skills',
                template: '<skills></skills>'
            },
            {
                name: 'projects',
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