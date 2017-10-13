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
                name: 'Experience',
                url: '/experience',
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
            },
            {
                name: 'Error',
                url: '/error',
                template: '<error></error>'
            },
            {
                name: 'Experience.companyList',
                url: '/list',
                template: '<company-list works="vm.works" class="col-lg-6"></company-list>'
            },
            {
                name: 'Experience.workDetails',
                url: '/work/{workId}',
                resolve: {
                    workId: function ($stateParams) {
                        return $stateParams.workId;
                    }
                },
                template: '<work-details works="vm.works" work-id="$resolve.workId" class="col-lg-6"></work-details>'
            }
        ];
        $urlRouterProvider.when('/experience', '/experience/list');
        $urlRouterProvider.otherwise('/error');
        states.forEach(function (state) {       
            $stateProvider.state(state);
        });
    });
}());