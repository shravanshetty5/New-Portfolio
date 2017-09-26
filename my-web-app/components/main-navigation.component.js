(function() {
    'use strict';
	angular.module('myWeb').component('mainNavigation', {
        controllerAs: 'vm',
        controller: function() {
            var vm = this;
        },
        templateUrl: 'my-web-app/components/main-navigation.component.html'
    });
}());